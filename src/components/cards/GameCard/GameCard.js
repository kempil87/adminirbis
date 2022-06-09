import React from 'react';
import './GameCard.css'
import {Link} from "react-router-dom";

const GameCard = ({league, date, _id, deleteShop,value,place,homeCity,scoreHome,scoreGuest,homeLogo,homeTeam,guestLogo,guestTeam,guestCity,photo,video}) => {

    return (

        <div className="d-flex justify-content-between mt-3">
            <div className="">
                <div className="prev-game">
                    <h5 style={{textTransform:"uppercase"}}>{value}</h5>
                    <div className="d-flex justify-content-around mt-2">
                        <div className="home-team">
                            <img className="logo-game-prev"
                                 src={homeLogo}
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
                            <div className="game-link-wrap">
                                <div  className="d-flex flex-column game-link">
                                    <span className="material-symbols-outlined">photo_camera</span>
                                    <h6>Фото</h6>
                                </div>
                                <div className="d-flex flex-column game-link">
                                    <span className="material-symbols-outlined">live_tv</span>
                                    <h6>Трансляция</h6>
                                </div>
                            </div>
                        </div>
                        <div className="guest-team">
                            <img className="logo-game-prev"
                                 src={guestLogo}
                            />
                            <div className="team-name">{guestTeam}</div>
                            <div className="team-city">{guestLogo}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div onClick={() => deleteShop(_id)} style={{cursor: "pointer"}} className="d-flex align-items-center change-item">
                    <div style={{fontWeight: 300}} className="m-2">Удалить</div>
                    <span className="material-symbols-outlined ">close</span>
                </div>
                <Link to={`/editshop/${_id}`} style={{cursor: "pointer", textDecoration: "none", color: "white"}}
                      className="d-flex align-items-center change-item">
                    <div style={{fontWeight: 300}} className="m-2">Редактировать</div>
                    <span className="material-symbols-outlined ">edit</span>
                </Link>
            </div>
        </div>
    );
};

export default GameCard;