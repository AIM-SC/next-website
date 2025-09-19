import { formatInTimeZone, toZonedTime } from "date-fns-tz";
import type {
	SeatCount,
	CongestionLevel,
	SofaCongestion,
	ApiResponse,
} from "./types";

export const TIME_ZONE = "Asia/Tokyo";

export const API_URL =
	"https://script.google.com/macros/s/AKfycbzANLahldgD9yJ2Rf2xxN1sHUNtgXAeBEmjkQBPVQSdSs5gRQaY0CuPUwE5CeDSxrYH-Q/exec?limit=1";

export const CONGESTION_THRESHOLDS = {
	HIGH: 20,
	MEDIUM_HIGH: 15,
	MEDIUM_LOW: 10,
	LOW: 1,
} as const;

export const SOFA_SEATS = [
	"sofa_backleft",
	"sofa_backright",
	"sofa_frontleft",
	"sofa_frontright",
] as const;

export function isWithinBusinessHours(date: Date): boolean {
	const day = date.getDay();
	const hour = date.getHours();
	return day >= 1 && day <= 5 && hour >= 10 && hour < 17;
}

export function getCurrentJapanTime(): Date {
	const now = new Date();
	return toZonedTime(now, TIME_ZONE);
}

export function calculateTotalCount(countList: SeatCount): number {
	return Object.values(countList).reduce((sum, count) => sum + count, 0);
}

export function getCongestionLevel(total: number): {
	congestion: CongestionLevel;
	icon: number;
} {
	if (total >= CONGESTION_THRESHOLDS.HIGH) {
		return { congestion: "多数", icon: 4 };
	}
	if (total >= CONGESTION_THRESHOLDS.MEDIUM_HIGH) {
		return { congestion: "やや多数", icon: 3 };
	}
	if (total >= CONGESTION_THRESHOLDS.MEDIUM_LOW) {
		return { congestion: "やや少数", icon: 2 };
	}
	if (total >= CONGESTION_THRESHOLDS.LOW) {
		return { congestion: "少数", icon: 1 };
	}
	return { congestion: "少数", icon: 0 };
}

export function getSofaCongestion(countList: SeatCount): {
	sofaCongestion: SofaCongestion;
	sofaCount: number;
} {
	const sofaCount = SOFA_SEATS.reduce((count, seatName) => {
		return countList[seatName] !== 0 ? count + 1 : count;
	}, 0);

	const sofaCongestion: SofaCongestion =
		sofaCount !== 4 ? "空きあり" : "空きなし";

	return { sofaCongestion, sofaCount };
}

export function formatLastUpdated(dateString: string): string {
	return formatInTimeZone(new Date(dateString), TIME_ZONE, "M/d H:mm");
}

export function isSameDate(date1: Date, date2: Date): boolean {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

export async function fetchUserData(): Promise<ApiResponse> {
	const res = await fetch(API_URL, { cache: "no-store" });
	return res.json();
}
