import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import InputViewService from "../src/view/service/InputViewService.js";
import MenuList from "./model/MeneList.js";
import DiscountEvents from "./domain/DiscountEvents.js";

class App {
	async run() {
		const date = await InputView.readDate();
		const events = new DiscountEvents(date);
		const menusAndCnt = await InputView.readMenus(date);

		const menuList = new MenuList(InputViewService.generateMenuList(menusAndCnt));
		console.log("메뉴 맵", menuList.getMeneList());

		OutputView.printMenu(menuList.getMeneList());
		OutputView.printTotalPrice(menuList);
		OutputView.printFreebie(menuList, events);
	}
}

export default App;
