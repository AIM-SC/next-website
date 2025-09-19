import Heading from "@/app/components/layout/heading/heading";
import RoomService from "../../components/facility/roomService";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "施設紹介",
	description: "AIM Commons 相模原の施設について詳しくご紹介します",
};

const moviePage = async () => {
	return (
		<div className="py-[75px]">
			<Heading
				engTitle="FACILITIES"
				jpTitle="施設紹介"
				abst="設備について詳しくご紹介します"
			/>
			<div id="jumpToMap">
				<RoomService />
			</div>
		</div>
	);
};

export default moviePage;
