import { observable, action, computed } from 'mobx';

export class TimetableStore {
    @observable departures: DepartureItem[] = [];
}

export class DepartureItem {
    hours: number;
    minutes: number;
    to: string;
}
