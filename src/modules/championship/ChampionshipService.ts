import ChampionshipApi from "./ChampionshipApi";
import {IChamp, IClubResponse, ITeam} from "./ChampionshipTypes";

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

    createTeam = async (teamData): Promise<any> => {
        const { data } = await this.clubApi.createTeam(teamData);
        return data;
    };
    getTables = async (): Promise<ITeam[]> => {
        const { data } = await this.clubApi.getTables();
        return data;
    };

    editTableItem = async (tableData): Promise<any> => {
        const { data } = await this.clubApi.editTableItem(tableData);
        return data;
    };

    deleteTableItem = async (id: string): Promise<IClubResponse> => {
        const { data } = await this.clubApi.deleteTableItem(id);
        return data;
    };



}