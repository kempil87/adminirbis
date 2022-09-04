import React from 'react';
import './ClubPage.css'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Notification from "../../../../components/ui/Notification/Notification";
import {IrbisLoader} from "../../../../components/ui/Loaders/IrbisLoader";
import ClubCard from "../../../../components/cards/ClubCard/ClubCard";
import {observer} from "mobx-react";
import {useRootStore} from "../../../../base/hooks/useRootStore";

const ClubPage = observer(() => {
    const {clubStore} = useRootStore();

    const filterClub = clubStore.allClub.filter(club =>{
            return club.name.toLowerCase().includes(clubStore.searchClub.toLowerCase())
        })

    useEffect(() => {
        clubStore.getAllClub()
    }, [])

    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <Link className="d-flex align-items-center m-2" to="/club/add"
                      style={{fontWeight: 300, textDecoration: "none", color: "gold"}} >
                    Добавить Игрока
                    <span style={{color: "gold"}} className="material-symbols-outlined m-2">add_circle</span>
                </Link>
                <form className='d-flex align-items-center position-relative input-form'>
                    <span style={{fontWeight:200}} className="material-symbols-outlined position-absolute">search</span>
                    <input
                        className='search-club'
                        placeholder='Поиск'
                        type='text'
                        value={clubStore.searchClub}
                        onChange={(e) =>clubStore.filterClub(e.target.value)}
                    />
                    {clubStore.searchClub &&(
                        <span onClick={() =>clubStore.filterClub('')} style={{fontWeight:200,right:0,cursor:"pointer",zIndex:605}} className="material-symbols-outlined position-absolute clear-input">clear</span>
                    )}
                </form>

            </div>
            <div className="d-flex flex-column">
                {clubStore.loader ? (
                    <IrbisLoader/>
                ) : (
                    <>
                        {filterClub.map(c => (
                            <ClubCard
                                key={c._id}
                                name={c.name}
                                image={c.image}
                                _id={c._id}
                                deleteClub={(id) => clubStore.deleteClub(id)}
                                position={c.position}
                            />
                        ))}
                        {filterClub.length === 0 &&(
                            <div>По вашему запросу ничего не найдено</div>
                        )}
                    </>
                )}
            </div>

            {clubStore.loaderNotification && (
                <Notification text='Игрок был успешно удален' icon='check_circle'/>
            )}
        </div>
    );
});
export default ClubPage;