import {makeAutoObservable, runInAction} from "mobx";
import MediaService from "./MediaService";
import {IMedia} from "./MediaTypes";

export class MediaStore {
    loader: boolean = false;
    loaderNotification: boolean = false;

    media: IMedia[] = [];
    mediaItem: IMedia | null = null;

    private mediaService: MediaService;

    constructor() {
        makeAutoObservable(this);
        this.mediaService = new MediaService();
    }

    getAllMedia = async () => {
        this.setLoading(true)

        try {
            const res = await this.mediaService.getAllMedia();
            runInAction(() => {
                this.media = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    getMedia = async (id:string) => {
        this.setLoading(true)

        try {
            const res = await this.mediaService.getMedia(id);
            runInAction(() => {
                this.mediaItem = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };


    deleteMedia = async (id: string) =>{
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        try {
            const res = await this.mediaService.deleteMedia(id);

            if (res) {
                this.setLoadingNotification(true)
                runInAction(() => {
                    this.media = this.media.filter((n) => n._id !== id);
                });
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                this.setLoadingNotification(false);
            }, 1800)
        }
    }

    addMedia = async (data: IMedia) => {

        try {
            const res = await this.mediaService.addMedia(data);

            if (res){
                this.getAllMedia()
                this.setLoadingNotification(true)
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                this.setLoadingNotification(false);
                window.location.reload();
            }, 1800)
        }
    };

    editMedia = async (data: IMedia) => {
        try {
            const res = await this.mediaService.editMedia(data);

            if (res) {
                this.setLoadingNotification(true)
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                this.setLoadingNotification(false);
            }, 1800)
        }
    }

    setLoading = (value: boolean) => {
        runInAction(() => {
            this.loader = value;
        });
    };

    setLoadingNotification = (value: boolean) => {
        runInAction(() => {
            this.loaderNotification = value;
        });
    };
}