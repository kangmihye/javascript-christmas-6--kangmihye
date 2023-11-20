import InputView from "./view/InputView.js";

class App {
	async run() {
		const a = await InputView.readDate();
		console.log(a);
	}
}

export default App;
