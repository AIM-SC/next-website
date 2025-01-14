import Rule from "../../components/rule";
import Explain from "@/app/components/explain";
import Link from "next/link";
import Image from "next/image";

const InstractionPage = async () => {
	return (
		<div className="py-[75px] text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
					INSTRUCTION
				</div>
				<div className="text-center font-semibold text-2xl text-black md:text-4xl">
					利用案内
				</div>
				<div className="text-center font-bold text-gray-600 text-sm md:text-lg">
					アクセス/PC・機器貸出方法についてご紹介します
				</div>
			</div>

			<div className="rounded-md bg-white p-1 text-center md:p-11">
				<h2 className="font-bold text-xl">アクセスマップ</h2>
				<p className="text-[#8C8C8C]">青山：18号館　地下1階・1階</p>
				<Image
					src="/images/go01.jpg"
					alt="青山キャンパス案内図"
					width={2034}
					height={720}
				/>
				<p className="text-[#8C8C8C]">相模原：B棟　4階</p>
				<Image
					src="/images/go02.jpg"
					alt="相模原キャンパス案内図"
					width={4168}
					height={1392}
				/>
				<h3>
					相模原キャンパス：動画での説明は
					<Link
						href="https://www.youtube.com/shorts/7wUXAheGLBo"
						target="_brank"
						className="text-[#d9ae4c]"
					>
						こちら
					</Link>
				</h3>
				<h2 className="my-8 font-bold text-xl">開室時間</h2>
				<div className="m-8 flex flex-col justify-center md:flex-row">
					<div className="mr-5 flex items-center justify-center">
						<p className="m-3 text-xl">青山</p>
						<p className="text-3xl text-[#d9ae4c]">9:00-17:00</p>
					</div>
					<div className="flex items-center justify-center">
						<p className="m-2 text-xl">相模原</p>
						<p className="text-3xl text-[#d9ae4c]">9:00-20:00</p>
					</div>
				</div>
				<h2 className="font-bold text-xl">
					利用者が気持ちよく使うためのお願い
				</h2>
				<div className="m-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-3">
					<Rule
						image="/images/rule01.png"
						text="学習目的での利用をお願いします"
					/>
					<Rule
						image="/images/rule02.png"
						text="食事はできません"
						note="（蓋が閉まる＆直立する飲み物は持ち込めます。
							コンビニコーヒーのように、紙カップに簡単なフタが付いただけの容器は禁止です。）"
					/>
					<Rule
						image="/images/rule03.png"
						text="荷物を置いての長時間退出はご遠慮ください"
					/>
					<Rule
						image="/images/rule04.png"
						text="他の人の学習の妨げになる音出しはご遠慮ください"
						note="(ゲーム、大きな声での会話モニターを使用した動画鑑賞など)"
					/>
					<Rule
						image="/images/rule05.png"
						text="睡眠目的での利用はご遠慮ください"
					/>
					<Rule
						image="/images/rule06.png"
						text="各座席に決められた定員数を守ってください"
					/>
				</div>
				<h2 className="font-bold text-xl">PC・機器貸出方法</h2>
				<h3>
					利用には<span className="text-[#d9ae4c]">学生証</span>
					が必要です！必ず持参してください
				</h3>
				<div className="m-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
					<Explain
						image="/images/lend01.jpg"
						title="PC（受付）"
						subtitle="受付での手続きが必要です。"
						link="https://www.aim.aoyama.ac.jp/rental/note-pc/"
						time={[
							"青山：受付での貸し出しサービスはありません",
							"相模原：9:45~16:30 (返却は16:45まで)",
						]}
						notes={
							<ul className="ml-6 list-disc">
								<li>当日返却、利用は学内のみでお願いします。</li>
								<li>
									電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。
								</li>
							</ul>
						}
					/>
					<Explain
						image="/images/lend02.jpg"
						title="PC（ロッカー）"
						subtitle="受付を通さず、ロッカーに学生証をかざすだけで借りることができます。"
						link="https://www.aim.aoyama.ac.jp/rental/note-pc/"
						time={["相模原：9:45~16:30 (返却は16:45まで)", "青山：8:30~22:00"]}
						notes={
							<ul className="ml-6 list-disc">
								<li>当日返却、利用は学内のみでお願いします。</li>
								<li>
									電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。
								</li>
							</ul>
						}
					/>
					<Explain
						image="/images/lend03.jpg"
						title="機材"
						subtitle="受付での手続きが必要です。利用後に、アンケートの記入にご協力お願いします。"
						link="https://www.aim.aoyama.ac.jp/rental/production/"
						time={["9:45~16:30 (返却は16:45まで)"]}
						notes={
							<ul className="ml-6 list-disc">
								<li>翌営業日までの返却で、学外へ持ち出しが可能。</li>
								<li>一部機器は、B422教室内のみでの利用。</li>
								<li>
									詳しい貸出機器に関しては
									<Link
										href="https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?gid=0#gid=0"
										target="_blank"
										className="underline hover:text-[#d9ae4c] hover:opacity-70 "
									>
										貸出機器一覧表
									</Link>
									をご確認ください。
								</li>
								<li>2週間先までの予約が可能です。</li>
							</ul>
						}
					/>
					<Explain
						image="/images/lend04.jpg"
						title="静音 (相模原) ・編集ブース"
						subtitle="受付での手続きが必要です。"
						link="https://www.aim.aoyama.ac.jp/rental/production/"
						time={["9:45~16:30 (返却は16:45まで)"]}
						notes={
							<ul className="ml-6 list-disc">
								<li>2週間先までの予約が可能です。</li>
								<li>
									編集ブースのPCは、電源を消すと自動的にデータが消去され、PC本体内にデータは保存できません。
								</li>
							</ul>
						}
					/>
				</div>
			</div>
			<h2 className="font-bold text-xl">利用者が気持ちよく使うためのお願い</h2>
			<div className="m-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-3">
				<Rule
					image="/images/rule01.png"
					text="学習目的での利用をお願いします"
					note=""
				/>
				<Rule
					image="/images/rule02.png"
					text="食事はできません"
					note="(蓋が閉まる＆直立する飲み物は飲むことができます)"
				/>
				<Rule
					image="/images/rule03.png"
					text="荷物を置いての長時間退出はご遠慮ください"
					note=""
				/>
				<Rule
					image="/images/rule04.png"
					text="他の人の学習の妨げになる音出しはご遠慮ください"
					note="(ゲーム、大きな声での会話モニターを使用した動画鑑賞など)"
				/>
				<Rule
					image="/images/rule05.png"
					text="睡眠目的での利用はご遠慮ください"
					note=""
				/>
				<Rule
					image="/images/rule06.png"
					text="各座席に決められた定員数を守ってください"
					note=""
				/>
			</div>
			<h2 className="font-bold text-xl">PC・機器貸出方法</h2>
			<h3>
				利用には<span className="text-[#d9ae4c]">学生証</span>
				が必要です！必ず持参してください
			</h3>
			<div className="m-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
				<Explain
					image="/images/lend01.jpg"
					title="PC（受付）"
					subtitle="受付での手続きが必要です。"
					link="https://www.aim.aoyama.ac.jp/rental/note-pc/"
					time={[
						"青山：受付での貸し出しサービスはありません",
						"相模原：9:45~16:30 (返却は16:45まで)",
					]}
					notes={[
						"当日返却、利用は学内のみでお願いします。",
						"電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。",
					]}
				/>
				<Explain
					image="/images/lend02.jpg"
					title="PC（ロッカー）"
					subtitle="受付を通さず、ロッカーに学生証をかざすだけで借りることができます。"
					link="https://www.aim.aoyama.ac.jp/rental/note-pc/"
					time={["相模原：9:45~16:30 (返却は16:45まで)", "青山：8:30~22:00"]}
					notes={[
						"当日返却、利用は学内のみでお願いします。",
						"電源を消すと自動的にデータが消去されるため、PC本体内にデータは保存できません。",
					]}
				/>
				<Explain
					image="/images/lend03.jpg"
					title="機材"
					subtitle="受付での手続きが必要です。利用後に、アンケートの記入にご協力お願いします"
					link="https://www.aim.aoyama.ac.jp/rental/production/"
					time={["9:45~16:30 (返却は16:45まで)"]}
					notes={[
						"一部機器は、B422教室内のみでの利用。",
						"翌営業日までの返却で、学外へ持ち出しが可能。",
						"詳しい貸出機器に関しては貸出機材一覧表をご確認ください.",
						"2週間先までの予約が可能です。",
					]}
				/>
				<Explain
					image="/images/lend04.jpg"
					title="静音 (相模原) ・編集ブース"
					subtitle="受付での手続きが必要です。"
					link="https://www.aim.aoyama.ac.jp/rental/production/"
					time={["9:45~16:30 (返却は16:45まで)"]}
					notes={[
						"2週間先までの予約が可能です。",
						"編集ブースのPCは、電源を消すと自動的にデータが消去され、PC本体内にデータは保存できません。",
					]}
				/>
			</div>
		</div>
	);
};

export default InstractionPage;
