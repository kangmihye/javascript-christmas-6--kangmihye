import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";

const OutputView = {
	printMenu(parsedMenu) {
		Console.print(OUTPUT_VIEW.orderedMenu);
		parsedMenu.forEach(([menu, cnt]) => {
			Console.print(`${menu} ${cnt}개`);
		});
		Console.print("");
	},
	printTotalPrice() {
		Console.print(OUTPUT_VIEW.totalPrice);
	},
};

export default OutputView;
