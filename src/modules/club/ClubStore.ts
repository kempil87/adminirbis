import {makeAutoObservable, runInAction} from "mobx";
import ClubService from "./ClubService";
import {IClub} from "./ClubTypes";

export class ClubStore {
    loader: boolean = false;
    loaderNotification: boolean = false;
    searchClub: string = '';

    allClub: IClub[] = [];
    clubItem: IClub | null = null;

    private clubService: ClubService;

    constructor() {
        makeAutoObservable(this);
        this.clubService = new ClubService();
    }

    getAllClub = async () => {
        this.setLoading(true)

        try {
            const res = await this.clubService.getAllClub();
            runInAction(() => {
                this.allClub = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    deleteClub = async (id: string) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        try {
            const res = await this.clubService.deleteClub(id);

            if (res) {
                this.setLoadingNotification(true)
                runInAction(() => {
                    this.allClub = this.allClub.filter((n) => n._id !== id);
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

    addClub = async (data: IClub) => {
        try {
            const res = await this.clubService.addClub(data);

            if (res) {
                this.setLoadingNotification(true)
                this.getAllClub()
            }
        } catch (e) {
            console.log("Error", e);
        } finally {
            setTimeout(() => {
                window.location.reload();
                this.setLoadingNotification(false);
            }, 1800)
        }
    }

    editClub = async (data: IClub) => {
        try {
            const res = await this.clubService.editClub(data);

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

    getClub = async (id: string) => {
        this.setLoading(true)

        try {
            const res = await this.clubService.getClub(id);
            runInAction(() => {
                this.clubItem = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

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

    filterClub = (value:string) => {
        runInAction(() => {
            this.searchClub = value;
        });
    };
}