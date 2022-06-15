import ClubApi from "./ClubApi";
import {IClub, IClubResponse} from "./ClubTypes";

export default class ClubService {
    clubApi: ClubApi;

    constructor() {
        this.clubApi = new ClubApi();
    }

    getAllClub = async (): Promise<IClub[]> => {
        const { data } = await this.clubApi.getAllClub();
        return data.reverse();
    };

    deleteClub = async (id: string): Promise<IClubResponse> => {
        const { data } = await this.clubApi.deleteClub(id);
        return data;
    };

    addClub = async (clubData): Promise<IClubResponse> => {
        const { data } = await this.clubApi.addClub(clubData);
        return data;
    };
    editClub = async (clubData): Promise<IClubResponse> => {
        const { data } = await this.clubApi.editClub(clubData);
        console.log(2222, data)
        return data;
    };

    getClub = async (id): Promise<IClub> => {
        const { data } = await this.clubApi.getClub(id);
        return data;
    };

}