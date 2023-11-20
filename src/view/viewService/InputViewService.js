const InputViewService = {
	parseInput: (input) => {
		return input.split(",").map((menu) => menu.split("-"));
	},
};

export default InputViewService;
