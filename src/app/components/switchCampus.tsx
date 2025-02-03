"use client";
import { useState } from "react";
import IntroCard from "@/app/components/introCard";
import Image from "next/image";
import Rule from "@/app/components/rule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SwitchCampus() {
	const [selectedCampus, setSelectedCampus] = useState("sagamihara");

	const handleCampusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCampus(event.target.value);
	};

	const introCards = [
		{
			image: "/images/floor01.jpg",
			title: "PC貸出",
			url: "https://www.aim.aoyama.ac.jp/rental/note-pc/",
			time: "受付：9:45-16:30（返却は16:45まで）",
			text: (
				<div className="text-base">
					WindowsノートPC、MacBook Airを借りることができます。
				</div>
			),
			accordionText: (
				<ul className="list-disc pl-4 text-base">
					<li>当日返却、利用は学内のみでお願いします。</li>
					<li>
						電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。
					</li>
				</ul>
			),
		},
		{
			image: "/images/kizai.jpg",
			title: "機器貸出",
			url: "https://www.aim.aoyama.ac.jp/rental/production/",
			time: "受付：9:45-16:30（返却は16:45まで）",
			text: (
				<div>
					充電器や一眼レフカメラ、4Kビデオカメラ等を借りることができます。
				</div>
			),
			accordionText: (
				<ul className="list-disc pl-4 text-base">
					<li>一部機器はAIM Commons内でのみ利用できます。</li>
					<li>
						機器を日をまたいで借りる場合は、次開室日の正午までにご返却ください。
					</li>
				</ul>
			),
		},
		{
			image: "/images/floor02.jpg",
			title: "静音ブース",
			url: "https://www.aim.aoyama.ac.jp/rental/meetingpod/",
			time: "受付：9:45-16:30（返却は16:45まで）",
			text: (
				<div>
					ゼミや研究室のオンラインミーティング等に声を出して参加することができます。
				</div>
			),
			accordionText: (
				<ul className="list-disc pl-4 text-base">
					<li>利用は教育研究目的に限ります。</li>
					<li>完全防音ではありません。</li>
				</ul>
			),
		},
		{
			image: "/images/floor03.jpg",
			title: "動画編集ブース",
			url: "https://www.aim.aoyama.ac.jp/rental/production/",
			time: "受付：9:45-16:30（返却は16:45まで）",
			text: (
				<div>
					Windows、Macともに動画編集に適したソフト（Adobe）が入っているPCを利用できます。
				</div>
			),
		},
		{
			image: "/images/floor04.jpg",
			title: "ソファ",
			time: "利用：9:00-20:00",
			text: (
				<div>
					すべての席の横にホワイトボードがあり、グループ学習に最適です。
				</div>
			),
		},
		{
			image: "/images/floor05.jpg",
			title: "畳",
			time: "利用：9:00-20:00",
			text: <div>靴を脱いで、少人数で作業することができます。</div>,
		},
		{
			image: "/images/floor06.jpg",
			title: "PC設備",
			time: "利用：9:00-20:00",
			text: <div>PCが設置してある席です。IT講習会の勉強もできます。</div>,
			accordionText: (
				<ul className="list-disc pl-4 text-base">
					<li>一番左の席は、セカンドモニターとしてのみ利用できます。</li>
					<li>離席する際は、必ずサインアウトしてください。</li>
				</ul>
			),
		},
		{
			image: "/images/floor07.jpg",
			title: "個人用作業スペース",
			time: "利用：9:00-20:00",
			text: (
				<div>
					デスクライトが設備されているため、手元を照らしながら作業することができます。
				</div>
			),
		},
		{
			image: "/images/floor08.jpg",
			title: "フリースペース",
			time: "利用：9:00-20:00",
			text: (
				<div>
					ホワイトボードを簡易的な仕切りとして使ったり、メモとして使うことができます。
				</div>
			),
		},
		{
			image: "/images/floor09.jpg",
			title: "プリンター",
			url: "https://www.aim.aoyama.ac.jp/printstation/",
			time: "利用：9:00-20:00",
			text: (
				<div>自習スペースやご自身のパソコンから印刷することができます。</div>
			),
		},
		{
			image: "/images/lend02.jpg",
			title: "PC貸出ロッカー",
			url: "https://www.aim.aoyama.ac.jp/rental/note-pc/",
			time: "利用：8:30-20:00",
			text: <div>ロッカーに学生証をかざすだけでPCを借りることができます。</div>,
			accordionText: (
				<ul className="list-disc pl-4 text-base">
					<li>B棟4Fサポートラウンジ前の廊下にあります。</li>
					<li>1日に借りられるのは、1人1台までです。</li>
				</ul>
			),
		},
	];

	const rules = [
		{
			image: "/images/rule01.png",
			text: "学習目的での利用をお願いします",
		},
		{
			image: "/images/rule02.png",
			text: "食事はできません",
			note: "（蓋が閉まる＆直立する飲み物は持ち込めます。コンビニコーヒーのように、紙カップに簡単なフタが付いただけの容器は禁止です。）",
		},
		{
			image: "/images/rule03.png",
			text: "荷物を置いての長時間退出はご遠慮ください",
		},
		{
			image: "/images/rule04.png",
			text: "他の人の学習の妨げになる音出しはご遠慮ください",
			note: "(ゲーム、大きな声での会話モニターを使用した動画鑑賞など)",
		},
		{
			image: "/images/rule05.png",
			text: "睡眠目的での利用はご遠慮ください",
		},
	];

	return (
		<div className="w-full bg-[#F0EBDC]">
			<div className="my-8 flex justify-center space-x-6 ">
				<label
					className={`cursor-pointer rounded-lg border-2 px-5 py-6 sm:px-10 ${
						selectedCampus === "aoyama"
							? "border-black bg-white font-bold text-sm sm:text-xl"
							: "border-black bg-white text-sm sm:text-xl"
					}`}
				>
					<input
						type="radio"
						name="campus"
						value="aoyama"
						checked={selectedCampus === "aoyama"}
						onChange={handleCampusChange}
						className="hidden"
					/>
					<div className="flex items-center">
						<FontAwesomeIcon icon={faChevronRight} className="mr-4 size-3" />
						<span>青山</span>
						<span className="hidden sm:inline">キャンパス</span>
					</div>
				</label>
				<label
					className={`cursor-pointer rounded-lg border-2 px-5 py-6 sm:px-10 ${
						selectedCampus === "sagamihara"
							? "border-black bg-white font-bold text-sm sm:text-xl"
							: "border-black bg-white text-sm sm:text-xl"
					}`}
				>
					<input
						type="radio"
						name="campus"
						value="sagamihara"
						checked={selectedCampus === "sagamihara"}
						onChange={handleCampusChange}
						className="hidden"
					/>
					<div className="flex items-center">
						<FontAwesomeIcon icon={faChevronRight} className="mr-4 size-3" />
						<span>相模原</span>
						<span className="hidden sm:inline">キャンパス</span>
					</div>
				</label>
			</div>

			<div className="mx-[3%] rounded-md bg-white">
				{selectedCampus === "sagamihara" && (
					<div>
						<div className="pt-5 text-center">
							<h2 className="font-bold text-xl">アクセスマップ</h2>
							<p className="text-[#8C8C8C]">相模原：B棟 4階</p>
						</div>
						<div className="mb-5">
							<Image
								src="/images/go02.jpg"
								alt={"map"}
								width={1120}
								height={840}
								className="mx-auto"
							/>
						</div>
						<h2 className="text-center font-bold text-xl">室内案内図</h2>
						<Image
							src="/images/floor00.png"
							alt={"map"}
							width={1120}
							height={840}
							className="mx-auto h-[70%] w-[70%] items-center"
						/>
						<div className="text-center">
							<h2 className="my-5 font-bold text-xl" id="jumpToIntroduce">
								開室時間
							</h2>
							<p className="text-3xl text-[#d9ae4c]">9:00-20:00</p>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{introCards.map((card) => (
								<IntroCard
									key={card.title}
									image={card.image}
									title={card.title}
									url={card.url}
									time={card.time}
									text={card.text}
									// accordionTextがある場合のみ渡す
									accordionText={card.accordionText && card.accordionText}
								/>
							))}
						</div>

						<h2 className="pt-5 text-center font-bold text-xl">
							利用者が気持ちよく使うためのお願い
						</h2>
						<div className="m-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-3">
							{rules.map((rule) => (
								<Rule
									key={rule.text} // 各要素に一意のキーを設定
									image={rule.image}
									text={rule.text}
									note={rule.note} // noteがない場合はundefinedが渡されます
								/>
							))}
						</div>
					</div>
				)}
				{selectedCampus === "aoyama" && (
					<>
						<div className="pt-5 text-center">
							<h2 className="font-bold text-xl">アクセスマップ</h2>
							<p className="text-[#8C8C8C]">青山：18号館　地下1階・1階</p>
						</div>
						<Image
							src="/images/aoyama-lc-map-1F.jpg"
							alt={"map"}
							width={1920}
							height={2710}
							className="mx-auto my-3 h-[50%] w-[50%]"
						/>
						<Image
							src="/images/aoyama-lc-map-B1.jpg"
							alt={"map"}
							width={1920}
							height={2710}
							className="mx-auto h-[50%] w-[50%]"
						/>
					</>
				)}
			</div>
		</div>
	);
}
