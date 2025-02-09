import { XMLParser } from "fast-xml-parser";
import SwitchMovieType from "../../components/switchMovieType";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "YouTube動画",
	description: "AIM Commonsが作成している配信動画の一覧です",
};

type VideoId = string;
type Entry = {
	"yt:videoId": string;
	title: string;
};

const moviePage = async () => {
	const xmlFileUrl =
		"https://www.youtube.com/feeds/videos.xml?channel_id=UCPvxIswjXQ1VU2H3WyBss8w";

	const response = await fetch(xmlFileUrl, {
		cache: "no-store",
	});
	const xmlText = await response.text();
	const parser = new XMLParser();
	const jsonObj = parser.parse(xmlText);

	const entries: Entry[] = jsonObj.feed.entry;

	let longVideoIds: VideoId[] = [];
	let shortVideoIds: VideoId[] = [];

	for (const entry of entries) {
		const videoId = entry["yt:videoId"];
		if (entry.title.toLowerCase().includes("shorts")) {
			shortVideoIds.push(videoId);
		} else {
			longVideoIds.push(videoId);
		}
	}

	// 先頭9この動画だけを表示
	longVideoIds = longVideoIds.slice(0, 9);
	shortVideoIds = shortVideoIds.slice(0, 9);

	return (
		<div className="py-[75px] text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
					MOVIES
				</div>
				<div className="text-center font-semibold text-2xl text-black md:text-4xl">
					YouTube動画
				</div>
				<div className="text-center font-bold text-gray-600 text-sm md:text-lg">
					AIM Commons配信動画一覧
				</div>
			</div>
			<div className="mx-auto mb-[6vh]">
				<SwitchMovieType
					longVideoIds={longVideoIds}
					shortVideoIds={shortVideoIds}
				/>
			</div>

			<Button className="mx-auto mt-[2%] block rounded-lg bg-red-600 px-4 py-2 font-bold text-lg text-white">
				<Link
					href="https://www.youtube.com/channel/UCPvxIswjXQ1VU2H3WyBss8w"
					target="_blank"
					rel="noreferrer"
				>
					すべての動画を見るにはこちら
				</Link>
			</Button>
		</div>
	);
};

export default moviePage;
