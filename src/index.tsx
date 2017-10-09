import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import {TodoListStore} from './TodoListStore';
import TodoList from './TodoList';

const store =  new TodoListStore();
ReactDOM.render(<div><TodoList store={store} /><DevTools/></div>, document.getElementById('root'));
