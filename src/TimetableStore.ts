import axios from 'axios';
import { observable, action, computed } from 'mobx';
import { computedAsync } from 'computed-async-mobx';

export class TimetableStore {
    private apiBaseUrl: string;
    @observable isLoading: boolean = false;
    @observable destination: string = '';
    @observable afterHours: number = 0;
    @observable afterMinutes: number = 0;
    @observable beforeHours: number = 23;
    @observable beforeMinutes: number = 59;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
    }

    @computed
    public get departures(): DepartureItem[] {        
        return this.departuresInternal.value;
    }

    private departuresInternal = computedAsync<DepartureItem[]>([], this.fetchDepartures.bind(this));

    private async fetchDepartures () {
        const params = [];

        //params.push('sleep', 3000);        
        params.push('fromHours=' + (this.afterHours));
        params.push('fromMinutes=' + (this.afterMinutes));
        params.push('toHours=' + (this.beforeHours));
        params.push('toMinutes=' + (this.beforeMinutes));
        params.push('destination='+(this.destination || ''));

        let url = this.apiBaseUrl + 'trains';
        if (params.length > 0) {
            url += '?' + params.join('&');
        }

      
        const response = await axios.get(url);        
        const departures = response.data.departures;
      
        
        return departures;
      
    }
    

    @action
    setDestination(destination: string) {
        this.destination = destination;
    }

    @action
    setAfterHours(afterHours: number) {
        this.afterHours = afterHours;
    }

    @action
    setAfterMinutes(afterMinutes: number) {
        this.afterMinutes = afterMinutes;
    }

    @action
    setBeforeHours(beforeHours: number) {
        this.beforeHours = beforeHours;
    }

    @action
    setBeforeMinutes(beforeMinutes: number) {
        this.beforeMinutes = beforeMinutes;
    }
}

export class DepartureItem {
    hours: number;
    minutes: number;
    to: string;
}
