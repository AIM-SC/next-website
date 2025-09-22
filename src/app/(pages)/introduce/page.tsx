import Heading from "@/app/components/layout/heading/heading";
import RoomService from "../../components/facility/roomService";
import type { Metadata } from "next";
import PageWrapper from "@/app/components/layout/pageWrapper";

export const metadata: Metadata = {
	title: "施設紹介",
	description: "AIM Commons 相模原の施設について詳しくご紹介します",
	openGraph: {
		title: "施設紹介",
		description: "AIM Commons 相模原の施設について詳しくご紹介します",
	},
	twitter: {
		title: "施設紹介",
		description: "AIM Commons 相模原の施設について詳しくご紹介します",
	},
};

const moviePage = async () => {
	return (
		<PageWrapper>
			<Heading
				engTitle="FACILITIES"
				jpTitle="施設紹介"
				abst="設備について詳しくご紹介します"
			/>
			<div id="jumpToMap">
				<RoomService />
			</div>
		</PageWrapper>
	);
};

export default moviePage;
