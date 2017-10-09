import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import SayHelloStore from './store';
import SayHello from './sayHello';

const store =  new SayHelloStore();
ReactDOM.render(<div><SayHello store={store} /><DevTools/></div>, document.getElementById('root'));
