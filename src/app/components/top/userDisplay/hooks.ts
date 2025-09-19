import type { TotalCount, CongestionLevel, SofaCongestion } from "./types";
import {
	fetchUserData,
	getCurrentJapanTime,
	isWithinBusinessHours,
	calculateTotalCount,
	getCongestionLevel,
	getSofaCongestion,
	formatLastUpdated,
	isSameDate,
} from "./utils";

export type UserDisplayData = {
	total: TotalCount;
	note?: string;
	congestion: CongestionLevel | "";
	sofaCongestion: SofaCongestion | "";
	icon: number;
	sofaCount: number;
};

export async function getUserDisplayData(): Promise<UserDisplayData> {
	const japanTime = getCurrentJapanTime();

	let total: TotalCount = "---";
	let note: string | undefined;
	let congestion: CongestionLevel | "" = "";
	let sofaCongestion: SofaCongestion | "" = "";
	let icon = 0;
	let sofaCount = 0;

	if (!isWithinBusinessHours(japanTime)) {
		return {
			total,
			note: "集計時間外",
			congestion,
			sofaCongestion,
			icon,
			sofaCount,
		};
	}

	try {
		const data = await fetchUserData();
		const latestData = data[0];

		if (!latestData) {
			return {
				total,
				note: "集計時間外",
				congestion,
				sofaCongestion,
				icon,
				sofaCount,
			};
		}

		const latestDate = new Date(latestData.createdAt);

		if (!isSameDate(latestDate, japanTime)) {
			return {
				total,
				note: "集計時間外",
				congestion,
				sofaCongestion,
				icon,
				sofaCount,
			};
		}

		total = calculateTotalCount(latestData.contents.countList);
		note = formatLastUpdated(latestData.createdAt);

		if (typeof total === "number") {
			const congestionData = getCongestionLevel(total);
			congestion = congestionData.congestion;
			icon = congestionData.icon;

			const sofaData = getSofaCongestion(latestData.contents.countList);
			sofaCongestion = sofaData.sofaCongestion;
			sofaCount = sofaData.sofaCount;
		}

		console.log(
			"今日: ",
			japanTime.getFullYear(),
			japanTime.getMonth(),
			japanTime.getDate(),
		);
		console.log(
			"最新: ",
			latestDate.getFullYear(),
			latestDate.getMonth(),
			latestDate.getDate(),
		);
		console.log(latestData.contents);
	} catch (error) {
		console.error("データ取得エラー:", error);
		return {
			total,
			note: "集計時間外",
			congestion,
			sofaCongestion,
			icon,
			sofaCount,
		};
	}

	return {
		total,
		note,
		congestion,
		sofaCongestion,
		icon,
		sofaCount,
	};
}
