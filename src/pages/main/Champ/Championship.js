import React from 'react';
import {useEffect, useState} from "react";
import {api} from "../../../base/axios";
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../../components/ui/Loaders/IrbisLoader";
import GameCard from "../../../components/cards/GameCard/GameCard";
import Notification from "../../../components/ui/Notification/Notification";

const Championship = () => {

    const [championship, setChampionship] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loaderDelete, setLoaderDelete] = useState(false);


    const getChampionship = (isDelete) => {
        api.get('/championship').then((res) => {
            setTimeout(() => {
                setChampionship(res.data.reverse())
                setLoader(false)
            }, isDelete ? 0 : 1000)
        })
    }

    const deleteShop = (id) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        setLoaderDelete(true)
        api.get(`/championship/delete/${id}`).then((res) => {
            getChampionship(true)
            setTimeout(() => {
                setLoaderDelete(false)
            }, 1800)
        })
    }

    useEffect(() => {
        getChampionship(false)
    }, [])


    return (

        <div className='pt-3'>

            <div className="d-flex justify-content-between align-items-center">
                <Link className="d-flex align-items-center m-2" to="/championship/add"
                      style={{fontWeight: 300, textDecoration: "none", color: "gold"}}>
                    Добавить Матч
                    <span style={{color: "gold"}} className="material-symbols-outlined m-2">add_circle</span>
                </Link>
            </div>


            <div className="d-flex flex-column">
                {loader ? (
                    <IrbisLoader/>
                ) : (
                    <>
                        {championship.map(game => (
                            <GameCard
                                key={game._id}
                                date={game.date}
                                scoreHome={game.scoreHome}
                                scoreGuest={game.scoreGuest}
                                homeLogo={game.homeLogo}
                                homeTeam={game.homeTeam}
                                homeCity={game.homeCity}
                                guestLogo={game.guestLogo}
                                guestTeam={game.guestTeam}
                                guestCity={game.guestCity}
                                value={game.value}
                                photo={game.photo}
                                video={game.video}
                                league={game.league}
                                place={game.place}
                                _id={game._id}
                                deleteShop={(id) => deleteShop(id)}
                            />
                        ))}
                    </>
                )}
            </div>

            {loaderDelete && (
                <Notification text='Матч был успешно удален' icon='check_circle'/>
            )}
        </div>
    );
};

export default Championship;