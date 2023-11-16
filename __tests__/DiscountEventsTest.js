import DiscountEvents from "../src/domain/DiscountEvents.js";
import MenuList from "../src/model/MenuList.js";

const menuList = [
	new Map([
		["티본스테이크", 2],
		["크리스마스파스타", 1],
		["제로콜라", 3],
		["아이스크림", 1],
	]),
	new Map([
		["티본스테이크", 1],
		["크리스마스파스타", 1],
		["제로콜라", 3],
		["아이스크림", 10],
	]),
	new Map([
		["티본스테이크", 1],
		["크리스마스파스타", 1],
	]),
	new Map([
		["제로콜라", 1],
		["아이스크림", 3],
	]),
];

const menuListArr = [];
menuList.forEach((menu) => {
	menuListArr.push(new MenuList(menu));
});

describe("할인 이벤트 테스트", () => {
	test("크리스마스 디데이 할인", () => {
		const date = ["1", "2", "10", "20", "25", "26", "31"];
		const expected = [1000, 1100, 1900, 2900, 3400, 0, 0];

		date.forEach((value, idx) => {
			expect(new DiscountEvents(value).xmasDiscount()).toBe(expected[idx]);
		});
	});

	test("특별 할인", () => {
		const date = ["3", "5", "10", "19", "25", "31"];
		const expected = [1000, 0, 1000, 0, 1000, 1000];

		date.forEach((value, idx) => {
			expect(new DiscountEvents(value).starDiscount()).toBe(expected[idx]);
		});
	});

	test("주말 또는 평일 할인", () => {
		const date = ["5", "9", "19", "23"];

		const menuListArr = [];
		const expected = [
			["평일", 2023],
			["주말", 4046],
			["평일", 0],
			["주말", 0],
		];

		menuList.forEach((menu) => {
			menuListArr.push(new MenuList(menu));
		});

		date.forEach((value, idx) => {
			expect(new DiscountEvents(value).weekDiscount(menuListArr[idx])).toStrictEqual(expected[idx]);
		});
	});

	test("증정 이벤트", () => {
		const expected = [true, true, false, false];

		menuListArr.forEach((menuList, idx) => {
			expect(new DiscountEvents("5").canGetFreebie(menuList)).toBe(expected[idx]);
		});
	});
});
DiscountEvents;
