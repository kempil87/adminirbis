import React from 'react';
import "./notification.css"

const Notification = ({icon,text,color ='green'}) => {


    return (
        <>
                <div className="notification d-flex align-items-center" style={{backgroundColor:color}}>
                    <h6 className="notification-text m-2">{text}</h6>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
        </>

    );
};

export default Notification;