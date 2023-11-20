import InputView from "./view/InputView.js";

class App {
	async run() {
		const a = await InputView.readDate();
		const b = await InputView.readMenu();
		console.log(a, b);
	}
}

export default App;
