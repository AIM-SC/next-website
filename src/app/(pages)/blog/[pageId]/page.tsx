import ArticleList from "@/app/components/article/articleList";
import { LIMIT } from "@/libs/constants";
import { getBlogList, getTagList } from "@/libs/microcms";
import type { Metadata } from "next";
import Heading from "@/app/components/layout/heading/heading";
import Taglist from "@/app/components/article/tagList";
import PageWrapper from "@/app/components/layout/pageWrapper";

export const metadata: Metadata = {
	title: "業務ブログ",
	description: "AIM Commons 相模原スタッフからの発信です",
	openGraph: {
		title: "業務ブログ",
		description: "AIM Commons 相模原スタッフからの発信です",
	},
	twitter: {
		title: "業務ブログ",
		description: "AIM Commons 相模原スタッフからの発信です",
	},
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
	const articlesListResponse = await getBlogList(initialQueries);
	const { totalCount } = articlesListResponse;

	const maxPage = Math.ceil(totalCount / LIMIT);

	const articlesListQueries = {
		limit: LIMIT,
		offset: (currentPage - 1) * LIMIT,
	};

	const blogPageResponse = await getBlogList(articlesListQueries);
	const tagContents = await getTagList();
	const { contents } = blogPageResponse;

	if (Number.isNaN(currentPage) || currentPage < 1 || currentPage > maxPage) {
		return (
			<PageWrapper>
				<Heading engTitle="BLOGS" jpTitle="業務ブログ" />
				<h1 className="mb-2 font-bold text-xl md:text-2xl">
					記事が見つかりません
				</h1>
				<p className="text-sm md:text-base">
					現在、このページに記事はありません。
				</p>
				<Taglist tagContents={tagContents} />
			</PageWrapper>
		);
	}

	return (
		<PageWrapper>
			<Heading
				engTitle="BLOGS"
				jpTitle="業務ブログ"
				abst="AIM Commons 相模原スタッフからの発信"
			/>
			<ArticleList
				contents={contents}
				basePath="blog"
				currentPage={currentPage}
				totalCount={totalCount}
			/>
			<Taglist tagContents={tagContents} />
		</PageWrapper>
	);
}
