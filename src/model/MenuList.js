import { PRICE } from "../utils/Constants.js";

class MenuList {
	#menuList;

	constructor(menuList) {
		this.#menuList = new Map(menuList);
	}
}

export default MenuList;
