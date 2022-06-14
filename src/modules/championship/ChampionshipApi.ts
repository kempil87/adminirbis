import {api} from "../../base/axios"
import {IChamp} from "./ChampionshipTypes";

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


}