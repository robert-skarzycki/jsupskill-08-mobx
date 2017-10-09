import * as React from 'React';
import {Item} from './TodoListStore';
import {observer} from 'mobx-react';

@observer
export default class TodoItem extends React.Component<{ todoItem: Item }>
{
    render() {
        const {todoItem} = this.props;

        return (
            <li>
                <input type="checkbox" checked={todoItem.isChecked} onChange={this.toggleCheckbox}/>{todoItem.title}
            </li>
            );
    }

    private toggleCheckbox = () => {
        this.props.todoItem.isChecked = !this.props.todoItem.isChecked;
    }
}