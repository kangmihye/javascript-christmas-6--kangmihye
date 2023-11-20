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

	canGetFreebie(totalPrice) {
		if (totalPrice >= 120000) return true;
		return false;
	}
}

export default Events;
