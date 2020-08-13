import {action, observable} from "mobx";
import ActivityDataService from "../services/ActivityDataService";

export default class ActivityDataStore {
    @observable activities = [];

    static dateEquals(a, b, reversed) {
        let equal =
                (a.getDate() === b.getDate() &&
                a.getMonth() === b.getMonth() &&
                a.getFullYear() === b.getFullYear());

        return reversed ? !equal : equal;
    }

    getDateFiltered(today=true) {
        let date = new Date();

        return this.activities.filter((activity) => ActivityDataStore.dateEquals(new Date(activity.datetime), date, !today));
    }

    constructor() {
        this.activityDataService = new ActivityDataService();
    }

    @action
    async getActivities() {
        this.activities = this.activityDataService.getAll();
    }

    getFilteredToday() {
        return this.getDateFiltered(true);
    }

    getFilteredFuture() {
        return this.getDateFiltered(false);
    }
}