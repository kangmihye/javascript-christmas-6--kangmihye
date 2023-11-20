import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import InputViewService from "./view/viewService/InputViewService.js";
class App {
	async run() {
		const date = await InputView.readDate();
		const menuInput = await InputView.readMenu(date);
		const parsedMenu = InputViewService.parseInput(menuInput);
		console.log(parsedMenu);
		OutputView.printMenu(parsedMenu);
		OutputView.printTotalPrice();
	}
}

export default App;
