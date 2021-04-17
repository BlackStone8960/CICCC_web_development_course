export default class Catalog {
  constructor(items = []) {
    this._items = items;
  }
  get items() {
    if(Array.isArray(this._items) && this._items.length) {
      return this._items;
    } else {
      console.log('There are no items in catalog.');
    }
  }
  add(items) {
    for (let item of items) {
      this._items.push(item);
    }
  }
  update(newItem) {
    const matchedIndex = this._items.findIndex((item) => item.title === newItem.title)
    this._items[matchedIndex] = newItem;
  }
}