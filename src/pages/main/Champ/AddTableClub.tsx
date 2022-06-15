import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {observer} from "mobx-react";

const AddTableClub = observer(() => {

    const {register, handleSubmit} = useForm();
    const {championshipStore} = useRootStore();


    const createTeam = (data) => {
      championshipStore.createTeam(data)
    }

    return (
        <div>
            <h5>Добавить Клуб</h5>
            <div className="align-items-center d-flex back-link">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/championship" className="back">Назад</Link>
            </div>
            <div className="d-flex flex-column  align-items-center pt-5">
                <div className="col-6">
                    <label className="d-flex justify-content-between">
                        Клуб
                        <input
                            {...register("nameTeam")}
                            className='addnews-input'/>
                    </label>

                    <label className="d-flex justify-content-between">
                        Лого
                        <input
                            {...register("logoTeam")}
                            className='addnews-input'/>
                    </label>
                </div>
                <Button className='col-6 mt-4 ' variant="light" onClick={handleSubmit(createTeam)}>Создать</Button>
                {/*{championshipStore.loaderNotification && (*/}
                {/*    <Notification text='Игра была успешно добавлена' icon='check_circle'/>*/}
                {/*)}*/}

            </div>
        </div>
    );
});

export default AddTableClub;