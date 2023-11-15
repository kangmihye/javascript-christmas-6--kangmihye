import sumTotal from "../src/domain/sumTotal.js";

describe("할인 금액 및 총혜택 금액 테스트", () => {
	test("할인 금액 구하기 테스트", () => {
		const appliedEvents = {
			canApplyEvents: true,
			xmas: 1200,
			star: 1000,
			week: ["평일", 2023],
			freebie: true,
		};

		const expected = 4223;
		expect(sumTotal.discount(appliedEvents)).toBe(expected);
	});

	test("할인 금액 테스트 10000원 이하일 경우 할인 적용하지 않음", () => {
		const appliedEvents = {
			canApplyEvents: false,
		};
		const expected = 0;
		expect(sumTotal.discount(appliedEvents)).toBe(expected);
	});

	test("총혜택 금액 테스트, 증정품 있을 경우", () => {
		const appliedEvents = {
			canApplyEvents: true,
			xmas: 1200,
			star: 1000,
			week: ["평일", 2023],
			freebie: true,
		};
		const expected = 29223;
		expect(sumTotal.benefit(appliedEvents)).toBe(expected);
	});

	test("총혜택 금액 테스트, 증정품 없을 경우", () => {
		const appliedEvents = {
			canApplyEvents: true,
			xmas: 1200,
			star: 1000,
			week: ["평일", 2023],
			freebie: false,
		};
		const expected = 4223;
		expect(sumTotal.benefit(appliedEvents)).toBe(expected);
	});
});
