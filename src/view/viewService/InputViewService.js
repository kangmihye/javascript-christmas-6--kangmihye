const InputViewService = {
	parseInput: (input) => {
		const parsedInput = input.split(",").map((menu) => menu.split("-"));
		return parsedInput.map(([menu, cnt]) => [menu, Number(cnt)]);
	},
};

export default InputViewService;
