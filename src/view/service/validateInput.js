import {
	isInvalidNumber,
	isInvalidRange,
	hasComma,
	hasHyphenNum,
	hasRestaurantMenuList,
	isInvalidMenuCount,
	isDuplicate,
} from "../../utils/condition.js";
import { ERROR } from "../../utils/Constants.js";

export const validateDate = (input) => {
	if (isInvalidNumber(input) || isInvalidRange(input)) throw new Error(ERROR.isInvalidNum);
};

export const validteInputMenu = (inputMenu, splitedMenus, splitedMenuAndCnt) => {
	if (hasHyphenNum(splitedMenus)) throw new Error(ERROR.isInvalidMenu);
	if (hasComma(inputMenu, splitedMenus)) throw new Error(ERROR.isInvalidMenu);
	if (hasRestaurantMenuList(splitedMenuAndCnt)) throw new Error(ERROR.isInvalidMenu);
	if (isInvalidMenuCount(splitedMenuAndCnt)) throw new Error(ERROR.isInvalidMenu);
	if (isDuplicate(splitedMenuAndCnt)) throw new Error(ERROR.isInvalidMenu);
};
