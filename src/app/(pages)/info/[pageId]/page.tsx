import { notFound } from "next/navigation";
import Articlelist from "@/app/components/articlelist";
import { LIMIT } from "@/libs/constants";
import { getInfoList, getTagList } from "@/libs/microcms";
import Tag from "@/app/components/tag";

export async function generateStaticParams() {
	const queries = { limit: LIMIT, fields: "id" };
	const articlesListResponse = await getInfoList(queries);
	const { totalCount } = articlesListResponse;

	const range = (start: number, end: number) =>
		Array.from({ length: end - start + 1 }, (_, i) => start + i);

	const paths = range(1, Math.ceil(totalCount / LIMIT)).map((page) => ({
		current: page.toString(),
	}));

	return [...paths];
}

export default async function Info({ params }: { params: { pageId: string } }) {
	const currentPage = Number.parseInt(params.pageId, 10);

	const initialQueries = { limit: LIMIT, fields: "id" };
	const articlesListResponse = await getInfoList(initialQueries).catch(() =>
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

	const articlePageResponse = await getInfoList(articlesListQueries).catch(() =>
		notFound(),
	);
	const tagListResponse = await getTagList().catch(() => notFound());
	const { contents } = articlePageResponse;
	const tagContents = tagListResponse.contents;

	if (!contents) {
		return <h1>No contents</h1>;
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
				<div className="text-center font-bold text-gray-600 text-lg">
					AIM Commonsからのお知らせ一覧
				</div>
			</div>
			<Articlelist
				contents={contents}
				basePath="info"
				currentPage={currentPage}
				totalCount={totalCount}
			/>
			<hr className="mt-8 border-[#d9ae4c] border-[1px]" />
			<div className="mt-2 ml-2">タグから探す</div>
			<div className="mt-2 ml-4">
				<Tag tags={tagContents} variant="card" />
			</div>
		</div>
	);
}
