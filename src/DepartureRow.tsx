import * as React from 'React';
import { observer } from 'mobx-react';
import { DepartureItem } from './TimetableStore';
import * as numeral from 'numeral';

@observer
export default class DepartureRow extends React.Component<{ departure: DepartureItem }>
{
    render() {
        const { departure } = this.props;

        const rowStyle = {
            width: '300px',
            border: '1px solid black'
        };

        const timeStyle = {
            margin: '1em'
        };

        const destinationStyle = {
            textTransform: 'capitalize'
        };

        const hours = numeral(departure.hours).format('00');
        const minutes = numeral(departure.minutes).format('00');

        return (
            <div style={rowStyle}>
                <span style={timeStyle}>{hours}:{minutes}</span><span style={destinationStyle}>{departure.to}</span>
            </div>
        );
    }
}