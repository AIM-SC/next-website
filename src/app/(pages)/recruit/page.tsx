import JobIntroduction from "@/app/components/jobIntroduction";
import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";

const jobIntroductionPage = () => {
	return (
		<div className="py-[75px] font-bold text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
					RECRUIT
				</div>
				<div className="text-center font-semibold text-2xl text-black md:text-4xl">
					学生スタッフ採用
				</div>
				<div className="text-center font-bold text-gray-600 text-sm md:text-lg">
					AIM Commonsで働く学生スタッフの業務を紹介します
				</div>
			</div>
			<div className="mx-[3%] my-8 flex flex-col items-center justify-center gap-12 rounded bg-white p-12 md:flex-row lg:gap-16 lg:p-16">
				<div className="w-full md:w-1/2">
					<Image
						src="/images/about.png"
						alt="AIMの説明画像"
						className="h-auto w-full rounded-md"
						width={500}
						height={300}
						layout="responsive"
						objectFit="cover"
					/>
				</div>
				<div className="w-full md:w-1/2">
					<Title
						maintitle="AIM Commonsの学生スタッフとは？"
						subtitle="STUDENT STAFF"
					/>
					<div className="flex flex-col gap-4 text-base">
						<p>
							AIM
							Commonsでは、受付・貸出業務をはじめとし、ワークショップの講師や情報技術業務、広報活動などのさまざまな業務を行う学生スタッフを、定期的に募集・採用しています。同じく情報メディアセンターの管轄である、「IT-A」とは異なる業務です。
						</p>
						<ul>
							<li>募集対象: 青山学院大学生および大学院生</li>
							<li>募集時期: 前期・後期 各1回</li>
							<li>選考方法: 書類選考後に面接を実施</li>
						</ul>
						<p>
							募集・採用に関する詳細は、募集時期に
							<Link
								href="/info"
								className="text-[#d9ae4c] underline hover:opacity-70"
							>
								このサイト
							</Link>
							および学生ポータルでお知らせします。
						</p>
					</div>
				</div>
			</div>
			<div className="mx-[3%] rounded-md bg-white pt-[3%]">
				<div>
					<h3 className="mb-1 text-center text-2xl">業務紹介</h3>
					<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
						JOB INTRODUCE
					</div>
				</div>
				<div className="grid grid-cols-1 gap-12 p-12 pb-[4%] lg:grid-cols-2 lg:gap-16 lg:p-16 xl:grid-cols-3">
					<JobIntroduction
						image="/images/pc_rental.jpg"
						title="PC貸出"
						text={
							<div className="indent-4">
								<div>
									AIM
									Commonsでは、学生がキャンパス内の自由な場所でPCを利用できるように、ノートPCを貸し出しています。また、返却されたPCの内容物の確認や充電のチェック等を実施します。
								</div>
								<div>
									PCは自動貸出ロッカーでも借りることができ、同様に返却物のメンテナンスを行います。
								</div>
							</div>
						}
					/>
					<JobIntroduction
						image="/images/IMG_0091.JPG"
						title="機器貸出"
						text={
							<div className="indent-4">
								<div>
									AIM
									Commonsでは、学生の発展的で能動的な学びを支援するほか、教員の教材作成や学生の課題制作をサポートするために、4Kビデオカメラ、動画編集設備、静かに作業できるスペース等の貸出サービスを提供しています。
								</div>
								<div>
									これらの機器の使い方を習得したのち、利用者のニーズに合った機器を提案し、貸出対応を行います。貸出機器一覧は
									<Link
										href="https://docs.google.com/spreadsheets/d/1pGRuvjajI833WFWqME8QbjGkraUQzgZ-Fp241Tbu7I8/edit?gid=0#gid=0"
										target="_blank"
										className="text-[#d9ae4c] underline hover:opacity-70"
									>
										こちら
									</Link>
									から。
								</div>
							</div>
						}
					/>
					<JobIntroduction
						image="/images/workshop01.jpg"
						title="ワークショップ"
						text={
							<div className="indent-4">
								<div>
									AIM
									Commonsでは、貸出サービスである機材やソフトウェアを気軽に体験できるワークショップを実施しています。現在ではAdobeの画像編集ソフト・動画編集ソフトや、一眼レフカメラのワークショップを開講しており、その講師は学生スタッフが務めます。
								</div>
								<div>
									ワークショップの詳細は
									<Link
										href="https://ima-sc.notion.site/7fd23df752674abb95261bdc54b3de28"
										target="_blank"
										className="text-[#d9ae4c] underline hover:opacity-70"
									>
										こちら
									</Link>
									から。
								</div>
							</div>
						}
					/>
					<JobIntroduction
						image="/images/job-PR.png"
						title="広報活動"
						text={
							<div className="indent-4">
								<div>
									AIM
									Commonsを多くの学生に知ってもらうため、ポスターや紹介パンフレット、プロムナードに設置される看板等を作成します。デザインやメッセージを工夫しながら、考えます。
								</div>
								<div>
									完成物は、AIM
									Commons周辺や食堂など、多くの学生が目にする場所に掲示されます。
								</div>
							</div>
						}
					/>
					<JobIntroduction
						image="/images/movieEdior.png"
						title="動画制作"
						text={
							<div className="indent-4">
								<div>
									広報活動の一環として、YouTube動画の制作を行います。動画編集だけにとどまらず、企画者、ナレーター、出演者としても活躍する機会があります。
								</div>
								<div>
									動画では、AIM
									Commonsで提供する便利なサービスや利用方法、情報メディアセンターに関連する最新情報を発信します。YouTubeチャンネルは
									<Link
										href="https://www.youtube.com/channel/UCPvxIswjXQ1VU2H3WyBss8w"
										target="_blank"
										className="text-[#d9ae4c] underline hover:opacity-70"
									>
										こちら
									</Link>
									から。
								</div>
							</div>
						}
					/>
					<JobIntroduction
						image="/images/job-systemDevelop.png"
						title="システム開発(相模原)"
						text={
							<div className="indent-4">
								<div>
									業務で用いる内製システムや当ウェブサイトの新規開発・保守を行います。WEB開発を中心に、最新の技術やツールを積極的に取り入れ、システムの性能を改善したり、技術力を向上させたりすることができます。
								</div>
								<div>
									開発時の工夫や具体的な取り組みについては、
									<Link
										href="/blog"
										className="text-[#d9ae4c] underline hover:opacity-70"
									>
										技術ブログ
									</Link>
									で詳しく紹介しています。
								</div>
							</div>
						}
					/>{" "}
					<JobIntroduction
						image="/images/job-systemDevelop.png"
						title="コンシェルジュ業務(青山)"
						text={
							<div className="indent-4">
								<div>ダミーテキスト</div>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default jobIntroductionPage;
