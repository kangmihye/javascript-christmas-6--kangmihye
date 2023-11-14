import { APPETIZER, MAIN, DESSERT, DRINK } from "../utils/Constants.js";
export const isInvalidNumber = (input) => {
	// 실수를 입력할 경우,문자를 입력할 경우 true
	input = Number(input.replaceAll(" ", ""));
	return !Number.isInteger(input) || Number.isNaN(input);
};

export const isInvalidRange = (input) => {
	// 1~31 이외일 경우 true
	input = Number(input.replaceAll(" ", ""));
	return input < 1 || input > 31;
};

export const hasComma = (inputMenu, splitedMenus) => {
	//메뉴를 ,로 구분하지 않을 경우
	//스테이크-2.아이스크림-2,초코-3
	return inputMenu.match(/-/g).length !== splitedMenus.length; //같지 않으면 true = 잘못됨
};

export const hasHyphenNum = (splitedMenus) => {
	// 각 메뉴가 -3 형식이 아닐 경우
	//  3
	// ,아아스크림-2
	return !splitedMenus.every((splitedMenu) => ~splitedMenu.search(/-\d+/g)); //true일 경우 올바름(가짐) false일 경우 안가져 -> 예외true
};

export const hasRestaurantMenuList = (splitedMenuAndCnt) => {
	const restaurantMenuList = {};
	const menuListValue = [];
	Object.assign(restaurantMenuList, APPETIZER, MAIN, DESSERT, DRINK);

	for (let menu in restaurantMenuList) {
		menuListValue.push(restaurantMenuList[menu]);
	}

	return !splitedMenuAndCnt.every(([menu, cnt]) => menuListValue.includes(menu)); //false일 경우 없어 없으면 에러 true
};

export const isInvalidMenuCount = (splitedMenuAndCnt) => {
	return splitedMenuAndCnt.some(([menu, cnt]) => isInvalidNumber(cnt)); // 실수 문자일 경우 true 하나라도 true면 true
};

export const isDuplicate = (splitedMenuAndCnt) => {
	const set = new Set();
	splitedMenuAndCnt.forEach(([menu, cnt]) => {
		set.add(menu);
	});
	return set.size !== splitedMenuAndCnt.length; // 같지 않으면 중복 true
};
