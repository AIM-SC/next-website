import { notFound } from "next/navigation";
import { getInfoDetail, getInfoList } from "../../../../../libs/microcms";
import Article from "@/app/components/article";

export async function generateMetadata({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const article = await getInfoDetail(postId);

	if (!article) {
		return {
			title: "お知らせ",
			description: "AIM Commonsからのお知らせ一覧です",
		};
	}

	return {
		title: `${article.title}`,
		description: article.body,
	};
}

export async function generateStaticParams() {
	const { contents } = await getInfoList();

	const paths = contents
		.filter((post) => post.id)
		.map((post) => ({
			postId: post.id.toString(),
		}));

	return paths;
}

export default async function StaticDetailPage({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const article = await getInfoDetail(postId);

	if (!article) {
		console.error("Post not found:", postId);
		notFound();
	}

	return (
		<div className="py-[75px] text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="mb-[4vh] flex flex-col gap-2 px-[13%] md:gap-4">
					<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
						NEWS
					</div>
					<div className="text-center font-semibold text-2xl text-black md:text-4xl">
						お知らせ
					</div>
				</div>
			</div>
			<Article content={article} />
		</div>
	);
}
