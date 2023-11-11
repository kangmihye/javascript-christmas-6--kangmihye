import InputView from "../src/view/InputView.js";
import InputViewService from "../src/view/service/InputViewService.js";

class App {
	async run() {
		const menusAndCnt = await InputView.readMenus(await InputView.readDate());
		const menuList = InputViewService.generateMenuList(menusAndCnt);

		console.log("a맵", menuList);
	}
}

export default App;
