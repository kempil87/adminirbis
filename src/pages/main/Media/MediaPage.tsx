import React from 'react';
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../../components/ui/Loaders/IrbisLoader";
import Notification from "../../../components/ui/Notification/Notification";
import {useEffect, useState} from "react";
import {MediaCard} from "../../../components/cards/MediaCard/MediaCard";
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";

const MediaPage = observer(() => {


    const {mediaStore} = useRootStore();

    const [searchMedia, setSearchMedia] = useState('');

    const filterMedia =mediaStore.media.filter(media =>{
        return media.name.toLowerCase().includes(searchMedia.toLowerCase())
    })

    const deleteMedia = (id) => {
       mediaStore.deleteMedia(id)
    }

    useEffect(() => {
        mediaStore.getAllMedia()
    }, [])


    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <Link className="d-flex align-items-center m-2" to="/media/add"
                      style={{fontWeight: 300, textDecoration: "none", color: "gold"}} >
                    Добавить Фото или Видео
                    <span style={{color: "gold"}} className="material-symbols-outlined m-2">add_circle</span>
                </Link>
                <form className='d-flex align-items-center position-relative'>
                    <span style={{fontWeight:200}} className="material-symbols-outlined position-absolute">search</span>
                    <input
                        value={searchMedia}
                        className='search-club'
                        placeholder='Поиск'
                        type='text'
                        onChange={(e) =>setSearchMedia(e.target.value)}
                    />
                    {searchMedia &&(
                        <span onClick={() =>setSearchMedia('')}
                              style={{fontWeight:200,right:0,cursor:"pointer",zIndex:605}}
                              className="material-symbols-outlined position-absolute">clear</span>
                    )}
                </form>

            </div>
            <div className="d-flex flex-column">
                {mediaStore.loader ? (
                    <IrbisLoader/>
                ) : (
                    <>
                        {filterMedia.map(m => (
                            <MediaCard
                                key={m._id}
                                name={m.name}
                                image={m.image}
                                _id={m._id}
                                deleteMedia={(id) => deleteMedia(id)}
                                date={m.date}
                                all={m.all}
                            />
                        ))}
                    </>
                )}
            </div>

            {mediaStore.loaderNotification && (
                <Notification text='Медиа была успешно удалена' icon='check_circle'/>
            )}
        </div>
    );
});

export default MediaPage;