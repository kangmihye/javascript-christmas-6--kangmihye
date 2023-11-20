import { PRICE, DESSERT, MAIN } from "../utils/Constants.js";

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

	countMenu(MenuObj) {
		let cnt = 0;
		for (let menu in MenuObj) {
			if (this.#menuList.has(MenuObj[menu])) cnt += this.#menuList.get(MenuObj[menu]);
		}
		return cnt;
	}
}

// console.log(
// 	new MenuList([
// 		["아이스크림", 3],
// 		["티본스테이크", 2],
// 		["초코케이크", 5],
// 		["크리스마스파스타", 2],
// 	]).countMenu(MAIN)
// );
export default MenuList;
