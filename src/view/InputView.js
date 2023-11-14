import { Console } from "@woowacourse/mission-utils";
import { READDATE, READMENUS } from "../utils/Constants.js";
import { validateDate, validteInputMenu } from "./service/validateInput.js";
import inputErrorHandler from "./service/inputErrorHandler.js";
import InputViewService from "./service/InputViewService.js";

const InputView = {
	async readDate() {
		Console.print(READDATE.greeting);
		return await inputErrorHandler(READDATE.askDate, validateDate);
	},
	async readMenus(date) {
		const inputMenu = await inputErrorHandler(READMENUS.askMenu, validteInputMenu);
		const menuList = InputViewService.generateMenuList(inputMenu);
		Console.print(`${READMENUS.December}${date}${READMENUS.preview}`);

		return menuList;
	},
};

export default InputView;
