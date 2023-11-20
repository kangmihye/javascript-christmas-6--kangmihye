import MenuList from "./model/MenuList.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import InputViewService from "./view/viewService/InputViewService.js";
class App {
	async run() {
		const date = await InputView.readDate();
		const menuInput = await InputView.readMenu(date);
		const parsedMenu = InputViewService.parseInput(menuInput); //[ [ '타파스', 1 ], [ '제로콜라', 1 ] ]
		const menuList = new MenuList(parsedMenu); // {'타파스' => 1}
		OutputView.printMenu(parsedMenu);
		OutputView.printTotalPrice(menuList.sumTotalPrice()); // 할인 전 총주문 금액 
	}
}

export default App;
