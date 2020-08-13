import {action, observable} from "mobx";
import BanDataService from "../services/BanDataService";

export default class BanDataStore {
    @observable bans = [];

    constructor() {
        this.banDataService = new BanDataService();
    }

    @action
    async getBans() {
        this.bans = this.banDataService.getAll();
    }

    getFilteredByType(type) {
        return this.bans.filter((ban) => ban.type === type);
    }
}