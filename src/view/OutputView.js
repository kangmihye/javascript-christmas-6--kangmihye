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
	printTotalPrice(totalPrice) {
		Console.print(OUTPUT_VIEW.totalPrice);
		Console.print(`${totalPrice}원`);
	},
};

export default OutputView;
