import applyEvents from "../src/domain/applyEvents.js";
import DiscountEvents from "../src/domain/DiscountEvents.js";
import MenuList from "../src/model/MenuList.js";

describe("적용되는 이벤트 테스트", () => {
	test("주문 금액 10000원 이상 모든 이벤트 적용", () => {
		const discountEvents = new DiscountEvents("3");
		const menuList = new MenuList(
			new Map([
				["티본스테이크", 2],
				["크리스마스파스타", 1],
				["제로콜라", 3],
				["아이스크림", 1],
			])
		);
		const expected = {
			canApplyEvents: true,
			xmas: 1200,
			star: 1000,
			week: ["평일", 2023],
			freebie: true,
		};

		expect(applyEvents(menuList, discountEvents)).toStrictEqual(expected);
	});

	test("부분 이벤트 적용", () => {
		const discountEvents = new DiscountEvents("4");
		const menuList = new MenuList(
			new Map([
				["제로콜라", 3],
				["아이스크림", 1],
			])
		);
		const expected = {
			canApplyEvents: true,
			xmas: 1300,
			star: 0,
			week: ["평일", 2023],
			freebie: false,
		};

		expect(applyEvents(menuList, discountEvents)).toStrictEqual(expected);
	});

	test("주문 금액 10000원 이하 이벤트 적용안함", () => {
		const discountEvents = new DiscountEvents("4");
		const menuList = new MenuList(new Map([["아이스크림", 1]]));
		const expected = {
			canApplyEvents: false,
		};

		expect(applyEvents(menuList, discountEvents)).toStrictEqual(expected);
	});
});
