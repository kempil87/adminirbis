import {makeAutoObservable, runInAction} from "mobx";
import ChampionshipService from "./ChampionshipService";
import {IChamp} from "./ChampionshipTypes";

export class ChampionshipStore {
    loader: boolean = false;
    loaderNotification: boolean = false;

    allChamp: IChamp[] = [];
    champItem: IChamp | null = null;

    private championshipService: ChampionshipService;

    constructor() {
        makeAutoObservable(this);
        this.championshipService = new ChampionshipService();
    }

    getAllChampionship = async () => {
        this.setLoading(true)

        try {
            const res = await this.championshipService.getAllChampionship();
            runInAction(() => {
                this.allChamp = res;
            });
        } catch (e) {
            console.log("Error", e);
        } finally {
            this.setLoading(false);
        }
    };

    deleteChampionship = async (id: string) => {
        const res = window.confirm("Вы действительно хотите удалить ?")
        if (!res) {
            return
        }

        try {
            const res = await this.championshipService.deleteChampionship(id);

            if (res) {
                this.setLoadingNotification(true)
                runInAction(() => {
                    this.allChamp = this.allChamp.filter((n) => n._id !== id);
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

    addChampionship = async (data: IChamp) => {
        try {
            const res = await this.championshipService.addChampionship(data);

            if (res) {
                this.setLoadingNotification(true)
                this.getAllChampionship()
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

    editChampionship = async (data: IChamp) => {
        try {
            const res = await this.championshipService.editChampionship(data);

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

    getChampionship = async (id: string) => {
        this.setLoading(true)

        try {
            const res = await this.championshipService.getChampionship(id);
            runInAction(() => {
                this.champItem = res;
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
}