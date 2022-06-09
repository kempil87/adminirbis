import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { api} from "../../base/axios";
import Notification from "../../components/ui/notification";

export const Registration = () => {

    const [mail,setMail] = useState("")
    const [password,setPassword] = useState("")
    const [warningMail,setWarningMail] = useState(false)
    const [warningPassword,setWarningPassword] = useState(false)
    const [showNote,setShowNote] = useState(false)

    const registerUser = () => {

        if (mail.length < 4 ){
            setWarningMail(true)
        } else if ( password.length <6 ){
            setWarningPassword(true)
        } else {
                api.post("auth/register", {email: mail,password}).then((res) =>{
                    setShowNote(true)
                    setTimeout(()=>{
                        setShowNote(false)
                    },4000)
                })

        }
    }

    return (
        <div className="auth">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column" >
                <h4 className="auth-title">Регистрация</h4>
                <label className="mt-4">
                    {warningMail ? (
                        <>
                            <input   className="auth-input-war "  placeholder="Почта" type="email" name="mail"  value={mail} onChange={e => setMail(e.target.value)} />
                            <h6  className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Mail должен быть больше 4 символов
                            </h6>
                        </>


                    ):(
                        <input  className="auth-input "  placeholder="Почта" type="email" name="mail"  value={mail} onChange={e => setMail(e.target.value)} />
                    )}</label>
                <label className="mt-3">
                    {warningPassword ?(
                        <>
                            <input  className="auth-input-war " placeholder="Пароль"  type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <h6  className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Пароль должен быть больше 6 символов
                            </h6>
                        </>
                    ):(
                        <input className="auth-input" placeholder="Пароль"  type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    )}</label>
                <Link  className="mt-2 auth-link" to={"/"}>У меня уже есть аккаунт</Link>
                <div className="mt-2 auth-btn" onClick={registerUser}>Зарегестрироваться</div>
                {showNote && (
                    <Notification text='Вы успешно авторизовались' icon='check_circle'/>
                )}
            </div>
        </div>
    );
}