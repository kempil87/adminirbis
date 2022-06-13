import React from 'react';
import {Link} from "react-router-dom";

export const MediaCard = ({all,image,_id,date,name,deleteMedia}) => {
    return (
        <div  className="d-flex justify-content-between mt-3">
            <div className="d-flex">
                <img className="m-2" width="280" height="170" src={image} alt='media'/>
                <div  className="m-2">
                    <h6 style={{fontWeight:300}}>{all} Фото</h6>
                    <h6 style={{fontWeight:300}}>{date}</h6>
                    <h5 style={{fontWeight:500}}>{name}</h5>
                </div>
            </div>

            <div>
                <div onClick={() => deleteMedia(_id)} style={{ cursor: "pointer"}} className="d-flex align-items-center change-item">
                    <div style={{fontWeight:300}} className="m-2" >Удалить</div>
                    <span className="material-symbols-outlined ">close</span>
                </div>
                <Link  to={`/media/edit/${_id}`} style={{ cursor: "pointer",textDecoration:"none",color:"white"}}
                       className="d-flex align-items-center change-item">
                    <div style={{fontWeight:300}} className="m-2" >Редактировать</div>
                    <span className="material-symbols-outlined ">edit</span>
                </Link>
            </div>
        </div>
    );
};
