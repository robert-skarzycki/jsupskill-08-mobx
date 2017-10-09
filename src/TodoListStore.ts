import {observable, action} from 'mobx';

export class TodoListStore {
    @observable items: Item[] = [];

    @action
    public addItem() {
        const id = this.items.length+1;

        const item = new Item();
        item.isChecked = false;
        item.id = id;
        item.title = 'Title #'+ id
        
        this.items.push(item);
    }
}

export class Item {
    id: number;
    title: string;
    @observable isChecked: boolean;
}