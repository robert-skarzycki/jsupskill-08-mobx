import axios from 'axios';
import { observable, action, computed } from 'mobx';

export class TimetableStore {
    private apiBaseUrl: string;
    @observable departures: DepartureItem[] = [];
    @observable isLoading: boolean = false;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
    }

    fetch(){
        this.isLoading = true;
        const url = this.apiBaseUrl + 'trains';
        axios.get(url)
        .then(response => {
            this.departures= response.data.departures;
            this.isLoading = false;
        });
    }  

}

export class DepartureItem {
    hours: number;
    minutes: number;
    to: string;
}
