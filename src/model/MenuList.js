import { PRICE } from "../utils/Constants.js";

class MenuList {
	#menuList;

	constructor(menuList) {
		this.#menuList = new Map(menuList);
	}

	sumTotalPrice() {
		let totalPrice = 0;
		this.#menuList.forEach((cnt, menu) => {
			totalPrice += PRICE[menu] * cnt;
		});
		return totalPrice;
	}
}

export default MenuList;
