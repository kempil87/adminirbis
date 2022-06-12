import React from 'react';
import './ClubPage.css'
import {useEffect, useState} from "react";
import {api} from "../../../../base/axios";
import {Link} from "react-router-dom";
import Notification from "../../../../components/ui/notification";
import {IrbisLoader} from "../../../../components/ui/Loaders/IrbisLoader";
import ClubCard from "../../../../components/cards/ClubCard/ClubCard";

const ClubPage = () => {
    const [club, setClub] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loaderDelete, setLoaderDelete] = useState(false);
    const [searchClub, setSearchClub] = useState('');
    
    const filterClub = club.filter(club =>{
            return club.name.toLowerCase().includes(searchClub.toLowerCase())
        })

    

    const getAllCLub = (isDelete) => {
        api.get('/club').then((res) => {
            setTimeout(() => {
                setClub(res.data.reverse())
                setLoader(false)
            }, isDelete ? 0 : 1000)
        })
    }

    const deleteClub = (id) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        setLoaderDelete(true)
        api.get(`/club/delete/${id}`).then((res) => {
            getAllCLub(true)
            setTimeout(() => {
                setLoaderDelete(false)
            }, 1800)
        })
    }

    useEffect(() => {
        getAllCLub(false)
    }, [])


    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <Link className="d-flex align-items-center m-2" to="/addclub"
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
                        value={searchClub}
                        onChange={(e) =>setSearchClub(e.target.value)}
                    />
                    {searchClub &&(
                        <span onClick={() =>setSearchClub('')} style={{fontWeight:200,right:0,cursor:"pointer",zIndex:605}} className="material-symbols-outlined position-absolute clear-input">clear</span>
                    )}
                </form>

            </div>
            <div className="d-flex flex-column">
                {loader ? (
                    <IrbisLoader/>
                ) : (
                    <>
                        {filterClub.map(c => (
                            <ClubCard
                                key={c._id}
                                name={c.name}
                                image={c.image}
                                _id={c._id}
                                deleteClub={(id) => deleteClub(id)}
                                position={c.position}
                            />
                        ))}
                    </>
                )}
            </div>

            {loaderDelete && (
                <Notification text='Игрок был успешно удален' icon='check_circle'/>
            )}
        </div>
    );
};
export default ClubPage;