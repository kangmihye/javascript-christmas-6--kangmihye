const InputViewService = {
	generateMenuList: (menusAndCnt) => {
		const splitedMenus = menusAndCnt.replaceAll(" ", "").split(",");
		const menuList = new Map(splitedMenus.map((menu) => menu.split("-")));
		// const a = menuList.map((menu) => menu.map((item, idx) => (idx === 1 ? Number(item) : item))); 갯수 숫자타입으로?

		return menuList;
	},
};

export default InputViewService;
