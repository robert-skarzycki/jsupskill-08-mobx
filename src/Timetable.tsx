import * as React from 'React';
import { observer } from 'mobx-react';
import { TimetableStore } from './TimetableStore';
import DepartureRow from './DepartureRow';
import Spinner from './Spinner';
import * as cn from 'class-names';

@observer
export default class Timetable extends React.Component<{ store: TimetableStore }>
{
    componentDidMount(){
        this.props.store.fetch();
    }

    render() {
        const { store } = this.props;

        const items = store.departures.map(d => <DepartureRow departure={d} key={d.hours.toString()+d.minutes.toString()}/>);

        return (
            <div>
                <h3>Odjazdy z dworca Wrocław Główny</h3>
                <div className={cn({'invisible': !store.isLoading})}>
                    <Spinner/>
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}