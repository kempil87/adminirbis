import React from 'react';
import {Link} from "react-router-dom";
import '../../../pages/News/NewsPage/NewsPage.css'

const NewsCard = ({image, title,deleteNewsItem,_id,date}) => {

    return (
        <div className="d-flex justify-content-between mt-3">

            <div  className="news_card d-flex">
                <div className="img-block">
                    <div className="img-wrap">
                        <img className="" width="200" height="140" src={image}/>
                    </div>
                </div>
                <div style={{marginLeft:8}} className="">
                    {title}
                    <h6 className="mt-2">
                        {date}
                    </h6>
                </div>

            </div>

            <div>
                <div onClick={() => deleteNewsItem(_id)} style={{ cursor: "pointer"}} className="d-flex align-items-center change-item">
                    <div style={{fontWeight:300}} className="m-2 " >Удалить</div>
                    <span className="material-symbols-outlined ">close</span>
                </div>
                <Link  to={`/editnews/${_id}`} style={{ cursor: "pointer",textDecoration:"none",color:"white"}} className="d-flex align-items-center change-item">
                    <div style={{fontWeight:300}} className="m-2 " >Редактировать</div>
                    <span className="material-symbols-outlined ">edit</span>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;