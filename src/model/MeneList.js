import { DESSERT, MAIN, DRINK } from "../utils/Constants";

class MenuList {
	#menuList;

	constructor(menuList) {
		this.#menuList = menuList;
	}

	generateDessertList() {
		let cnt = 0;
		for (let menu in DESSERT) {
			if (this.menuList.has(DESSERT[menu])) cnt += Number(this.menuList.get(DESSERT[menu]));
			return cnt;
		}
	}

	generateMainDishList() {
		const main = ["티본스테이크", "바비큐립", "해산물파스타", "크리스마스파스타"];
		return [...this.menuList.keys()].filter((menu) => main.includes(menu)); // 갯수만 출력해도...?
	}

	isOnlyDrink() {
		const drinks = ["제로콜라", "레드와인", "샴페인"];
		return [...this.menuList.keys()].every((menu) => drinks.includes(menu));
	}
}
