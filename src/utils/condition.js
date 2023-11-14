export const isInvalidNumber = (input) => {
	// 실수를 입력할 경우,문자를 입력할 경우 true
	input = Number(input.replaceAll(" ", ""));
	return !Number.isInteger(input) || Number.isNaN(input);
};

export const isInvalidRange = (input) => {
	// 1~31 이외일 경우 true
	input = Number(input.replaceAll(" ", ""));
	return input < 1 || input > 31;
};
