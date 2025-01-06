"use client"
import { useState } from "react";
import { Props } from "@/types";

export default function SwitchMovieType({ longVideoIds, shortVideoIds }: Props) {
    const [filterType, setFilterType] = useState("longMovie");

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterType(event.target.value);
    };

    const getFilteredVideos = () => {
        if (filterType === "longMovie") {
            return longVideoIds;
        } else if (filterType === "shortsMovie") {
            return shortVideoIds;
        }
        return [];
    };

    const filteredVideos = getFilteredVideos();

    return (
        <div className="bg-[#F0EBDC] w-full">
            <div className="flex justify-center space-x-6 my-8">
                <label
                    className={`px-10 py-6 border-2 rounded-lg cursor-pointer ${
                        filterType === "longMovie"
                            ? "bg-white text-black text-xl font-bold border-black"
                            : "bg-white text-black text-xl border-black"
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
                    <span className="inline-block mr-2">&gt;</span> 動画
                </label>
                <label
                    className={`px-10 py-6 border-2 rounded-lg cursor-pointer ${
                        filterType === "shortsMovie"
                            ? "bg-white text-black text-lg font-bold border-black"
                            : "bg-white text-black text-lg font-bold border-black"
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
                    <span className="inline-block mr-2">&gt;</span> ショート
                </label>
            </div>

            <div className="bg-white mx-[3%] rounded-md">
                <div
                    className={`grid gap-4 ${
                        filterType === "longMovie"
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
                            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    }`}
                >
                    {filteredVideos.map((videoId, index) => (
                        <div key={`video-${index}`} className="flex mx-[8%] my-[10%]">
                            <iframe
                                className={`w-full ${
                                    filterType === "longMovie" ? "aspect-video" : "aspect-[9/16]"
                                }`}
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`Video - ${videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 
