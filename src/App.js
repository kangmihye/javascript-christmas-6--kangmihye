import InputView from "../src/view/InputView.js";

class App {
	async run() {
		let i = await InputView.readDate();
		await InputView.readMenus(i);
	}
}

export default App;
