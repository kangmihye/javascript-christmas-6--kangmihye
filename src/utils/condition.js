import { APPETIZER, MAIN, DESSERT, DRINK } from "../utils/Constants.js";
export const isInvalidNumber = (input) => {
	input = Number(input.replaceAll(" ", ""));
	return !Number.isInteger(input) || Number.isNaN(input);
};

export const isInvalidRange = (input) => {
	input = Number(input.replaceAll(" ", ""));
	return input < 1 || input > 31;
};

export const hasComma = (inputMenu, splitedMenus) => {
	return inputMenu.match(/-/g).length !== splitedMenus.length;
};

export const hasHyphenNum = (splitedMenus) => {
	return !splitedMenus.every((splitedMenu) => ~splitedMenu.search(/-\d+/g));
};

export const hasRestaurantMenuList = (splitedMenuAndCnt) => {
	const restaurantMenuList = {};
	const menuListValue = [];
	Object.assign(restaurantMenuList, APPETIZER, MAIN, DESSERT, DRINK);

	for (let menu in restaurantMenuList) {
		menuListValue.push(restaurantMenuList[menu]);
	}

	return !splitedMenuAndCnt.every(([menu]) => menuListValue.includes(menu));
};

export const isInvalidMenuCount = (splitedMenuAndCnt) => {
	return splitedMenuAndCnt.some(([, cnt]) => {
		if (!Number(cnt)) return true;
		isInvalidNumber(cnt);
	});
};

export const isDuplicate = (splitedMenuAndCnt) => {
	const set = new Set();
	splitedMenuAndCnt.forEach(([menu]) => {
		set.add(menu);
	});
	return set.size !== splitedMenuAndCnt.length;
};

export const isOnlyDrink = (splitedMenuAndCnt) => {
	const menus = splitedMenuAndCnt.map(([menu]) => menu);
	const drink = [];
	for (let menu in DRINK) {
		drink.push(DRINK[menu]);
	}
	return menus.every((menu) => drink.includes(menu));
};

export const hasExceededTwenty = (splitedMenuAndCnt) => {
	if (splitedMenuAndCnt.reduce((sum, [, cnt]) => sum + Number(cnt), 0) > 20) return true;
};
