import {api} from "../../base/axios"
import {IChamp, ITeam} from "./ChampionshipTypes";

export default class ChampionshipApi {
    getAllChampionship = () => {
        return api.get("/championship",);
    };

    deleteChampionship = (id: string) => {
        return api.get(`/championship/delete/${id}`);
    };

    addChampionship = (data:IChamp) => {
        return api.post(`/championship/create`,data);
    };

    editChampionship = (data:IChamp) => {
        return api.post(`/championship/update`,data);
    };

    getChampionship = (id:string) => {
        return api.get(`/championship/${id}`);
    };

    createTeam = (data:ITeam) => {
        return api.post(`/table/create`,data);
    };

    getTables = () => {
        return api.get(`/table`);
    };

    editTableItem = (data:ITeam) => {
        return api.post(`/table/update`,data);
    };

    deleteTableItem = (id: string) => {
        return api.get(`/table/delete/${id}`);
    };
}