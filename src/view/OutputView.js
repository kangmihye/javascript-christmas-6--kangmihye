import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_VIEW } from "../utils/Constants.js";
import OutputViewService from "./viewService/OutputViewService.js";
import Events from "../domain/Events.js";

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
		Console.print(`${OutputViewService.numberWithCommas(totalPrice)}원`);
		Console.print("");
	},
	printFreebie(totalPrice) {
		Console.print(OUTPUT_VIEW.freebie);
		Events.canGetFreebie(totalPrice) ? Console.print(OUTPUT_VIEW.gettingFreebie) : Console.print(OUTPUT_VIEW.nothing);
		Console.print("");
	},
};

export default OutputView;
