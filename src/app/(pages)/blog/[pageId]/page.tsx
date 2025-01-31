import { notFound } from "next/navigation";
import Articlelist from "@/app/components/articlelist";
import { LIMIT } from "@/libs/constants";
import { getBlogList, getTagList } from "@/libs/microcms";
import Tag from "@/app/components/tag";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ブログ",
	description: "AIM Commonsスタッフからの発信です",
};

export async function generateStaticParams() {
	const queries = { limit: LIMIT, fields: "id" };
	const articlesListResponse = await getBlogList(queries);
	const { totalCount } = articlesListResponse;

	const range = (start: number, end: number) =>
		Array.from({ length: end - start + 1 }, (_, i) => start + i);

	const paths = range(1, Math.ceil(totalCount / LIMIT)).map((page) => ({
		current: page.toString(),
	}));

	return [...paths];
}

export default async function Blog({ params }: { params: { pageId: string } }) {
	const currentPage = Number.parseInt(params.pageId, 10);

	const initialQueries = { limit: LIMIT, fields: "id" };
	const articlesListResponse = await getBlogList(initialQueries).catch(() =>
		notFound(),
	);
	const { totalCount } = articlesListResponse;

	const maxPage = Math.ceil(totalCount / LIMIT);

	if (Number.isNaN(currentPage) || currentPage < 1 || currentPage > maxPage) {
		return notFound();
	}

	const articlesListQueries = {
		limit: LIMIT,
		offset: (currentPage - 1) * LIMIT,
	};

	const blogPageResponse = await getBlogList(articlesListQueries).catch(() =>
		notFound(),
	);
	const tagListResponse = await getTagList().catch(() => notFound());
	const { contents } = blogPageResponse;
	const tagContents = tagListResponse.contents;

	if (!contents) {
		return <h1>No contents</h1>;
	}

	return (
		<div className="py-[75px] font-bold text-[20px] text-black leading-10">
			<div className="mb-[4vh] flex flex-col gap-2 px-[13%] md:gap-4">
				<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
					BLOG
				</div>
				<div className="text-center font-semibold text-2xl text-black md:text-4xl">
					ブログ
				</div>
				<div className="text-center font-bold text-gray-600 text-sm md:text-lg">
					AIM Commonsスタッフからの発信
				</div>
			</div>
			<Articlelist
				contents={contents}
				basePath="blog"
				currentPage={currentPage}
				totalCount={totalCount}
			/>
			<hr className="mt-8 border-[#d9ae4c] border-[1px]" />
			<div className="mt-2 ml-2">タグから探す</div>
			<div className="mt-2 mb-6 ml-4">
				<Tag tags={tagContents} variant="card" />
			</div>
		</div>
	);
}
