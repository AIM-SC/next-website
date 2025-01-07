import { notFound } from "next/navigation";
import { getInfoDetail, getInfoList } from "../../../../../libs/microcms";
import Article from "@/app/components/article";

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
		<div className="font-bold text-[20px] text-black leading-10">
			<div className="mb-[3%] flex flex-col gap-4 px-[13%]">
				<div className="text-center font-bold text-[#d9ae4c] text-base">
					NEWS
				</div>
				<div className="text-center font-semibold text-4xl text-black">
					お知らせ
				</div>
			</div>
			<Article content={article} />
		</div>
	);
}
