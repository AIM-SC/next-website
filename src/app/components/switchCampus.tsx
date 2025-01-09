"use client";
import { useState } from "react";
import IntroCard from "@/app/components/introCard";
import Image from "next/image";

export default function SwitchCampus() {
	const [selectedCampus, setSelectedCampus] = useState("sagamihara");

	const handleCampusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCampus(event.target.value);
	};

	return (
		<div className="w-full bg-[#F0EBDC]">
			<div className="my-8 flex justify-center space-x-6 ">
				<label
					className={`cursor-pointer rounded-lg border-2 px-5 py-6 sm:px-10 ${
						selectedCampus === "aoyama"
							? "border-black bg-white font-bold text-black text-sm sm:text-xl"
							: "border-black bg-white text-black text-sm sm:text-xl"
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
					<span className="mr-2 inline-block">&gt;</span> 青山キャンパス
				</label>
				<label
					className={`cursor-pointer rounded-lg border-2 px-5 py-6 sm:px-10 ${
						selectedCampus === "sagamihara"
							? "border-black bg-white font-bold text-black text-sm sm:text-xl"
							: "border-black bg-white text-black text-sm sm:text-xl"
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
					<span className="mr-2 inline-block">&gt;</span> 相模原キャンパス
				</label>
			</div>

			<div className="mx-[3%] rounded-md bg-white">
				{selectedCampus === "sagamihara" && (
					<div>
						<div className="my-8 flex items-center justify-center">
							<Image
								src="/images/floor00.png"
								alt={"map"}
								width={1120}
								height={840}
							/>
						</div>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							<IntroCard
								image="/images/floor01.jpg"
								alt="受付"
								title="受付"
								text={
									<ul className="space-y-4">
										<li>
											PCや機材、ブースの貸し出しを行っています。詳しくは
											利用案内 をご覧ください。
										</li>
										<li>
											9:45-16:30は、AIM
											Commonsスタッフが駐在していますので、ラーコモに関する疑問などはお気軽にお声がけください。
										</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor02.jpg"
								alt="説明カード"
								title="静音ブース"
								text={
									<ul className="space-y-4">
										<li>
											防音になっていて、ゼミや研究室のオンラインミーティングなどで声を出して参加することができます。(完全防音ではありません)
										</li>
										<li>30分単位で最大90分まで予約可能です。</li>
										<li>※使用したい場合は、受付で貸出手続きをしてください。</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor03.jpg"
								alt="説明カード"
								title="動画編集ブース"
								text={
									<ul className="space-y-4">
										<li>
											自分のパソコンだと動きが重い、Adobeを使ってみたい人、ぜひご活用ください。
										</li>
										<li>
											Windows、Macともに動画編集に適したソフト（Adobe）が入っているパソコンを使用することができます。
										</li>
										<li>※使用したい場合は、受付で貸出手続きをしてください。</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor04.jpg"
								alt="説明カード"
								title="作業スペース/ソファ"
								text={
									<ul className="space-y-4">
										<li>
											背の高いソファ席なので周りの視覚などを遮り集中して作業ができます。すべての席の横にはホワイトボードがあり、グループでの学習にも活用できます。
										</li>
										<li>
											パソコンと接続できる大きめのディスプレイが利用できる席もご自由にお使いいただけます。
										</li>
									</ul>
								}
								exsampleText={
									<ul className="ml-6 list-disc">
										<li>グループで学習したい方</li>
										<li>一人で集中して学習したい方</li>
										<li>ディスプレイを利用してプレゼンの練習をしたい方</li>
										<li>ホワイトボードを利用して学習したい方</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor05.jpg"
								alt="説明カード"
								title="作業スペース/畳"
								text={
									<p>畳の席でくつろぎながら少人数で作業することができます。</p>
								}
								exsampleText={
									<ul className="ml-6 list-disc">
										<li>ゆったりと学習したい方</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor06.jpg"
								alt="説明カード"
								title="作業スペース/PC設備"
								text={
									<p>
										PCが設置してある席です。専用ソフトが入っているのでIT講習会の勉強もできます。
									</p>
								}
								exsampleText={
									<ul className="ml-6 list-disc">
										<li>友達と相談しあいながらIT講習会の勉強をしたい方</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor07.jpg"
								alt="説明カード"
								title="作業スペース/個人用"
								text={
									<ul className="space-y-4">
										<li>
											デスクライトが設備されているため、手元を照らしながら作業することができます。
										</li>
										<li>
											脚の長い机と椅子が設置されており、まるでカフェにいるような感覚で勉強できます。
										</li>
									</ul>
								}
								exsampleText={
									<ul className="ml-6 list-disc">
										<li>手元が明るい場所で学習したい方</li>
										<li>カフェのような空間で学習したい方</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor08.jpg"
								alt="説明カード"
								title="フリースペース"
								text={
									<p>
										ホワイトボードがあるので、簡易的な仕切りとして使ったり、メモとして使うことができます
									</p>
								}
								exsampleText={
									<ul className="ml-6 list-disc">
										<li>一人で学習したい方</li>
										<li>ホワイトボードでメモしながら学習したい方</li>
									</ul>
								}
							/>
							<IntroCard
								image="/images/floor09.jpg"
								alt="説明カード"
								title="プリンター"
								text={
									<p>
										自習スペースやご自身のパソコンから印刷することができます。
									</p>
								}
							/>
						</div>
					</div>
				)}
				{selectedCampus === "aoyama" && (
					<div className="flex h-64 items-center justify-center bg-white">
						<p className="font-bold text-2xl text-gray-500">Coming Soon</p>
					</div>
				)}
			</div>
		</div>
	);
}
