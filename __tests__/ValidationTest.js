import { validateDate, validteInputMenu } from "../src/view/service/validateInput";
describe("유효성 검사 테스트", () => {
	test("날짜 예외 테스트", () => {
		const date = ["a", "0", "3.6", "44", "6a"];
		date.forEach((date) => {
			expect(() => validateDate(date)).toThrow("[ERROR]");
		});
	});

	test("올바른 날짜 테스트", () => {
		expect(() => validateDate("21")).not.toThrow();
	});

	test("주문 예외 테스트", () => {
		const menuList = [
			"티본스테이크-2.아이스크림-2,시저샐러드-3",
			"아아스크림-2",
			"아이스크림-2,, 샴페인-1",
			",티본스테이크-1",
			"타파스-1,제로콜라-0",
			"타파스-1,제로콜라-a ",
			"시저샐러드-1,제로콜라-1, 레드와인-1, 샴페인-1,티본스테이크-1, 크리스마스파스타-16",
		];

		menuList.forEach((date) => {
			expect(() => validteInputMenu(date)).toThrow("[ERROR]");
		});
	});

	test("올바른 주문 테스트", () => {
		expect(() => validteInputMenu("시저샐러드-1,제로콜라-1")).not.toThrow();
	});
});
