import React from 'react';
import './GameCard.css'
import {Link} from "react-router-dom";

interface IGameCard {
    date: string
    scoreHome: string
    scoreGuest: string
    homeLogo: string
    homeTeam: string
    homeCity: string
    guestLogo: string
    guestTeam: string
    guestCity: string
    value: string
    photo: string
    video: string
    league: string
    place: string
    _id: string
    deleteShop: (id: string) => void
}

const GameCard = ({league, date, _id, deleteShop, value, place, homeCity, scoreHome, scoreGuest,
                      homeLogo, homeTeam, guestLogo, guestTeam, guestCity,photo,video}) => {
    return (
        <div className="d-flex justify-content-between mt-3">
            <div className="">
                <div className="prev-game">
                    <h5 style={{textTransform: "uppercase"}}>{value}</h5>
                    <div className="d-flex justify-content-around mt-2">
                        <div className="home-team">
                            <img className="logo-game-prev"
                                 src={homeLogo}
                                 alt='homeLogo'
                            />
                            <div className="team-name">{homeTeam}</div>
                            <div className="team-city">{homeCity}</div>
                        </div>

                        <div className="game-info">
                            <div className="game-date">
                                <span className="material-symbols-outlined">today</span>
                                {date}
                            </div>
                            <div className="game-score">{scoreHome} : {scoreGuest}</div>
                            <div className="game-league">{league}</div>
                            <div className="game-place">{place}</div>
                            <div className="game-link-wrap"/>
                        </div>
                        <div className="guest-team">
                            <img className="logo-game-prev"
                                 alt='guestLogo'
                                 src={guestLogo}
                            />
                            <div className="team-name">{guestTeam}</div>
                            <div className="team-city">{guestCity}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div onClick={() => deleteShop(_id)} style={{cursor: "pointer"}}
                     className="d-flex align-items-center change-item">
                    <div style={{fontWeight: 300}} className="m-2">Удалить</div>
                    <span className="material-symbols-outlined ">close</span>
                </div>
                <Link to={`/championship/edit/${_id}`} style={{cursor: "pointer", textDecoration: "none", color: "white"}}
                      className="d-flex align-items-center change-item">
                    <div style={{fontWeight: 300}} className="m-2">Редактировать</div>
                    <span className="material-symbols-outlined ">edit</span>
                </Link>
            </div>
        </div>
    );
};

export default GameCard;