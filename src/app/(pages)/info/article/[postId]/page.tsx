import { notFound } from "next/navigation";
import { getInfoDetail, getInfoList } from "../../../../../libs/microcms";
import Article from "@/app/components/article";
import Heading from "@/app/components/heading";

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
	console.log(article)

	if (!article) {
		console.error("Post not found:", postId);
		notFound();
	}

	return (
		<div className="py-[75px] text-[20px] text-black leading-10">
			<Heading engTitle="NEWS" jpTitle="お知らせ" />
			<Article content={article} />
		</div>
	);
}
