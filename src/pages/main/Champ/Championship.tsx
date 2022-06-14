import React from 'react';
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../../components/ui/Loaders/IrbisLoader";
import GameCard from "../../../components/cards/GameCard/GameCard";
import Notification from "../../../components/ui/Notification/Notification";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {observer} from "mobx-react";

const Championship =observer( () => {

    const {championshipStore} = useRootStore();

    useEffect(() => {
        championshipStore.getAllChampionship()
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
                {championshipStore.loader ? (
                    <IrbisLoader/>
                ) : (
                    <>
                        {championshipStore.allChamp.map(game => (
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
                                deleteShop={(id) => championshipStore.deleteChampionship(id)}
                            />
                        ))}
                    </>
                )}
            </div>

            {championshipStore.loaderNotification && (
                <Notification text='Матч был успешно удален' icon='check_circle'/>
            )}
        </div>
    );
});

export default Championship;