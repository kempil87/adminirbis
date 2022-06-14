import {api} from "../../base/axios"
import {IClub} from "./ClubTypes";

export default class ClubApi {
    getAllClub = () => {
        return api.get("/club",);
    };

    deleteClub = (id: string) => {
        return api.get(`/club/delete/${id}`);
    };

    addClub = (data:IClub) => {
        return api.post(`/club/create`,data);
    };

    editClub = (data:IClub) => {
        return api.post(`/club/update`,data);
    };

    getClub = (id:string) => {
        return api.get(`/club/${id}`);
    };


}