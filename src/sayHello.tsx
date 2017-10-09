import * as React from 'react';
import {observer} from 'mobx-react';
import SayHelloStore from './store';

@observer
export default class SayHello extends React.Component<{store: SayHelloStore}> {
    constructor(){
        super();
    }

    render() {
        const {store} = this.props;
        return (
            <div>
                <h1>Witaj, {store.yourName}</h1>
                <input type="text" onChange={this.onNameChanged}/>
            </div>
        );
     }

     private onNameChanged = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.props.store.yourName = e.currentTarget.value;
     }
};