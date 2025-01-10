import { notFound } from "next/navigation";
import Article from "@/app/components/article";
import { getBlogDetail, getBlogList } from "@/libs/microcms";

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

	if (!article) {
		console.error("Post not found:", postId);
		notFound();
	}

	return (
		<div className="text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-base">
					BLOG
				</div>
				<div className="text-center font-semibold text-4xl text-black">
					ブログ
				</div>
			</div>
			<Article content={article} />
		</div>
	);
}
