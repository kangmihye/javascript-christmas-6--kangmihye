import { DRINK } from "../utils/Constants.js";

class MenuList {
	#menuList;

	constructor(menuList) {
		this.#menuList = menuList;
	}

	countMenu(menuObj) {
		let cnt = 0;
		for (let menu in menuObj) {
			if (this.menuList.has(menuObj[menu])) cnt += Number(this.menuList.get(menuObj[menu]));
		}
		return cnt;
	}
	// generateMainDishList() {
	// const main = ["티본스테이크", "바비큐립", "해산물파스타", "크리스마스파스타"];
	// return [...this.menuList.keys()].filter((menu) => main.includes(menu)); // 갯수만 출력해도...?
	// }

	isOnlyDrink() {
		for (let menu in DRINK) {
			if (![...this.menuList.keys()].includes(DRINK[menu])) return false;
		}
		return true;
		// const drinks = ["제로콜라", "레드와인", "샴페인"];
		// return [...this.menuList.keys()].every((menu) => drinks.includes(menu));
	}
}
