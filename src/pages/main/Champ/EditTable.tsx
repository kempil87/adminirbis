import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import './EditTable.css'
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import Notification from "../../../components/ui/Notification/Notification";
import {Link} from "react-router-dom";

const EditTable = observer(() => {
    const {championshipStore} = useRootStore()
    const {register, handleSubmit, setValue} = useForm();

    const [activeTeamId, setActiveTeamId] = useState<string | null>(null)

    const setFormValues = () => {
        if (activeTeamId) {
            const currentTeam = {...championshipStore.table.find((i) => i._id === activeTeamId)}
            if (currentTeam) {
                Object.keys(currentTeam).forEach((key) => {
                    // @ts-ignore
                    setValue(String(key), currentTeam[key])
                })
            }
        }
    }

    const sendEditTable = (data) => {
        const dataWithId = {...data, _id: activeTeamId}
        championshipStore.editTableItem(dataWithId)
    }

    const deleteTable = (id: string) => {
        championshipStore.deleteTableItem(id)
    }

    useEffect(() => {
        championshipStore.getTables()
    }, [])

    useEffect(() => {
        setFormValues()
    }, [activeTeamId])


    return (
        <div className='pt-5 pb-5'>
            <div className="align-items-center d-flex back-link mb-2">
                <span className="material-symbols-outlined chevron_right">chevron_right</span>
                <Link to="/championship" className="back">Назад</Link>
            </div>
            <Table  striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>№</th>
                    <th className="d-none d-lg-block">Команда</th>
                    <th>И</th>
                    <th>В</th>
                    <th>ОТВ</th>
                    <th>П</th>
                    <th>ОТП</th>
                    <th>ЗМ</th>
                    <th>ПМ</th>
                    <th>О</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {championshipStore.table
                    .slice()
                    .sort((a, b) => b.score - a.score)
                    .map((item, idx) => (
                        <tr className='table-tr' key={item._id}>
                            <td>{idx + 1}
                                <span style={{marginLeft: 8, cursor: 'pointer'}}
                                      onClick={() => setActiveTeamId(item._id)}
                                      className="material-symbols-outlined edit-icon">edit</span>
                            </td>
                            <td className="d-flex align-items-center">
                                <img style={{objectFit: "contain"}} className="logo-table " height='55' alt='logo'
                                     src={item.logoTeam}
                                />
                                {item._id !== activeTeamId ? (
                                    <div style={{fontSize: 14, marginLeft: 12}}
                                         className="d-none d-lg-block">{item.nameTeam}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 100, marginLeft: 12}}
                                        {...register("nameTeam")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.games}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("games")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.wins}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("wins")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.winsOverTime}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("winsOverTime")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.loss}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("loss")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.loseOverTime}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("loseOverTime")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.goalBall}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("goalBall")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.missBall}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("missBall")}/>
                                )}
                            </td>
                            <td>
                                {item._id !== activeTeamId ? (
                                    <div>{item.score}</div>
                                ) : (
                                    <input
                                        className='edit-table-input'
                                        style={{width: 40}}
                                        {...register("score")}/>
                                )}
                            </td>
                            <td>
                                {item._id === activeTeamId && (
                                    <div className='d-flex justify-content-around'>
                                        <span
                                            className="material-symbols-outlined save-icon"
                                            onClick={handleSubmit(sendEditTable)}>
                                           check
                                        </span>
                                        <span
                                            onClick={() => deleteTable(item._id)}
                                            className="material-symbols-outlined del-icon">
                                            delete_forever
                                        </span>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {championshipStore.loaderNotification && (
                <Notification text='Команда была успешно отредактирована' icon='check_circle'/>
            )}
            {championshipStore.loaderNotificationDelete && (
                <Notification text='Команда была успешно удалена' icon='check_circle'/>
            )}
        </div>
    );
});

export default EditTable;