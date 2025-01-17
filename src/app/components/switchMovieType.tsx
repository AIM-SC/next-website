"use client";
import { useState } from "react";

type Props = {
	longVideoIds: string[];
	shortVideoIds: string[];
};

export default function SwitchMovieType({
	longVideoIds,
	shortVideoIds,
}: Props) {
	const [filterType, setFilterType] = useState("longMovie");

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilterType(event.target.value);
	};

	const getFilteredVideos = () => {
		if (filterType === "longMovie") {
			return longVideoIds;
		}
		return shortVideoIds;
	};

	const filteredVideos = getFilteredVideos();

	return (
		<div className="w-full bg-[#F0EBDC]">
			<div className="my-8 flex justify-center space-x-6">
				<label
					className={`cursor-pointer rounded-lg border-2 px-10 py-6 ${
						filterType === "longMovie"
							? "border-black bg-white font-bold text-black text-xl"
							: "border-black bg-white text-black text-xl"
					}`}
				>
					<input
						type="radio"
						name="filter"
						value="longMovie"
						checked={filterType === "longMovie"}
						onChange={handleFilterChange}
						className="hidden"
					/>
					<span className="mr-2 inline-block">&gt;</span> 動画
				</label>
				<label
					className={`cursor-pointer rounded-lg border-2 px-10 py-6 ${
						filterType === "shortsMovie"
							? "border-black bg-white font-bold text-black text-lg"
							: "border-black bg-white font-bold text-black text-lg"
					}`}
				>
					<input
						type="radio"
						name="filter"
						value="shortsMovie"
						checked={filterType === "shortsMovie"}
						onChange={handleFilterChange}
						className="hidden"
					/>
					<span className="mr-2 inline-block">&gt;</span> ショート
				</label>
			</div>

			<div className="mx-[3%] rounded-md bg-white">
				<div
					className={`grid gap-4 ${
						filterType === "longMovie"
							? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
							: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
					}`}
				>
					{filteredVideos.map((videoId) => (
						<div key={`video-${videoId}`} className="mx-[8%] my-[10%] flex">
							<iframe
								className={`w-full ${
									filterType === "longMovie" ? "aspect-video" : "aspect-[9/16]"
								}`}
								src={`https://www.youtube.com/embed/${videoId}`}
								title={`Video - ${videoId}`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
