import MenuList from "../src/model/MenuList.js";
import { MAIN, DESSERT } from "../src/utils/Constants.js";

const menuList1 = new MenuList(
	new Map([
		["티본스테이크", 2],
		["크리스마스파스타", 1],
		["제로콜라", 3],
		["아이스크림", 1],
	])
);

const menuList2 = new MenuList(new Map([["아이스크림", 5]]));

describe("메뉴리스트 객체 테스트", () => {
	test("총 금액 구하기 테스트", () => {
		const expected1 = 149000;
		const expected2 = 25000;
		expect(menuList1.sumTotalPrice()).toBe(expected1);
		expect(menuList2.sumTotalPrice()).toBe(expected2);
	});

	test("메뉴 개수 구하기 테스트", () => {
		const expected1 = 3;
		const expected2 = 5;
		expect(menuList1.countMenu(MAIN)).toBe(expected1);
		expect(menuList2.countMenu(DESSERT)).toBe(expected2);
	});
});
