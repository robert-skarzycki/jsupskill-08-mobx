import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import Timetable from './Timetable';
import { TimetableStore } from './TimetableStore';

const apiBaseUrl = 'https://jsupskill-08-api.herokuapp.com/';

const store =  new TimetableStore(apiBaseUrl);
ReactDOM.render(<div><Timetable store={store} /><DevTools/></div>, document.getElementById('root'));
