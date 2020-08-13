import MockDataFetcher from "../MockDataFetcher";

export default class BanDataService {
    getAll() {
        return MockDataFetcher.fetchBans();
    }
}