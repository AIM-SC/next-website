import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { UserCountLayout } from "./userCountLayout";

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

	if (hour >= 10 && hour < 24) {
		const url =
			"https://script.google.com/macros/s/AKfycbzANLahldgD9yJ2Rf2xxN1sHUNtgXAeBEmjkQBPVQSdSs5gRQaY0CuPUwE5CeDSxrYH-Q/exec?limit=1";
		const res = await fetch(url, { cache: "no-store" });
		const data: apiResponse = await res.json();

		total = Object.values(data[0].contents.countList).reduce(
			(sum, v) => sum + v,
			0,
		);
		note = format(new Date(data[0].createdAt), "MM/dd HH:mm");
	} else {
		total = "---";
	}

	return (
		<UserCountLayout note={note ? `${note}集計` : undefined}>
			<FontAwesomeIcon icon={faUserGroup} className="size-5" />
			<div className="mb-3 items-center justify-center">
				<span className="font-bold text-4xl">
					{total === undefined ? "—" : total}
				</span>
				<span className="text-lg">人</span>
			</div>
		</UserCountLayout>
	);
}
