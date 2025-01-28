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
import { faBookOpenReader, faChalkboardTeacher, faLaptop } from "@fortawesome/free-solid-svg-icons";

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
			<ClientSwiper />

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
							交流しながら学習できる共同学習スペースです。学習目的に限り、開室時間内は誰でも自由に利用することができます。PCや撮影機器、ブースの貸出も行っています。グループワークに適した机・椅子やホワイトボードなど、学生同士の学びも促進するための設備があり、教職員スタッフやAIM
							Commons学生スタッフが授業時間外の学生の学びをサポートします。
						</p>
					</div>
				</div>
			</div>

			<div className="text-center"><h1 className="font-bold text-[26px]">AIMCommonsでできること</h1></div>
			<div className="m-8 grid grid-cols-1 gap-3 md:grid-cols-3">
				<AbleCard
					icon={faBookOpenReader}
					title="学習スペースの利用"
					description="グループワークに適した机・椅子やホワイトボード・大画面モニターなどを、その場で利用できます。"
					linkArray={[{ name: "詳細はこちら", link: "/introduce" }]}
				/>
				<AbleCard
					icon={faLaptop}
					title="機器レンタル"
					description="ノートPCをはじめ、カメラや充電器、動画編集ブースなどを借りることができます。"
					linkArray={[
						{ name: "機器貸出の詳細", link: "/" },
						{ name: "貸出機器の一覧", link: "https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?pli=1&gid=0#gid=0" },
					]}
				/>
				<AbleCard
					icon={faChalkboardTeacher}
					title="WorkShopへの参加"
					description="学生スタッフが開講するワークショップに参加できます。動画・画像編集ソフトやカメラの使い方の基礎を学ぶことができます。"
					linkArray={[
						{ name: "青山はこちら", link: "https://aimcommons.notion.site/3512196d259c42f1848120df30cc5443" },
						{ name: "相模原はこちら", link: "https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28" },
					]}
				/>
			</div>

			<div className="text-center"><h1 className="font-bold text-[26px]">インフォメーション</h1></div>
			<div className="m-8 grid grid-cols-1 gap-8 sm:grid-cols-[4fr_6fr] md:grid-cols-[4fr_6fr]">
				{/* 開室時間の表示 */}
				<Time
					title="開室時間"
					notes="※授業実施日のみ"
					subtitle="OPENING HOURS"
					locations={[
						{ id: "aoyama", name: "青山", time: "9:00 - 21:00" },
						{ id: "sagamihara", name: "相模原", time: "9:00 - 20:00" },
						{ id: "reception", name: "受付時間", time: "9:45 - 16:30" },
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

			{/* 追加情報を表示するボックス */}
			<div className="text-center"><h1 className="font-bold text-[26px]">利用ガイド</h1></div>
			<div className="m-8 gap-4 text-center ">
				<div className="flex flex-col mb-3 md:flex-row gap-6">
					{/* 利用案内 */}
					<div className="flex-1 bg-white p-3 rounded-lg">
						<div><h2 className="text-left ml-8 font-black text-lg">利用案内</h2></div>
						<div className="m-8 p-3 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 bg-white md:grid-cols-2">
							<Box
								src="/images/home01.jpg"
								title="利用案内ページ"
								subtitle="INSTRUCTION"
								description="アクセス/PC・機器貸出方法"
								link="./introduce"
							/>
							<Box
								src="/images/floor06.jpg"
								title="貸出機器一覧"
								subtitle="FACILITIES"
								description="AIM Commonsの設備"
								link="https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?pli=1&gid=0#gid=0"
							/>
						</div>
					</div>

					{/* ワークショップ */}
					<div className="flex-1 bg-white p-3 rounded-lg">
						<div><h2 className="text-left ml-8 font-black text-lg">ワークショップ</h2></div>
						<div className="m-8 p-3 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 bg-white md:grid-cols-2">
							<Box
								src="/images/aoyama.jpg"
								title="青山キャンパス"
								subtitle="AOYAMA"
								description="青山キャンパスで実施のワークショップ"
								link="https://aimcommons.notion.site/3512196d259c42f1848120df30cc5443"
							/>
							<Box
								src="/images/sagamihara.jpg"
								title="相模原キャンパス"
								subtitle="SAGAMIHARA"
								description="相模原キャンパスで実施のワークショップ"
								link="https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28"
							/>
						</div>
					</div>
				</div>

				<div className="bg-white p-3 rounded-lg">
					<div><h2 className="text-left ml-8 font-black text-lg">情報発信</h2></div>
					<div className="m-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-5">
						<Box
							src="/images/news_icon.svg"
							title="お知らせ"
							subtitle="NEWS"
							description="最新の情報をお届けします"
							link = "./info"
						/>
						<Box
							src="/images/youtube_icon.svg"
							title="YouTube"
							subtitle="YouTube"
							description="公式YouTubeで情報発信をしています"
							link = "./movies"
						/>
						<Box
							src="/images/blog_icon.svg"
							title="技術ブログ"
							subtitle="BLOG"
							description="スタッフによる技術に対するブログです"
							link = "./blog"
						/>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default TopPage;
