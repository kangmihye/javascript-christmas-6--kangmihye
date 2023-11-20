import { PRICE } from "../utils/Constants.js";

class MenuList {
	#menuList;

	constructor(menuList) {
		this.#menuList = new Map(menuList);
	}

	sumTotalPrice() {
		let totalPrice = 0;
		this.#menuList.forEach((_, menu) => {
			totalPrice += PRICE[menu];
		});
		return totalPrice;
	}
}

console.log(
	new MenuList([
		["아이스크림", 1],
		["레드와인", 1],
	]).sumTotalPrice()
);
export default MenuList;
