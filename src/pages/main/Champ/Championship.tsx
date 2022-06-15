import React from 'react';
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {IrbisLoader} from "../../../components/ui/Loaders/IrbisLoader";
import GameCard from "../../../components/cards/GameCard/GameCard";
import Notification from "../../../components/ui/Notification/Notification";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {observer} from "mobx-react";
import {Button, Table} from "react-bootstrap";

const Championship = observer(() => {

    const {championshipStore} = useRootStore();

    useEffect(() => {
        championshipStore.getAllChampionship()
        championshipStore.getTables()
    }, [])

    return (
        <div className='pt-3'>
            <Link style={{fontWeight: 300, textDecoration: "none", color: "gold"}} to='/championship/table'>Добавить Команду</Link>
            <Link
                style={{fontWeight: 300, textDecoration: "none", color: "gold", marginLeft: 16}}
                to='/championship/table/edit'
            >
                Править таблицу
            </Link>

            <Table style={{zIndex: 100, marginTop: 30}} striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>№</th>
                    <th className="d-none d-lg-block">Команда</th>
                    <th>И</th>
                    <th>В</th>
                    <th>ОТВ</th>
                    <th>П</th>
                    <th>ОТП</th>
                    <th>ЗМ</th>
                    <th>ПМ</th>
                    <th>О</th>
                </tr>
                </thead>
                <tbody>
                {championshipStore.table
                    .slice()
                    .sort((a,b) => b.score - a.score)
                    .map((item, idx) => (
                    <tr key={item._id}>
                        <td>{idx + 1}</td>
                        <td className="d-flex align-items-center">
                            <img className="logo-table " width='60' alt='logo'
                                 src={item.logoTeam}
                            />
                            <div style={{fontSize: 14}} className="d-none d-lg-block">{item.nameTeam}</div>

                        </td>
                        <td>
                            <div>{item.games}</div>
                        </td>
                        <td>
                            <div>{item.wins}</div>
                        </td>
                        <td>
                            <div>{item.winsOverTime}</div>
                        </td>
                        <td>
                            <div>{item.loss}</div>
                        </td>
                        <td>
                            <div>{item.loseOverTime}</div>
                        </td>

                        <td>
                            <div>{item.goalBall}</div>
                        </td>
                        <td>
                            <div>{item.missBall}</div>
                        </td>
                        <td>
                            <div>{item.score}</div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>


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