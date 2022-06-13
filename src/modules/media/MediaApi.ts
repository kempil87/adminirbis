import {api} from "../../base/axios"
import {IMedia} from "./MediaTypes";

export default class MediaApi {
    getAllMedia = () => {
        return api.get("/media",);
    };

    getMedia = (id:string) => {
        return api.get(`/media/${id}`,);
    };

    deleteMedia = (id: string) => {
        return api.get(`/media/delete/${id}`,);
    };

    addMedia = (data: IMedia) => {
        return api.post(`/media/create`,data);
    };
    
    editMedia = (data: IMedia) => {
        return api.post(`/media/update`,data);
    };
}