export const NOTHING = "없음";

export const READDATE = Object.freeze({
	greeting: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
	askDate: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
});

export const READMENUS = Object.freeze({
	askMenu:
		"주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
	December: "12월",
	preview: "일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n",
});

export const OUTPUTVIEW = Object.freeze({
	orderedMenu: "<주문 메뉴>",
	unit: "개",
	totalPrice: "<할인 전 총주문 금액>",
	krw: "원",
	freebie: "<증정 메뉴>",
	giftedFreebie: "샴페인 1개",
	benefit: "<혜택 내역>",
});

export const DESSERT = Object.freeze({
	cake: "초코케이크",
	icecream: "아이스크림",
});

export const MAIN = Object.freeze({
	steak: "티본스테이크",
	rib: "바비큐립",
	seafoodPasta: "해산물파스타",
	pasta: "크리스마스파스타",
});

export const DRINK = Object.freeze({
	coke: "제로콜라",
	wine: "레드와인",
	champagne: "샴페인",
});

const APPETIZER = {
	soup: "양송이수프",
	tapas: "타파스",
	salad: "시저샐러드",
};

export const PRICE = Object.freeze({
	[APPETIZER.soup]: 6000,
	[APPETIZER.tapas]: 5500,
	[APPETIZER.salad]: 8000,
	[MAIN.steak]: 55000,
	[MAIN.rib]: 54000,
	[MAIN.seafoodPasta]: 35000,
	[MAIN.pasta]: 25000,
	[DESSERT.cake]: 15000,
	[DESSERT.icecream]: 5000,
	[DRINK.coke]: 3000,
	[DRINK.wine]: 60000,
	[DRINK.champagne]: 25000,
});
