import { isInvalidNumber, isInvalidRange } from "./condition.js";
import { ERROR } from "./Constants.js";

const validateDate = (input) => {
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
	if (isInvalidRange(input)) throw new Error(ERROR.isInvalidNum);
};

// validateDate("2.1");
// validateDate("a");
// validateDate("-1");
// validateDate("33");
// validateDate(" 3 2");
// validateDate("[3]");
