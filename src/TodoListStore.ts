import { observable, action, computed } from 'mobx';

export class TodoListStore {
    @observable items: Item[] = [];

    @action
    public addItem() {
        const id = this.items.length + 1;

        const item = new Item();
        item.isChecked = false;
        item.id = id;
        item.title = 'Title #' + id

        this.items.push(item);
    }

    @computed
    public get todoTasksCount() {
        return this.items.filter(i => !i.isChecked).length;
    }

    @computed
    public get doneTasksCount() {
        return this.items.filter(i => i.isChecked).length;
    }
}

export class Item {
    id: number;
    title: string;
    @observable isChecked: boolean;
}