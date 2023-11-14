import { Console } from "@woowacourse/mission-utils";
import { READDATE } from "../../utils/Constants.js";
import { validateDate } from "./validateInput.js";

const inputErrorHandler = async (msg, validator) => {
	let date = await Console.readLineAsync(msg);
	try {
		validator(date);
	} catch (error) {
		Console.print(error);
		date = await inputErrorHandler(msg, validator);
	}
	return date;
};

export default inputErrorHandler;
