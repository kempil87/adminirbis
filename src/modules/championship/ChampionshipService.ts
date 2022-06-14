import ChampionshipApi from "./ChampionshipApi";
import {IChamp, IClubResponse} from "./ChampionshipTypes";

export default class ChampionshipService {
    clubApi: ChampionshipApi;

    constructor() {
        this.clubApi = new ChampionshipApi();
    }

    getAllChampionship = async (): Promise<IChamp[]> => {
        const { data } = await this.clubApi.getAllChampionship();
        return data.reverse();
    };

    deleteChampionship = async (id: string): Promise<IClubResponse> => {
        const { data } = await this.clubApi.deleteChampionship(id);
        return data;
    };

    addChampionship = async (clubData): Promise<IClubResponse> => {
        const { data } = await this.clubApi.addChampionship(clubData);
        return data;
    };
    editChampionship = async (clubData): Promise<IClubResponse> => {
        const { data } = await this.clubApi.editChampionship(clubData);
        return data;
    };

    getChampionship = async (id): Promise<IChamp> => {
        const { data } = await this.clubApi.getChampionship(id);
        return data;
    };

}