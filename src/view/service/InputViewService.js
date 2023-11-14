import { validteInputMenu } from "../service/validateInput.js";
const InputViewService = {
	preprocessData: (inputMenu) => {
		const splitedMenus = inputMenu.replaceAll(" ", "").split(",");
		const splitedMenuAndCnt = splitedMenus.map((menu) => menu.split("-"));
		return [splitedMenus, splitedMenuAndCnt];
	},
	getMap: (splitedMenuAndCnt) => {
		const menuList = new Map();
		splitedMenuAndCnt.forEach(([menu, cnt]) => {
			menuList.set(menu, Number(cnt));
		});
		return menuList;
	},
	generateMenuList: (inputMenu) => {
		const [, splitedMenuAndCnt] = InputViewService.preprocessData(inputMenu);
		return InputViewService.getMap(splitedMenuAndCnt);
	},
};

export default InputViewService;
