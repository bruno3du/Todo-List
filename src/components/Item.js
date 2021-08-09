/** @format */

class Item {
	static rebootId = function () {
		return Math.floor(Math.random() * 1000);
	};

	constructor(text) {
		this.id = Item.rebootId();
		this.text = text;
		this.done = false;
	}
}

export default Item;
