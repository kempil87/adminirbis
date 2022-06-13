import MediaApi from "./MediaApi";
import {IMedia, IMediaResponse} from "./MediaTypes";

export default class MediaService {
    mediaApi: MediaApi;

    constructor() {
        this.mediaApi = new MediaApi();
    }

    getAllMedia = async (): Promise<IMedia[]> => {
        const { data } = await this.mediaApi.getAllMedia();
        return data.reverse();
    };

    getMedia = async (id:string): Promise<IMedia> => {
        const { data } = await this.mediaApi.getMedia(id);
        return data;
    };

    deleteMedia = async (id: string): Promise<IMediaResponse> => {
        const { data } = await this.mediaApi.deleteMedia(id);
        return data;
    };

    addMedia = async (mediaData: any): Promise<IMediaResponse> => {
        const { data } = await this.mediaApi.addMedia(mediaData);
        return data;
    };

    editMedia = async (mediaData: any): Promise<IMediaResponse> => {
        const { data } = await this.mediaApi.editMedia(mediaData);
        return data;
    };
}