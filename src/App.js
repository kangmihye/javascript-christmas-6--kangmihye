import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import InputViewService from "../src/view/service/InputViewService.js";
import MenuList from "./model/MenuList.js";
import DiscountEvents from "./domain/DiscountEvents.js";
import applyEvents from "./domain/applyEvents.js";

class App {
	async run() {
		const date = await InputView.readDate();
		const discountEvents = new DiscountEvents(date);
		const menuList = new MenuList(await InputView.readMenus(date));

		OutputView.printMenu(menuList.getMeneList());
		OutputView.printTotalPrice(menuList);
		OutputView.printFreebie(menuList, discountEvents);

		const appliedEvents = applyEvents(menuList, discountEvents);
		OutputView.printBenefit(appliedEvents);
		OutputView.printTotalBenefit(appliedEvents);
		OutputView.printPayCharge(menuList, appliedEvents);
		OutputView.printBadge(appliedEvents);
	}
}

export default App;
