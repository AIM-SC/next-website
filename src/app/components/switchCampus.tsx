"use client";
import IntroCard from "@/app/components/introCard";
import Rule from "@/app/components/rule";
import Image from "next/image";

export default function SwitchCampus() {
	const introCards = [
		{
			image: "/images/introduce/floor01.webp",
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
			image: "/images/general/equipment.webp",
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
					<li>一部機器はAIM Commons 相模原内でのみ利用できます。</li>
					<li>
						機器を日をまたいで借りる場合は、次開室日の正午までにご返却ください。
					</li>
				</ul>
			),
		},
		{
			image: "/images/introduce/floor02.webp",
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
			image: "/images/introduce/floor03.webp",
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
			image: "/images/introduce/floor04.webp",
			title: "ソファ",
			time: "利用：9:00-20:00",
			text: (
				<div>
					すべての席の横にホワイトボードがあり、グループ学習に最適です。
				</div>
			),
		},
		{
			image: "/images/introduce/floor05.webp",
			title: "畳",
			time: "利用：9:00-20:00",
			text: <div>靴を脱いで、少人数で作業することができます。</div>,
		},
		{
			image: "/images/introduce/floor06.webp",
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
			image: "/images/introduce/floor07.webp",
			title: "個人用作業スペース",
			time: "利用：9:00-20:00",
			text: (
				<div>
					デスクライトが設備されているため、手元を照らしながら作業することができます。
				</div>
			),
		},
		{
			image: "/images/introduce/floor08.webp",
			title: "フリースペース",
			time: "利用：9:00-20:00",
			text: (
				<div>
					ホワイトボードを簡易的な仕切りとして使ったり、メモとして使うことができます。
				</div>
			),
		},
		{
			image: "/images/introduce/floor09.webp",
			title: "プリンター",
			url: "https://www.aim.aoyama.ac.jp/printstation/",
			time: "利用：9:00-20:00",
			text: (
				<div>自習スペースやご自身のパソコンから印刷することができます。</div>
			),
		},
		{
			image: "/images/introduce/locker.webp",
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
			image: "/images/introduce/rule01.webp",
			text: (
				<>
					学習目的での利用を<span className="inline-block">お願いします</span>
				</>
			),
		},
		{
			image: "/images/introduce/rule02.webp",
			text: "食事はできません",
			note: "（蓋が閉まる＆直立する飲み物は持ち込めます。コンビニコーヒーのように、紙カップに簡単なフタが付いただけの容器は禁止です。）",
		},
		{
			image: "/images/introduce/rule03.webp",
			text: (
				<>
					荷物を置いての長時間退出は
					<span className="inline-block">ご遠慮ください</span>
				</>
			),
		},
		{
			image: "/images/introduce/rule04.webp",
			text: (
				<>
					他の人の学習の妨げになる音出しは
					<span className="inline-block">ご遠慮ください</span>
				</>
			),
			note: "(ゲーム、大きな声での会話モニターを使用した動画鑑賞など)",
		},
		{
			image: "/images/introduce/rule05.webp",
			text: (
				<>
					睡眠目的での利用は<span className="inline-block">ご遠慮ください</span>
				</>
			),
		},
	];

	return (
		<div className="w-full bg-[#F0EBDC]">
			<div className="rounded-md bg-white">
				<div>
					<div className="flex flex-col gap-6 p-6">
						<div className="text-center">
							<h2 className="font-bold text-xl">アクセスマップ</h2>
							<p className="text-[#8C8C8C]">相模原：B棟 4階</p>
						</div>
						<Image
							src="/images/introduce/floor_map.webp"
							alt={"map"}
							width={1120}
							height={840}
							className="mx-auto"
						/>
						<h2 className="text-center font-bold text-xl">室内案内図</h2>
						<Image
							src="/images/introduce/floor00.webp"
							alt={"map"}
							width={1120}
							height={840}
							className="mx-auto"
						/>
						<div className="text-center">
							<h2 className="my-6 font-bold text-xl" id="jumpToIntroduce">
								開室時間
							</h2>
							<p className="text-3xl text-[#d9ae4c]">9:00-20:00</p>
						</div>
					</div>

					<div className="p-8 sm:px-[20%] md:p-8 lg:px-[8%] xl:px-8 2xl:px-[4%]">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
					</div>

					<h2 className="pt-5 text-center font-bold text-xl">
						利用にあたってのお願い
					</h2>
					<div className="p-8 sm:px-[20%] md:p-8 lg:px-[8%] xl:px-8 2xl:px-[4%]">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
							{rules.map((rule) => (
								<Rule
									key={rule.image} // 各要素に一意のキーを設定
									image={rule.image}
									text={rule.text}
									note={rule.note} // noteがない場合はundefinedが渡されます
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
