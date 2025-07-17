"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
	longVideoIds: string[];
	shortVideoIds: string[];
};

export default function SwitchMovieType({
	longVideoIds,
	shortVideoIds,
}: Props) {
	const [filterType, setFilterType] = useState("shortsMovie");

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
							? "border-black bg-white font-bold text-black text-sm sm:text-xl"
							: "border-black bg-white text-sm sm:text-xl"
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
					<div className="flex items-center">
						<FontAwesomeIcon icon={faChevronRight} className="mr-4 size-3" />
						<span>動画</span>
					</div>
				</label>
				<label
					className={`cursor-pointer rounded-lg border-2 px-10 py-6 ${
						filterType === "shortsMovie"
							? "border-black bg-white font-bold text-sm sm:text-xl"
							: "border-black bg-white text-sm sm:text-xl"
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
					<div className="flex items-center">
						<FontAwesomeIcon icon={faChevronRight} className="mr-4 size-3" />
						<span>ショート</span>
					</div>
				</label>
			</div>

			<div
				className={`rounded-lg bg-white ${filterType === "longMovie" ? "p-8 sm:p-12 md:px-[16%] lg:px-12" : "2lg:p-12 p-8 3xl:px-[4%] xs:px-[20%] md:p-12 lg:px-[12%] xl:px-[8%] 2xl:px-12"}`}
			>
				<div
					className={`grid gap-8 ${filterType === "longMovie" ? "grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3" : "2lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"}`}
				>
					{filteredVideos.map((videoId) => (
						<div key={`video-${videoId}`} className="flex">
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
