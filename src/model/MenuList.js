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

	//예외처리로빼자
	isOnlyDrink() {
		for (let menu in DRINK) {
			if (![...this.#menuList.keys()].includes(DRINK[menu])) return false;
		}
		return true;
	}
}

export default MenuList;
