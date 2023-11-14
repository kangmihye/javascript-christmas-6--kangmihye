import { Console } from "@woowacourse/mission-utils";
import { READDATE, READMENUS } from "../utils/Constants.js";
import { validateDate } from "./service/validateInput.js";
import inputErrorHandler from "./service/inputErrorHandler.js";
import InputViewService from "./service/InputViewService.js";

const InputView = {
	async readDate() {
		Console.print(READDATE.greeting);
		return await inputErrorHandler(READDATE.askDate, validateDate);
	},
	async readMenus(date) {
		const menusAndCnt = await Console.readLineAsync(READMENUS.askMenu);
		const menuList = InputViewService.generateMenuList(menusAndCnt);

		Console.print(`${READMENUS.December}${date}${READMENUS.preview}`);

		return menuList;
	},
};

export default InputView;
