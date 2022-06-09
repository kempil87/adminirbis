import React from 'react';
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../components/ui/Loaders/IrbisLoader";
import {ClubCard} from "../../components/cards/ClubCard/ClubCard";
import Notification from "../../components/ui/notification";
import {useEffect, useState} from "react";
import {api} from "../../base/axios";
import {MediaCard} from "../../components/cards/MediaCard/MediaCard";

const MediaPage = () => {
    const [media, setMedia] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loaderDelete, setLoaderDelete] = useState(false);
    const [searchMedia, setSearchMedia] = useState('');

    const filterMedia = media.filter(media =>{
        return media.name.toLowerCase().includes(searchMedia.toLowerCase())
    })
    const getAllMedia = (isDelete) => {
        api.get('/media').then((res) => {
            setTimeout(() => {
                setMedia(res.data.reverse())
                setLoader(false)
            }, isDelete ? 0 : 1000)
        })
    }

    const deleteMedia = (id) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        setLoaderDelete(true)
        api.get(`/media/delete/${id}`).then((res) => {
            getAllMedia(true)
            setTimeout(() => {
                setLoaderDelete(false)
            }, 1800)
        })
    }

    useEffect(() => {
        getAllMedia(false)
    }, [])


    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <Link className="d-flex align-items-center m-2" to="/addmedia"
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
                        <span onClick={() =>setSearchMedia('')} style={{fontWeight:200,right:0,cursor:"pointer",zIndex:605}} className="material-symbols-outlined position-absolute">clear</span>
                    )}
                </form>

            </div>
            <div className="d-flex flex-column">
                {loader ? (
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

            {loaderDelete && (
                <Notification text='Медиа была успешно удалена' icon='check_circle'/>
            )}
        </div>
    );
};

export default MediaPage;