import * as React from 'React';
import { observer } from 'mobx-react';
import { TimetableStore } from './TimetableStore';

@observer
export default class Timetable extends React.Component<{ store: TimetableStore }>
{
    render() {
        const { store } = this.props;

        const items = store.departures.map(d => <div>{d.hours}:{d.minutes} d.to</div>);

        return (
            <div>
                <h3>Odjazdy z dworca Wrocław Główny</h3>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}