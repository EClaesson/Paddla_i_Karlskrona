import MockDataFetcher from "../MockDataFetcher";

export default class ActivityDataService {
    getAll() {
        return MockDataFetcher.fetchActivities();
    }
}