import { Console } from "@woowacourse/mission-utils";

const OutputViewService = {
	//1000단위 분리 구현예정
	//출력할 각각 이벤트
	distinguishEvents(appliedEvents) {
		const { xmas, star, week, freebie } = appliedEvents;
		if (xmas) Console.print(`크리스마스 디데이 할인: -${xmas}원`); //0원이면 출력 x
		if (star) Console.print(`특별 할인: -${star}원`); // 0이면 출력x
		Console.print(`${week[0]} 할인: -${week[1]}원`); // 평일이면 평일 , 주말이면 주말
		if (freebie) Console.print(`증정 이벤트: -25000원`);
	},
};

export default OutputViewService;
