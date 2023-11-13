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
		const menusAndCnt = await InputView.readMenus(date);

		const menuList = new MenuList(InputViewService.generateMenuList(menusAndCnt));
		console.log("메뉴 맵", menuList.getMeneList());

		OutputView.printMenu(menuList.getMeneList());
		OutputView.printTotalPrice(menuList);
		OutputView.printFreebie(menuList, discountEvents);

		const appliedEvents = applyEvents(menuList, discountEvents);
		console.log("객체확인", appliedEvents); //삭제
		OutputView.printBenefit(appliedEvents);
		OutputView.printTotalBenefit(appliedEvents);
	}
}

export default App;
