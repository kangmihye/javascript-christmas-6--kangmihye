import {
	isInvalidNumber,
	isInvalidRange,
	hasComma,
	hasHyphenNum,
	hasRestaurantMenuList,
	isInvalidMenuCount,
	isDuplicate,
	isOnlyDrink,
} from "../../utils/condition.js";
import { ERROR } from "../../utils/Constants.js";
import InputViewService from "../service/InputViewService.js";

export const validateDate = (input) => {
	if (isInvalidNumber(input) || isInvalidRange(input)) throw new Error(ERROR.isInvalidNum);
};

export const validteInputMenu = (inputMenu) => {
	const [splitedMenus, splitedMenuAndCnt] = InputViewService.preprocessData(inputMenu);
	if (hasHyphenNum(splitedMenus)) throw new Error(ERROR.isInvalidMenu);
	if (hasComma(inputMenu, splitedMenus)) throw new Error(ERROR.isInvalidMenu);
	if (hasRestaurantMenuList(splitedMenuAndCnt)) throw new Error(ERROR.isInvalidMenu);
	if (isInvalidMenuCount(splitedMenuAndCnt)) throw new Error(ERROR.isInvalidMenu);
	if (isDuplicate(splitedMenuAndCnt)) throw new Error(ERROR.isInvalidMenu);
	if (isOnlyDrink(splitedMenuAndCnt)) throw new Error(ERROR.isOnlyDrink);
};
