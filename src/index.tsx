import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import Timetable from './Timetable';
import { TimetableStore } from './TimetableStore';

const store =  new TimetableStore();
ReactDOM.render(<div><Timetable store={store} /><DevTools/></div>, document.getElementById('root'));
