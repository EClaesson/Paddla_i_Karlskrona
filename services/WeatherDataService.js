import MockDataFetcher from "../MockDataFetcher";

export default class WeatherDataService {
    getCurrent() {
        return MockDataFetcher.fetchCurrentWeather();
    }

    getToday() {
        return MockDataFetcher.fetchTodayWeather();
    }

    getWeek() {
        return MockDataFetcher.fetchWeekWeather();
    }
}