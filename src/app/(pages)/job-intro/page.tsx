import JobIntroduction from "@/app/components/jobIntroduction";

const jobIntroductionPage = () => {
	return (
		<div className="font-bold text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-base">
					JOB INTRODUCTION
				</div>
				<div className="text-center font-semibold text-4xl text-black">
					業務紹介
				</div>
				<div className="text-center font-bold text-gray-600 text-lg">
					受付で常駐している学生スタッフの業務をご紹介します
				</div>
			</div>
			<div className="mx-[3%] mt-[1%] grid grid-cols-1 gap-4 rounded-md bg-white sm:grid-cols-2 lg:grid-cols-3">
				<JobIntroduction
					image="/images/IMG_0091.JPG"
					alt="test"
					title="PC貸出"
					text={
						<>
							ICTを用いた学びを支援するカメラや充電器、ブースの貸出を行います。
							貸出機器の一覧は
							<a
								href="https://www.google.co.jp/"
								target="_blank"
								rel="noreferrer"
								className="text-blue-500 underline"
							>
								こちら
							</a>
							。
						</>
					}
				/>
				<JobIntroduction
					image="/images/floor01.jpg"
					alt="test"
					title="機器貸出"
					text={
						<>
							ICTを用いた学びを支援するカメラや充電器、ブースの貸出を行います。
							貸出機器の一覧は
							<a
								href="https://www.google.co.jp/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								こちら
							</a>
							。
						</>
					}
				/>
				<JobIntroduction
					image="/images/floor01.jpg"
					alt="test"
					title="test"
					text={
						<>
							ICTを用いた学びを支援するカメラや充電器、ブースの貸出を行います。
							貸出機器の一覧は
							<a
								href="https://www.google.co.jp/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								こちら
							</a>
							。
						</>
					}
				/>
				<JobIntroduction
					image="/images/floor01.jpg"
					alt="test"
					title="test"
					text={
						<>
							ICTを用いた学びを支援するカメラや充電器、ブースの貸出を行います。
							貸出機器の一覧は
							<a
								href="https://www.google.co.jp/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								こちら
							</a>
							。
						</>
					}
				/>
			</div>
		</div>
	);
};

export default jobIntroductionPage;
