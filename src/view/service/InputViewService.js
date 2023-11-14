const InputViewService = {
	generateMenuList: (menusAndCnt) => {
		const splitedMenus = menusAndCnt
			.replaceAll(" ", "")
			.split(",")
			.map((menu) => menu.split("-"));
		return getMap(splitedMenus);
	},
	getMap: (splitedMenus) => {
		const menuList = new Map();
		splitedMenus.forEach(([menu, cnt]) => {
			menuList.has(menu) ? menuList.set(menu, menuList.get(menu) + Number(cnt)) : menuList.set(menu, Number(cnt));
		});
		return menuList;
	},
};

export default InputViewService;
