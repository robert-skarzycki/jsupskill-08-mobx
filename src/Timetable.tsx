import * as React from 'React';
import { observer } from 'mobx-react';
import { TimetableStore } from './TimetableStore';
import DepartureRow from './DepartureRow';
import Spinner from './Spinner';
import * as cn from 'class-names';

@observer
export default class Timetable extends React.Component<{ store: TimetableStore }>
{
    render() {
        const { store } = this.props;

        const items = store.departures.map(d => <DepartureRow departure={d} key={d.hours.toString() + d.minutes.toString()} />);

        return (
            <div>
                <h3>Odjazdy z dworca Wrocław Główny</h3>
                <div>
                    <p>Dokąd:
                        <input
                            type="text"
                            value={store.destination}
                            onChange={(e) => store.setDestination(e.currentTarget.value)}
                        /></p>
                    <p>Po:
                        <input
                            type="number"
                            value={store.afterHours}
                            onChange={(e) => store.setAfterHours(this.parse(e.currentTarget.value))}
                        />:<input
                            type="number"
                            value={store.afterMinutes}
                            onChange={(e) => store.setAfterMinutes(this.parse(e.currentTarget.value))}
                        /></p>
                    <p>Przed: <input
                        type="number"
                        value={store.beforeHours}
                        onChange={(e) => store.setBeforeHours(this.parse(e.currentTarget.value))}
                    />:<input
                            type="number"
                            value={store.beforeMinutes}
                            onChange={(e) => store.setBeforeMinutes(this.parse(e.currentTarget.value))}
                        /></p>
                </div>
                <div className={cn({ 'invisible': !store.isLoading })}>
                    <Spinner />
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }

    private parse(rawValue: string): number {
        if (!rawValue) {
            return 0;
        }

        var parsedValue = parseInt(rawValue);
        return parsedValue;
    }
}