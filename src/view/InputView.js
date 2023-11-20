import { Console } from "@woowacourse/mission-utils";
import { INPUT_VIEW } from "../utils/Constants.js";

const InputView = {
	async readDate() {
		const input = await Console.readLineAsync(INPUT_VIEW.askDate);
		return input;
	},
	async readMenu(date) {
		const input = await Console.readLineAsync(INPUT_VIEW.askMenu);
		Console.print(INPUT_VIEW.preview(date));
		return input;
	},
};

export default InputView;
