import React from 'react';
import "./Notification.css"

interface INotification {
    icon: string
    text: string
    color?: string
}

const Notification = ({icon, text, color = 'green'}: INotification) => {

    return (
        <>
            <div className="notification d-flex align-items-center" style={{backgroundColor: color}}>
                <h6 className="notification-text m-2">{text}</h6>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
        </>

    );
};

export default Notification;