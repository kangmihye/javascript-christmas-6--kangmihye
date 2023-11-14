import { DRINK, PRICE } from "../utils/Constants.js";

class MenuList {
	#menuList;

	constructor(menuList) {
		this.#menuList = menuList;
	}

	getMeneList() {
		return this.#menuList;
	}

	sumTotalPrice() {
		let total = 0;
		this.#menuList.forEach((cnt, menu) => {
			total += PRICE[menu] * cnt;
		});
		return total;
	}

	countMenu(menuObj) {
		let cnt = 0;
		for (let menu in menuObj) {
			if (this.#menuList.has(menuObj[menu])) cnt += this.#menuList.get(menuObj[menu]);
		}
		return cnt;
	}
}

export default MenuList;
