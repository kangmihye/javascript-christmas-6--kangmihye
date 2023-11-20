import InputView from "./view/InputView.js";

class App {
	async run() {
		const date = await InputView.readDate();
		const b = await InputView.readMenu(date);
		console.log(date, b);
	}
}

export default App;
