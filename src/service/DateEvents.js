class DateEvents {
	#date;

	constructor(date) {
		this.#date = date;
	}

	xmasDiscount(date) {
		if (date > 25) return 0;
		if (date <= 25) return 1000 + (date - 1) * 100;
	}

	starDiscount(date) {
		const star = [3, 10, 17, 24, 25, 31];
		if (star.includes(date)) return 1000;
	}
}

export default DateEvents;
