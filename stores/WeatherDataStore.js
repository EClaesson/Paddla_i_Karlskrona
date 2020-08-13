import {action, observable} from "mobx";
import WeatherDataService from "../services/WeatherDataService";

export default class WeatherDataStore {
    @observable current = {
        windSpeed: 0,
        windGust: 0,
        windDirection: 'N',

        waterTempSurface: 0,
        waterTemp1Meter: 0,

        airTemp: 0,
        weather: 'cloud-sun',
    };

    @observable today = [];
    @observable week = [];

    constructor() {
        this.weatherDataService = new WeatherDataService();
    }

    @action
    async getCurrent() {
        this.current = this.weatherDataService.getCurrent();
    }

    @action
    async getToday() {
        this.today = this.weatherDataService.getToday();
    }

    @action
    async getWeek() {
        this.week = this.weatherDataService.getWeek();
    }
}