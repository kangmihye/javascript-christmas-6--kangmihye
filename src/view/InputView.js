import { Console } from "@woowacourse/mission-utils";
import { READDATE, READMENUS } from "../utils/Constants.js";

const InputView = {
	async readDate() {
		Console.print(READDATE.greeting);
		return await Console.readLineAsync(READDATE.askDate);
	},
	async readMenus(date) {
		const menusAndCnt = await Console.readLineAsync(READMENUS.askMenu);
		Console.print(`${READMENUS.December}${date}${READMENUS.preview}`);
		return menusAndCnt;
	},
};

export default InputView;
