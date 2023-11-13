import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import InputViewService from "../src/view/service/InputViewService.js";
import MenuList from "./model/MeneList.js";

class App {
	async run() {
		const menusAndCnt = await InputView.readMenus(await InputView.readDate());
		// const menuMap = InputViewService.generateMenuList(menusAndCnt);
		const menuList = new MenuList(InputViewService.generateMenuList(menusAndCnt));
		console.log("메뉴 맵", menuList.getMeneList());

		OutputView.printMenu(menuList.getMeneList());
		OutputView.printTotalPrice(menuList);
	}
}

export default App;
