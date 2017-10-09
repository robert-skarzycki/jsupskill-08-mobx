import * as React from 'React';
import { TodoListStore } from './TodoListStore';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component<{ store: TodoListStore }>
{
    render() {
        const { store } = this.props;

        const items = store.items.map(i => <TodoItem todoItem={i} key={i.id} />);

        return (
            <div>
                <h3>Do zrobienia</h3>
                <ul>
                    {items}
                </ul>
                <div>
                    <button onClick={this.addItem}>Dodaj</button>
                </div>
                <div>
                    <h4>Podsumowanie</h4>
                    <p>Liczba wszystkich zadań: {store.items.length}</p>
                    <p>Liczba zadań do zrobienia: {store.items.filter(i=>!i.isChecked).length}</p>
                    <p>Liczba zadań zrobionych: {store.items.filter(i=>i.isChecked).length}</p>
                    </div>
            </div>
        );
    }

    private addItem = () => {
        this.props.store.addItem();
    }
}