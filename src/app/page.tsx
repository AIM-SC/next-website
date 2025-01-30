import Image from "next/image";
import { getInfoList } from "@/libs/microcms";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import ClientSwiper from "./components/swiper";
import Title from "./components/title";
import Time from "./components/time";
import Information from "./components/infromation";
import Box from "./components/box";
import AbleCard from "./components/ableCard/ableCard";
import {
	faBookOpenReader,
	faChalkboardTeacher,
	faLaptop,
	faEnvelopeOpenText,
	faVideo,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const TopPage = async () => {
	// お知らせデータの取得
	const informationQueries = {
		limit: 5,
		fields: "title,publishedAt,updatedAt,id",
	};
	const informationResponse = await getInfoList(informationQueries).catch(() =>
		notFound(),
	);
	console.log(informationResponse);
	const informationContent = informationResponse.contents.map((item) => {
		return {
			name: item.title,
			time: format(new Date(item.publishedAt || item.updatedAt), "yyyy/MM/dd"),
			id: item.id,
		};
	});

	return (
		<div className="bg-[#F0EBDC]">
			{/* Swiperセクション */}
			<div className="mx-auto w-[90%]">
				<ClientSwiper />
			</div>

			{/* Aboutセクション */}
			<div className="m-8 my-8 flex flex-col items-center justify-center gap-4 rounded bg-white p-8 md:flex-row">
				<div className="w-full md:w-1/2">
					<Image
						src="/images/about.png"
						alt="AIMの説明画像"
						className="mb-4 h-auto w-full rounded-md"
						width={500}
						height={300}
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				<div className="about_main w-full md:w-1/2">
					<Title
						maintitle="AIM Commons(ラーニングコモンズ)とは？"
						subtitle="ABOUT US"
					/>
					<div className="about_sub">
						<p>
							AIM
							Commonsは、青山キャンパス18号館と相模原キャンパスB棟に設置された学習スペースです。平日の授業実施日は開室しており、青学生は誰でも利用できます。グループ学習やディスカッションができるように、設置されているディスプレイやホワイトボードを自由に利用可能です。学習に必要な機材がない場合でも、ノートPCやビデオカメラの貸出サービスを利用できます。一部の貸出機材については、使い方を学べるワークショップを学生スタッフが行っています。
						</p>
					</div>
				</div>
			</div>

			<h1 className="text-center font-bold text-[26px]">
				AIM Commonsでできること
			</h1>
			<div className="m-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
				<AbleCard
					icon={faBookOpenReader}
					title="学習スペースの利用"
					description="グループワークに適した机・椅子やホワイトボード・大画面モニターなどを、その場で利用できます。"
					linkArray={[
						{ name: "アクセス", link: "/introduce#jumpToMap" },
						{ name: "施設紹介", link: "/introduce#jumpToIntroduce" },
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
						},
						{
							name: "貸出機器の一覧",
							link: "https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?pli=1&gid=0#gid=0",
						},
					]}
				/>
				<AbleCard
					icon={faChalkboardTeacher}
					title="ワークショップへの参加"
					description="学生スタッフが開講するワークショップに参加できます。動画・画像編集ソフトやカメラの使い方の基礎を学ぶことができます。"
					linkArray={[
						{
							name: "青山はこちら",
							link: "https://aimcommons.notion.site/3512196d259c42f1848120df30cc5443",
						},
						{
							name: "相模原はこちら",
							link: "https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28",
						},
					]}
				/>
			</div>

			<h1 className="text-center font-bold text-[26px]">インフォメーション</h1>
			<div className="m-8 grid gap-12 xl:grid-cols-[4fr_6fr]">
				{/* 開室時間の表示 */}
				<Time
					title="開室時間"
					notes="※授業実施日のみ"
					subtitle="OPENING HOURS"
					locations={[
						{ id: "aoyama", name: "青山", time: "9:30 - 17:00" },
						{ id: "aoyama-open", name: "青山受付時間", time: "10:00 - 16:45" },
						{ id: "sagamihara", name: "相模原", time: "9:00 - 20:00" },
						{
							id: "sagamihara-open",
							name: "相模原受付時間",
							time: "9:45 - 16:45",
						},
					]}
				/>

				{/* お知らせの表示 */}
				<Information
					title="お知らせ"
					notes=""
					subtitle="INFORMATION"
					content={informationContent}
				/>
			</div>

			<div className="m-8 gap-4 text-center ">
				<h1 className="font-bold text-[26px]">情報発信</h1>
				<div className="m-8 rounded-lg bg-white p-3">
					<div className="m-8 grid grid-cols-3 items-center gap-4 sm:grid-cols-1 md:grid-cols-3">
						<Box
							icon={faEnvelopeOpenText}
							title="お知らせ"
							subtitle="NEWS"
							description="AIM Commonsから利用者へのお知らせです"
							link="./info"
						/>
						<Box
							icon={faVideo}
							title="YouTube動画"
							subtitle="MOVIES"
							description="YouTubeで情報発信をしています"
							link="./movies"
						/>
						<Box
							icon={faNewspaper}
							title="ブログ"
							subtitle="BLOG"
							description="学生スタッフがITスキルに役立つ記事を投稿しています"
							link="./blog"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPage;
