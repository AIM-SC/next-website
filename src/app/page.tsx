import {
	faBookOpenReader,
	faChalkboardTeacher,
	faEnvelopeOpenText,
	faLaptop,
	faNewspaper,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getInfoList } from "@/libs/microcms";
import AbleCard from "./components/top/ableCard";
import LinkCard from "./components/top/linkCard";
import Information from "./components/facility/infromation";
import ClientSwiper from "./components/top/swiper";
import UserDisplay from "./components/top/userDisplay/userDisplay";
import UserDisplayLoading from "./components/top/userDisplay/userDisplayLoading";
import HeaderCard from "./components/layout/heading/headerCard";
import OpenHour from "./components/top/openHour";

const TopPage = async () => {
	// お知らせデータの取得
	const informationQueries = {
		limit: 6,
		fields: "title,publishedAt,updatedAt,id",
	};
	const informationResponse = await getInfoList(informationQueries).catch(() =>
		notFound(),
	);
	// console.log(informationResponse);
	const informationContent = informationResponse.contents.map((item) => {
		return {
			name: item.title,
			time: format(new Date(item.publishedAt || item.updatedAt), "yyyy/MM/dd"),
			id: item.id,
		};
	});

	return (
		<div>
			{/* Swiperセクション */}
			<div className="mx-auto w-full">
				<ClientSwiper />
			</div>

			{/* Aboutセクション */}
			<HeaderCard
				title={
					<>
						AIM Commons 相模原
						<br />
						（ラーニングコモンズ）とは？
					</>
				}
				engTitle="ABOUT US"
				content={
					<>
						<p>
							AIM Commons
							相模原は、相模原キャンパスB棟に設置された学習スペースです。
						</p>
						<p>平日の授業実施日は開室しており、青学生は誰でも利用できます。</p>
						<p>
							グループ学習やディスカッションができるように、設置されているディスプレイやホワイトボードを自由に利用可能です。
						</p>
						<p>
							学習に必要な機材がない場合でも、ノートPCやビデオカメラの貸出サービスを利用できます。
						</p>
						<p>
							一部の貸出機材については、使い方を学べるワークショップを学生スタッフが行っています。
						</p>
					</>
				}
			/>
			<h1 className="mt-12 mb-8 text-center font-bold text-xl md:text-[26px]">
				AIM Commons 相模原で<span className="inline-block">できること</span>
			</h1>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
				<AbleCard
					icon={faBookOpenReader}
					title="学習スペースの利用"
					description="グループワークに適した机・椅子やホワイトボード・大画面モニターなどを、その場で利用できます。"
					linkArray={[
						{ name: "アクセス", link: "/introduce#jumpToMap", external: false },
						{
							name: "施設紹介",
							link: "/introduce#jumpToIntroduce",
							external: false,
						},
					]}
				/>
				<AbleCard
					icon={faLaptop}
					title="機器貸出"
					description="ノートPCをはじめ、カメラや充電器、動画編集ブースなどを借りることができます。"
					linkArray={[
						{
							name: "機器貸出の詳細",
							link: "https://www.aim.aoyama.ac.jp/rental/production/",
							external: true,
						},
						{
							name: "貸出機器の一覧",
							link: "https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?pli=1&gid=0#gid=0",
							external: true,
						},
					]}
				/>
				<AbleCard
					icon={faChalkboardTeacher}
					title={<>ワークショップへの参加</>}
					description={
						<>
							学生スタッフが開講するワークショップに参加できます。
							<br />
							動画・画像編集ソフトやカメラの使い方の基礎を学ぶことができます。
						</>
					}
					linkArray={[
						{
							name: "ワークショップの詳細",
							link: "https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28",
							external: true,
						},
					]}
				/>
			</div>

			<h1 className="mt-12 mb-8 text-center font-bold text-xl md:text-[26px]">
				インフォメーション
			</h1>
			<div className="grid gap-4 lg:grid-cols-[4fr_6fr] lg:gap-8 xl:grid-cols-[4fr_6fr]">
				{/* 開室時間の表示 */}
				<div className="grid grid-cols-1 gap-4 text-center lg:gap-8">
					<OpenHour
						title="開室時間"
						notes="※授業実施日のみ"
						subtitle="OPENING HOURS"
						locations={[
							{
								id: "sagamihara-hours",
								name: "開室時間",
								time: "9:00 - 20:00",
							},
							{
								id: "sagamihara-reception",
								name: "受付時間",
								time: "9:45 - 16:45",
							},
							{
								id: "sagamihara-pc-rental",
								name: "PC貸出時間",
								time: "9:45 - 16:30",
							},
						]}
					/>
					<div className="">
						<Suspense fallback={<UserDisplayLoading />}>
							<UserDisplay />
						</Suspense>
					</div>
				</div>
				<div>
					{/* お知らせの表示 */}
					<Information
						title="最新のお知らせ"
						notes=""
						subtitle="LATEST NEWS"
						content={informationContent}
					/>
				</div>
			</div>

			<div className="gap-4 text-center ">
				<h1 className="mt-12 mb-8 font-bold text-xl md:text-[26px]">
					情報発信
				</h1>
				<div className="rounded-lg">
					<div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 lg:gap-8">
						<LinkCard
							icon={faEnvelopeOpenText}
							title="お知らせ"
							subtitle="NEWS"
							description={
								<>
									新情報やイベントなどの
									<br className="block sm:hidden md:block xl:hidden" />
									利用者へのお知らせです
								</>
							}
							link="./info"
						/>
						<LinkCard
							icon={faVideo}
							title="YouTube動画"
							subtitle="MOVIES"
							description={
								<>
									YouTubeで
									<br className="block sm:hidden md:block xl:hidden" />
									情報発信をしています
								</>
							}
							link="./movies"
						/>
						<LinkCard
							icon={faNewspaper}
							title="業務ブログ"
							subtitle="BLOGS"
							description={
								<>
									学生スタッフの業務に
									<br className="block sm:hidden md:block xl:hidden" />
									関する投稿をしています
								</>
							}
							link="./blog"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPage;
