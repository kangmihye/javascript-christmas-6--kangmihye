const Events = {
	canGetFreebie(totalPrice) {
		if (totalPrice >= 120000) return true;
		return false;
	},
};
export default Events;
