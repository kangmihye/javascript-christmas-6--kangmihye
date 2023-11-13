import { DESSERT, MAIN } from "../utils/Constants.js";
class DiscountEvents {
	#date;
	#day;

	constructor(date) {
		this.#date = date;
		this.#day = new Date(2023, 11, date).getDay(); //number  // 0 ~ 4:평일 5,6:주말
	}

	xmasDiscount() {
		if (this.#date <= 25) return 1000 + (this.#date - 1) * 100;
		// if (this.#date > 25)
		return 0;
	}

	starDiscount() {
		const star = ["3", "10", "17", "24", "25", "31"];
		if (star.includes(this.#date)) return 1000;
		return 0;
	}

	//매개변수 : MenuList클래스
	weekDiscount(MenuList) {
		if (this.#day < 5)
			// 평일엔 디저트 개당 2023
			return ["평일", MenuList.countMenu(DESSERT) * 2023];

		// if (this.day >= 5)
		//주말엔 메인 2023
		return ["주말", MenuList.countMenu(MAIN) * 2023];
	}

	//매개변수 : MenuList클래스
	canGetFreebie(MenuList) {
		if (MenuList.sumTotalPrice() >= 120000) return true;
		return false;
	}
}

export default DiscountEvents;
