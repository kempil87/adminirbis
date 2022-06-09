import React, {useState} from 'react';
import "./Auth.css"
import { api} from "../../base/axios";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Auth = () => {

    const dispatch = useDispatch()
    const [warningMail,setWarningMail] = useState(false)
    const [mail,setMail] = useState("")
    const [warningPassword,setWarningPassword] = useState(false)
    const [password,setPassword] = useState("")

    const authUser = () => {

        if (mail.length < 4 ){
            setWarningMail(true)
        } else if ( password.length <6 ){
            setWarningPassword(true)
        } else {
            api.post("auth/login", {email: mail,password}).then((res) =>{
                dispatch({
                    type: "ADD_TOKEN",
                    payload: res.data.token
                })
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('email',res.data.email);
            })
        }
    }

    return (
        <div className="auth ">
            <div className="auth-wrap d-flex align-items-center justify-content-center flex-column " >
                <h4 className="auth-title">Вход</h4>
                <label className="mt-4 ">
                    {warningMail ? (
                        <>
                            <input  className="auth-input-war " autoComplete={false}  placeholder="Почта" type="email" name="mail"  value={mail} onChange={e => setMail(e.target.value)} />
                            <h6  className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Mail должен быть больше 4 символов
                            </h6>
                        </>
                    ):(
                        <input  className="auth-input "  placeholder="Почта" type="email" name="mail"  value={mail} onChange={e => setMail(e.target.value)} />
                    )}
                </label>
                <label className="mt-3 ">
                    {warningPassword ?(
                        <>
                            <input className="auth-input-war " placeholder="Пароль"  type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <h6  className='warning-auth d-flex align-items-center'>
                                <span className="material-symbols-outlined">warning</span>
                                * Пароль должен быть больше 6 символов
                            </h6>
                        </>
                    ):(
                        <input className="auth-input" placeholder="Пароль"  type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    )}
                </label>
                <div className="mt-4 auth-btn" onClick={authUser}>Войти</div>
                <Link className='reg-link' to='/registration'>Зарегестрироваться</Link>
            </div>
        </div>
    );
};

export default Auth;