import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getTotalPrice(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        return this.getTotalPrice() * (1 - discount / 100);
    }

    deleteById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
