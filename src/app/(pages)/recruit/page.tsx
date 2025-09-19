import Heading from "@/app/components/layout/heading/heading";
import JobIntroduction from "@/app/components/recruit/jobIntroduction";
import Link from "next/link";
import type { Metadata } from "next";
import JobTitle from "@/app/components/recruit/jobTitle";
import JobSection from "@/app/components/recruit/jobSection";
import HeaderCard from "@/app/components/layout/heading/headerCard";

export const metadata: Metadata = {
	title: "学生スタッフ採用",
	description: "AIM Commons 相模原の採用情報を紹介します",
};

const jobIntroductionPage = () => {
	const jobSections = [
		{
			id: "regular",
			title: "レギュラー業務",
			description: (
				<>
					全ての学生スタッフが担当する
					<span className="inline-block">基本的な業務です</span>
				</>
			),
			jobs: [
				{
					image: "/images/general/pc_rental.webp",
					title: "PC貸出",
					text: (
						<>
							<p>
								学生がキャンパス内の自由な場所でPCを利用できるように、B422窓口と自動貸出ロッカーでノートPCの貸出を行っています。
							</p>
							<p>
								学生スタッフは、返却されたPCのメンテナンスを担当しています。
							</p>
						</>
					),
				},
				{
					image: "/images/general/equipment.webp",
					title: "機器貸出",
					text: (
						<>
							<p>
								学生および教員の教育・研究活動を支援するために、4Kビデオカメラや動画編集設備等の機器や設備の貸出をB422窓口でしています。
							</p>
							<p>
								学生スタッフは、これらの使い方を習得して、利用者のニーズに沿った機器を提案・貸出を行っています。
							</p>
						</>
					),
				},
				{
					image: "/images/recruit/job-workshop.webp",
					title: "ワークショップ",
					text: (
						<>
							<p>
								Adobeの画像・動画編集ソフトや、一眼レフカメラなどを体験できるワークショップを毎日実施しています。
							</p>
							<p>
								学生スタッフは、受講者をサポートする講師として活躍しています。
							</p>
							<p>
								講師になるためのフォローアップも充実しているので、自分のスキルも高めるチャンスです！
							</p>
						</>
					),
				},
			],
		},
		{
			id: "project",
			title: "プロジェクト型業務",
			description: (
				<>
					自分の関心や得意分野を活かして
					<span className="inline-block">選択的に取り組む業務です</span>
					<br />
					兼任・新規立ち上げも可能です
				</>
			),
			jobs: [
				{
					image: "/images/recruit/job-commercial.webp",
					title: "広報活動",
					text: (
						<>
							<p>
								AIM
								Commonsを多くの人に知ってもらい、利用者を増やすための広報活動を行っています。
							</p>
							<p>
								学生スタッフは、ポスターや紹介パンフレット、プロムナードに設置される看板を制作しています。
							</p>
							<p>
								完成物はB棟周辺周辺や食堂など、多くの学生が目にする場所に掲示されています。
							</p>
						</>
					),
				},
				{
					image: "/images/recruit/job-video.webp",
					title: "動画制作",
					text: (
						<>
							<p>
								青山学院大学の学生に向けた、YouTube動画の制作を行っています。
							</p>
							<p>
								学生スタッフは、動画編集だけにとどまらず、企画、ナレーター、出演者としても活躍しています。
							</p>
							<p>
								アイデアを存分に発揮して、AIM Commons 相模原をPRしましょう！
							</p>
						</>
					),
				},
				{
					image: "/images/recruit/job-system.webp",
					title: "システム開発",
					text: (
						<>
							<p>
								業務で用いるシステムや当ウェブサイトの新規開発・保守を行っています。
							</p>
							<p>
								学生スタッフは、WEB開発を中心に、モダンな技術を積極的に取り入れた開発を行なっています。
							</p>
							<p>
								プログラミングはもちろん、チーム開発の経験を積みたいという人におすすめです！
							</p>
						</>
					),
				},
			],
		},
		{
			id: "management",
			title: "管理スタッフ業務",
			description: (
				<>
					学生スタッフをまとめる
					<span className="inline-block">管理スタッフが行う業務です</span>
				</>
			),
			jobs: [
				{
					image: "/images/recruit/job-admin.webp",
					title: "マネジメント業務",
					text: (
						<>
							<p>
								レギュラー業務およびプロジェクト型業務を取りまとめる中で、プロジェクトマネジメントを実践することができます。
							</p>
							<p>
								リーダーシップを身に付けたい方や、リーダーとしての経験をお持ちの方には、特に適した業務です。
							</p>
						</>
					),
				},
				{
					image: "/images/recruit/job-recruit.webp",
					title: "採用業務",
					text: (
						<>
							<p>AIM Commons 相模原で働く新たな仲間を見つける業務です。</p>
							<p>
								教員や他の管理スタッフと協力しながら、新人スタッフの選考に関わることができます。
							</p>
							<p>
								一般的なアルバイトではなかなかできない貴重な経験を積むことができます。
							</p>
						</>
					),
				},
			],
		},
	];

	return (
		<div className="py-[75px]">
			<Heading
				engTitle="RECRUIT"
				jpTitle="学生スタッフ採用"
				abst={
					<>
						AIM Commons 相模原で働く
						<span className="inline-block">学生スタッフの業務を紹介します</span>
					</>
				}
			/>
			<HeaderCard
				title={
					<>
						AIM Commons 相模原の
						<span className="inline-block">学生スタッフとは？</span>
					</>
				}
				engTitle="STUDENT STAFF"
				content={
					<>
						<p>
							AIM
							Commonsでは、一緒に楽しく働く学生スタッフを定期的に募集しています！
						</p>
						<p>
							受付・貸出業務をはじめ、ワークショップの講師、情報技術業務、広報活動などの様々なことに学生ならではの視点でチャレンジできるのが魅力です。
						</p>
						<p>
							「IT-A」とはまた違った AIM Commons 相模原
							ならではの仕事がたくさん！
						</p>
						<ul className="m-4 list-disc">
							<li>募集対象: 青山学院大学の学部生・大学院生</li>
							<li>募集時期: 前期・後期 各1回</li>
							<li>選考方法: 書類選考＋面接</li>
						</ul>
						<p>
							詳細は、募集時期に
							<Link
								href="/info"
								className="text-[#d9ae4c] underline hover:opacity-70"
							>
								このサイト
							</Link>
							および学生ポータルでお知らせします。
						</p>
						<p>一緒に楽しく業務に関わってみませんか？</p>
					</>
				}
			/>
			<div className="rounded-lg bg-white py-8 lg:py-12 xl:py-16">
				<div>
					<h3 className="mb-1 text-center font-bold text-2xl">業務紹介</h3>
					<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
						DUTIES
					</div>
				</div>
				<div className="my-8 flex flex-col gap-8 text-center">
					{jobSections.map((section) => (
						<div key={section.id} className="flex flex-col gap-8">
							<JobTitle
								title={section.title}
								discription={section.description}
							/>
							<JobSection
								contents={section.jobs.map((job) => (
									<JobIntroduction
										key={job.title}
										image={job.image}
										title={job.title}
										text={job.text}
									/>
								))}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default jobIntroductionPage;
