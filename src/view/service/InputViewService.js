import { validteInputMenu } from "../service/validateInput.js";
const InputViewService = {
	generateMenuList: (inputMenu) => {
		const splitedMenus = inputMenu.replaceAll(" ", "").split(",");
		const splitedMenuAndCnt = splitedMenus.map((menu) => menu.split("-"));
		validteInputMenu(inputMenu, splitedMenus, splitedMenuAndCnt);
		return InputViewService.getMap(splitedMenuAndCnt);
	},
	getMap: (splitedMenus) => {
		const menuList = new Map();
		splitedMenus.forEach(([menu, cnt]) => {
			menuList.set(menu, Number(cnt));
			// menuList.has(menu) ? menuList.set(menu, menuList.get(menu) + Number(cnt)) : menuList.set(menu, Number(cnt));
		});
		return menuList;
	},
};

export default InputViewService;
