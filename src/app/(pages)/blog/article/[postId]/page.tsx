import { notFound } from "next/navigation";
import Article from "@/app/components/article";
import { getBlogDetail, getBlogList } from "@/libs/microcms";
import Heading from "@/app/components/heading";

export async function generateMetadata({
	params: { postId },
}: {
	params: { postId: string };
}) {
	const article = await getBlogDetail(postId);

	if (!article) {
		return {
			title: "業務ブログ",
			description: "AIM Commonsスタッフからの発信です",
		};
	}

	return {
		title: `${article.title}`,
		description: article.body,
	};
}

export async function generateStaticParams() {
	const { contents } = await getBlogList();

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
	const article = await getBlogDetail(postId);
	console.log(article)

	if (!article) {
		console.error("Post not found:", postId);
		notFound();
	}

	return (
		<div className="py-[75px] text-[20px] text-black leading-10">
			<Heading engTitle="BLOGS" jpTitle="業務ブログ" />
			<Article content={article} />
		</div>
	);
}
