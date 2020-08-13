
// This class would in a real-world scenario fetch data from an api/db.
export default class MockDataFetcher
{
    static fetchCurrentWeather() {
        return {
            windSpeed: 4,
            windGust: 7,
            windDirection: 'NV',

            waterTempSurface: 20,
            waterTemp1Meter: 14,

            airTemp: 25,
            weather: 'cloud-sun',
        };
    }

    static fetchTodayWeather() {
        return [
            {time: '2020-08-09T15:00+02:00', windSpeed: 4, windGust: 7,  windDirection: 'NV', airTemp: 25, weather: 'cloud-sun'},
            {time: '2020-08-09T16:00+02:00', windSpeed: 4, windGust: 7,  windDirection: 'NV', airTemp: 25, weather: 'cloud-sun'},
            {time: '2020-08-09T17:00+02:00', windSpeed: 4, windGust: 8,  windDirection: 'NV', airTemp: 24, weather: 'cloud-sun'},
            {time: '2020-08-09T18:00+02:00', windSpeed: 5, windGust: 8,  windDirection: 'NV', airTemp: 23, weather: 'cloud-sun'},
            {time: '2020-08-09T19:00+02:00', windSpeed: 5, windGust: 9,  windDirection: 'NV', airTemp: 22, weather: 'cloud-sun'},
            {time: '2020-08-09T20:00+02:00', windSpeed: 6, windGust: 9,  windDirection: 'N',  airTemp: 22, weather: 'cloud-sun'},
            {time: '2020-08-09T21:00+02:00', windSpeed: 7, windGust: 11, windDirection: 'N',  airTemp: 21, weather: 'cloud-sun'},
            {time: '2020-08-09T22:00+02:00', windSpeed: 7, windGust: 11, windDirection: 'N',  airTemp: 20, weather: 'cloud-sun'},
            {time: '2020-08-09T23:00+02:00', windSpeed: 6, windGust: 10, windDirection: 'N',  airTemp: 19, weather: 'cloud-sun'},
        ];
    }

    static fetchWeekWeather() {
        return [
            {date: '2020-08-10', windSpeed: 4, windGust: 7,  windDirection: 'NV', airTemp: 25, weather: 'cloud-sun'},
            {date: '2020-08-11', windSpeed: 4, windGust: 7,  windDirection: 'NV', airTemp: 25, weather: 'cloud-sun'},
            {date: '2020-08-12', windSpeed: 4, windGust: 8,  windDirection: 'NV', airTemp: 24, weather: 'cloud-sun'},
            {date: '2020-08-13', windSpeed: 5, windGust: 8,  windDirection: 'NV', airTemp: 23, weather: 'cloud-sun'},
            {date: '2020-08-14', windSpeed: 5, windGust: 9,  windDirection: 'NV', airTemp: 22, weather: 'cloud-sun'},
            {date: '2020-08-15', windSpeed: 6, windGust: 9,  windDirection: 'N',  airTemp: 22, weather: 'cloud-sun'},
            {date: '2020-08-16', windSpeed: 7, windGust: 11, windDirection: 'N',  airTemp: 21, weather: 'cloud-sun'},
        ];
    }

    static fetchBans() {
        return [
            { startDate: '2020-08-08', endDate: '2020-08-12', type: 'military', area: 'Karlskrona Inre Öar'},
            { startDate: '2020-09-14', endDate: '2020-09-22', type: 'military', area: 'Äspeskär'},
            { startDate: '2020-05-01', endDate: '2020-08-31', type: 'birdprotection', area: 'Äggaskär'},
        ];
    }

    static fetchActivities() {
        return [
            { datetime: '2020-08-10T17:30+02:00', organizer: 'KK Eskimå', title: 'Träning (även SUP)' },
            { datetime: '2020-08-12T18:00+02:00', organizer: 'KK Eskimå', title: 'Onsdagspaddling' },
            { datetime: '2020-08-13T19:00+02:00', organizer: 'Karlskrona Kajak', title: 'Nybörjarkurs' },
            { datetime: '2020-08-14T14:00+02:00', organizer: 'Cecilia Velin', title: 'Fortsättningskurs' },
            { datetime: '2020-08-16T10:00+02:00', organizer: 'KK Eskimå', title: 'Träning' },
            { datetime: '2020-08-17T17:30+02:00', organizer: 'KK Eskimå', title: 'Träning (även SUP)' },
            { datetime: '2020-08-18T18:00+02:00', organizer: 'KK Eskimå', title: 'Räddning & Rollövning' },
            { datetime: '2020-08-19T18:00+02:00', organizer: 'KK Eskimå', title: 'Onsdagspaddling' },
            { datetime: '2020-08-23T10:00+02:00', organizer: 'KK Eskimå', title: 'Träning' },
        ];
    }
}