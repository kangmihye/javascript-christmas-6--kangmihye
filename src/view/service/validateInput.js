import { isInvalidNumber, isInvalidRange } from "../../utils/condition.js";
import { ERROR } from "../../utils/Constants.js";

export const validateDate = (input) => {
	if (isInvalidNumber(input)) throw new Error(ERROR.isInvalidNum);
	if (isInvalidRange(input)) throw new Error(ERROR.isInvalidNum);
};
