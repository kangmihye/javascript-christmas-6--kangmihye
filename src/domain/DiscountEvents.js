import { DESSERT, MAIN, DATE, MONEY } from "../utils/Constants.js";
class DiscountEvents {
	#date;
	#day;

	constructor(date) {
		this.#date = date;
		this.#day = new Date(DATE.thisYear, DATE.indexDecember, date).getDay(); //0 ~ 4:평일 5,6:주말
	}

	xmasDiscount() {
		if (this.#date <= DATE.Xmas) return MONEY.thousand + (this.#date - 1) * MONEY.hundred;
		return 0;
	}

	starDiscount() {
		const star = [DATE.third, DATE.tenth, DATE.seventeenth, DATE.XmasEve, DATE.Xmas, DATE.thirtyFirst];
		if (star.includes(this.#date)) return MONEY.thousand;
		return 0;
	}

	weekDiscount(MenuList) {
		if (this.#day < DATE.indexFriday) return [DATE.weekdays, MenuList.countMenu(DESSERT) * DATE.thisYear];

		return [DATE.weekends, MenuList.countMenu(MAIN) * DATE.thisYear];
	}

	canGetFreebie(MenuList) {
		if (MenuList.sumTotalPrice() >= MONEY.getFreebiePrice) return true;
		return false;
	}
}

export default DiscountEvents;
