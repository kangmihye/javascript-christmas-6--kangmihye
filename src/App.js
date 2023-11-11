import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import InputViewService from "../src/view/service/InputViewService.js";

class App {
	async run() {
		const menusAndCnt = await InputView.readMenus(await InputView.readDate());
		const menuList = InputViewService.generateMenuList(menusAndCnt);
		console.log("메뉴 맵", menuList);

		OutputView.printMenu(menuList);
	}
}

export default App;
