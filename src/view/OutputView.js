import { Console } from "@woowacourse/mission-utils";
import { PRINTMENU } from "../utils/Constants.js";

const OutputView = {
	printMenu(menuList) {
		Console.print(PRINTMENU.orderedMenu);
		menuList.forEach((cnt, name) => {
			Console.print(`${name} ${cnt}${PRINTMENU.unit}`);
		});
	},
};

export default OutputView;
