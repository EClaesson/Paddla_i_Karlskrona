import {observable} from "mobx";
import WeatherDataStore from "./WeatherDataStore";
import BanDataStore from "./BanDataStore";
import ActivityDataStore from "./ActivityDataStore";

export default class RootStore
{
    @observable weatherData = new WeatherDataStore();
    @observable banData = new BanDataStore();
    @observable activityData = new ActivityDataStore();
}