/** @format */

class Item {
	static rebootId = function () {
		console.log(this.id);
		return Math.floor(Math.random() * 1000);
	};

	constructor(text) {
		this.id = Item.rebootId();
		this.text = text;
		this.done = false;
	}
}

export default Item;
