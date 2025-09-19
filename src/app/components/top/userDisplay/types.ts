export type SeatCount = {
	sofa_backleft: number;
	pc: number;
	tatami: number;
	cafe: number;
	highchair: number;
	movable: number;
	sofa_backright: number;
	sofa_frontleft: number;
	sofa_frontright: number;
	vf_mac: number;
	vf_win: number;
	silent: number;
};

export type ApiResponse = {
	createdAt: string;
	contents: {
		countList: SeatCount;
		comment: string;
	};
}[];

export type CongestionLevel = "多数" | "やや多数" | "やや少数" | "少数";
export type SofaCongestion = "空きあり" | "空きなし";
export type TotalCount = number | "---";
