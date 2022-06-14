import {api} from "../../base/axios"
import {INews} from "./NewsTypes";

export default class NewsApi {
    getAllNews = () => {
        return api.get("/news",);
    };

    getNews = (id:string) => {
        return api.get(`/news/${id}`,);
    };

    deleteNews = (id: string) => {
        return api.get(`/news/delete/${id}`,);
    };

    addNews = (data: INews) => {
        return api.post(`/news/create`,data);
    };

    editNews = (data: INews) => {
        return api.post(`/news/update`,data);
    };
}