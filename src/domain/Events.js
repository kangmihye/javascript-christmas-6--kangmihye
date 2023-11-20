import { DESSERT, MAIN, STARDAY } from "../utils/Constants.js";

class Events {
	#date;
	#day;

	constructor(date) {
		this.#date = date; //0-4: 일-목,  5-6 :금-토
		this.#day = new Date(2023, 11, date).getDay();
	}

	discountXmas() {
		if (this.#date <= 25) return 1000 + (this.#date - 1) * 100;
		return 0;
	}

	discountWeek(menuList) {
		if (this.#day < 5) return ["평일", menuList.countMenu(DESSERT) * 2023];
		if (this.#day >= 5) return ["주말", menuList.countMenu(MAIN) * 2023];
	}

	discountStar() {
		if (STARDAY.includes(Number(this.#date))) return 1000;
		return 0;
	}

	canGetFreebie(totalPrice) {
		if (totalPrice >= 120000) return true;
		return false;
	}
}

export default Events;
