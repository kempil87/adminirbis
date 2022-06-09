import React from 'react';
import {Link} from "react-router-dom";

const ClubCard = ({name,position,_id,deleteClub,image}) => {

    return (
        <div  className="d-flex justify-content-between mt-3">
            <div className="d-flex">
                <img className="m-2" width="180" height="200" src={image}/>
                <div className="m-2">
                    <h4>{name}</h4>
                    <h5>{position}</h5>
                </div>
            </div>

            <div>
                <div onClick={() => deleteClub(_id)} style={{ cursor: "pointer"}} className="d-flex align-items-center change-item ">
                    <div style={{fontWeight:300}} className="m-2" >Удалить</div>
                    <span className="material-symbols-outlined ">close</span>
                </div>
                <Link  to={`/editclub/${_id}`} style={{ cursor: "pointer",textDecoration:"none",color:"white"}} className="change-item d-flex align-items-center">
                    <div style={{fontWeight:300}} className="m-2" >Редактировать</div>
                    <span className="material-symbols-outlined ">edit</span>
                </Link>
            </div>
        </div>
    );
};

export default ClubCard;