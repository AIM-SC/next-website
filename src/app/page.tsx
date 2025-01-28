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

			<div className="m-8 grid grid-cols-1 gap-3 md:grid-cols-3">
				<AbleCard
					icon={faBookOpenReader}
					title="学習スペースの利用"
					description="グループワークに適した机・椅子やホワイトボード・大画面モニターなどを、その場で利用できます。"
					linkArray={[{ name: "詳細はこちら", link: "/" }]}
				/>
				<AbleCard
					icon={faLaptop}
					title="機器レンタル"
					description="ノートPCをはじめ、カメラや充電器、動画編集ブースなどを借りることができます。"
					linkArray={[
						{ name: "機器貸出の詳細", link: "/" },
						{ name: "貸出機器の一覧", link: "/" },
					]}
				/>
				<AbleCard
					icon={faChalkboardTeacher}
					title="WorkShopへの参加"
					description="学生スタッフが開講するワークショップに参加できます。動画・画像編集ソフトやカメラの使い方の基礎を学ぶことができます。"
					linkArray={[
						{ name: "青山はこちら", link: "/" },
						{ name: "相模原はこちら", link: "/" },
					]}
				/>
			</div>

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
			<div className="m-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-3">
				<Box
					src="/images/home01.jpg"
					title="利用案内"
					subtitle="INSTRUCTION"
					description="アクセス/PC・機器貸出方法"
				/>
				<Box
					src="/images/floor06.jpg"
					title="施設紹介"
					subtitle="FACILITIES"
					description="AIM Commonsの設備"
				/>
				<Box
					src="/images/home03.jpg"
					title="施設紹介"
					subtitle="FACILITIES"
					description="AIM Commonsの設備"
				/>
				<Box
					src="/images/home01.jpg"
					title="技術ブログ"
					subtitle="BLOG"
					description="技術的な投稿"
				/>
				<Box
					src="/images/floor06.jpg"
					title="新しい設備"
					subtitle="NEW FACILITIES"
					description="新しく導入された設備"
				/>
				<Box
					src="/images/kizai.jpg"
					title="機器貸し出し"
					subtitle="FACILITIES"
					description="機器の貸し出し"
				/>
			</div>
		</div>
	);
};

export default TopPage;
