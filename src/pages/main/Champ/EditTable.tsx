import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {observer} from "mobx-react";
import {useRootStore} from "../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import Notification from "../../../components/ui/Notification/Notification";

const EditTable = observer(() => {
    const {championshipStore} = useRootStore()
    const {register, handleSubmit, setValue} = useForm();

    const [activeTeamId, setActiveTeamId] = useState<string | null>(null)

    const setFormValues = () => {
        if(activeTeamId){
            const currentTeam = {...championshipStore.table.find((i) => i._id === activeTeamId)}
            if(currentTeam){
                Object.keys(currentTeam).forEach((key) => {
                    // @ts-ignore
                    setValue(String(key), currentTeam[key])
                })
            }
        }
    }

    const sendEditTable = (data) => {
        const dataWithId = {...data,_id:activeTeamId}
        championshipStore.editTableItem(dataWithId)
    }

    const deleteTable = (id: string) =>{
        championshipStore.deleteTableItem(id)
    }

    useEffect(() => {
        championshipStore.getTables()
    }, [])

    useEffect(() => {
        setFormValues()
    }, [activeTeamId])


    return (
        <div>
            <Table style={{zIndex: 100}} striped bordered hover variant="dark">
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
                </tr>
                </thead>
                <tbody>
                {championshipStore.table
                    .slice()
                    .sort((a,b) => b.score - a.score)
                    .map((item, idx) => (
                    <tr key={item._id}>
                        <td>{idx + 1}
                            <span onClick={() => setActiveTeamId(item._id)}
                                  className="material-symbols-outlined ">edit</span>
                        </td>
                        <td className="d-flex align-items-center">
                            <img className="logo-table " width='60' alt='logo'
                                 src={item.logoTeam}
                            />
                            {item._id !== activeTeamId ? (
                                <div style={{fontSize: 14}} className="d-none d-lg-block">{item.nameTeam}</div>
                            ) : (
                                <input style={{width: 40}} {...register("nameTeam")}/>
                            )}

                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.games}</div>
                            ) : (
                                <input style={{width: 40}} {...register("games")}/>
                            )}
                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.wins}</div>
                            ) : (
                                <input style={{width: 40}} {...register("wins")}/>
                            )}
                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.winsOverTime}</div>
                            ) : (
                                <input
                                    style={{width: 40}} {...register("winsOverTime")}/>
                            )}
                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.loss}</div>
                            ) : (
                                <input style={{width: 40}} {...register("loss")}/>
                            )}
                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.loseOverTime}</div>
                            ) : (
                                <input
                                    style={{width: 40}} {...register("loseOverTime")}/>
                            )}
                        </td>

                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.goalBall}</div>
                            ) : (
                                <input
                                    style={{width: 40}} {...register("goalBall")}/>
                            )}
                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.missBall}</div>
                            ) : (
                                <input
                                    style={{width: 40}} {...register("missBall")}/>
                            )}
                        </td>
                        <td>
                            {item._id !== activeTeamId ? (
                                <div>{item.score}</div>
                            ) : (
                                <input style={{width: 40}} {...register("score")}/>
                            )}
                        </td>
                        <td>
                            {item._id === activeTeamId && (
                                <>
                                    <Button variant="light col-4" onClick={handleSubmit(sendEditTable)}>Сохранить</Button>
                                    <Button variant="light col-4" onClick={() => deleteTable(item._id)}>Delete</Button>
                                </>

                            )}
                        </td>

                    </tr>

                ))}
                </tbody>
            </Table>
            {championshipStore.loaderNotification && (
                <Notification text='Комаанда была успешно отредактирована' icon='check_circle'/>
            )}
        </div>
    );
});

export default EditTable;