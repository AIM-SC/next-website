import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Title from "../title";

type apiResponse = {
	createdAt: string;
	contents: {
		countList: {
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
		comment: string;
	};
}[];

export default async function UserDisplay() {
	const now = new Date();
	const hour = now.getHours();

	let total: number | "---";
	let note: string | undefined;
	if (hour >= 10 && hour < 17) {
		const url =
			"https://script.google.com/macros/s/AKfycbzANLahldgD9yJ2Rf2xxN1sHUNtgXAeBEmjkQBPVQSdSs5gRQaY0CuPUwE5CeDSxrYH-Q/exec?limit=1";

		const res = await fetch(url, { cache: "no-store" });
		const data: apiResponse = await res.json();
		total = Object.values(data[0].contents.countList).reduce(
			(sum, value) => sum + value,
			0,
		);
		note = format(data[0].createdAt, "MM/dd HH:mm");

		console.log("合計人数:", total);
	} else {
		total = "---";
	}

	return (
		<Card>
			<div className="mb-6 border-b text-center">
				<Title
					maintitle="現在の利用者数"
					subtitle="Current Users"
					notes={note ? `${note}集計` : undefined}
				/>
			</div>
			<CardContent className="pb-0">
				<div className="flex items-center justify-center gap-3">
					<FontAwesomeIcon icon={faUserGroup} className="size-5" />
					<span className="font-bold text-4xl">
						{total === undefined ? "---" : total}
					</span>
					<span className="text-lg">人</span>
				</div>
			</CardContent>
			<CardFooter className="flex justify-center bg-muted/50 px-4 py-2">
				<p className="text-center text-xs">
					開室日10:00〜16:30の間で、30分おきに更新されます
				</p>
			</CardFooter>
		</Card>
	);
}
