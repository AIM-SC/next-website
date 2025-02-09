import { notFound } from "next/navigation";
import Articlelist from "@/app/components/articlelist";
import { LIMIT } from "@/libs/constants";
import { getCategoryArticleList, getTagList } from "@/libs/microcms";
import Tag from "@/app/components/tag";

export async function generateMetadata({
	params: { tagId },
}: {
	params: { tagId: string };
}) {
	const tagListResponse = await getTagList();

	if (!tagListResponse) {
		return {
			title: "業務ブログ",
			description: "AIM Commonsスタッフからの発信です",
		};
	}

	const currentTag = tagListResponse.contents.find(
		(tag: { path: string }) => tag.path === tagId,
	);

	if (currentTag) {
		const tagName = currentTag.title;
		return {
			title: tagName,
			description: `${tagName}に関連する記事一覧です`,
		};
	}
}

export async function generateStaticParams() {
	const tagListResponse = await getTagList().catch((err) => {
		console.error("Error fetching tag list:", err);
		return null;
	});

	if (!tagListResponse) {
		console.error("Failed to fetch tag list for static params");
		return [];
	}

	const paths = [];
	const tagContents = tagListResponse.contents;

	for (const tag of tagContents) {
		const articlesListResponse = await getCategoryArticleList(tag.path).catch(
			(err) => {
				console.error(`Error fetching articles for tag ${tag.path}:`, err);
				return null;
			},
		);

		if (!articlesListResponse) {
			console.warn(`No articles found for tag ${tag.path}`);
			continue;
		}

		const { totalCount } = articlesListResponse;
		const totalPages = Math.ceil(totalCount / LIMIT);

		for (let page = 1; page <= totalPages; page++) {
			paths.push({ tagId: tag.path, pageId: page.toString() });
		}
	}

	console.log("Generated static paths:", paths);
	return paths;
}

export default async function CategoryArticleList({
	params,
}: {
	params: { tagId: string; pageId: string };
}) {
	console.log("Received params:", params); // params をログ出力
	const currentPage = Number.parseInt(params.pageId, 10);
	const tagPath = params.tagId;

	if (Number.isNaN(currentPage) || currentPage < 1) {
		console.error("Invalid pageId:", params.pageId);
		return notFound();
	}

	// クエリの設定
	const initialQueries = {
		limit: LIMIT,
		offset: (currentPage - 1) * LIMIT,
	};

	// 記事リスト取得
	const articlesListResponse = await getCategoryArticleList(
		tagPath,
		initialQueries,
	).catch((err) => {
		console.error("Error fetching category articles:", err);
		return null;
	});

	if (!articlesListResponse) {
		console.error("No articles found for tagPath:", tagPath);
		return notFound();
	}

	const { totalCount, contents } = articlesListResponse;
	console.log("Fetched articles:", { totalCount, contents });

	// 最大ページ数を計算
	const maxPage = Math.ceil(totalCount / LIMIT);
	if (currentPage > maxPage) {
		console.error("Page exceeds maxPage:", { currentPage, maxPage });
		return notFound();
	}

	// タグリスト取得
	const tagListResponse = await getTagList().catch((err) => {
		console.error("Error fetching tag list:", err);
		return null;
	});

	if (!tagListResponse) {
		console.error("Failed to fetch tag list");
		return notFound();
	}

	const tagContents = tagListResponse.contents;
	console.log("Fetched tags:", tagContents);

	const tag = tagContents.find((t) => t.path === tagPath);
	if (!tag) {
		console.error("Tag not found:", tagPath);
		return notFound();
	}

	const tagTitle = tag.title;

	if (!contents || contents.length === 0) {
		console.warn("No articles found for the given tag and page.");
		return (
			<div className="mt-10 text-center">
				<h1 className="font-bold text-2xl">記事が見つかりません</h1>
				<p>現在、このタグに関連する記事はありません。</p>
			</div>
		);
	}

	return (
		<div className="py-[75px] font-bold text-[20px] text-black leading-10">
			<div className="mb-[4vh] flex flex-col gap-2 px-[13%] md:gap-4">
				<div className="text-center font-bold text-[#d9ae4c] text-sm md:text-base">
					CATEGORY
				</div>
				<div className="text-center font-semibold text-2xl text-black md:text-4xl">
					{tagTitle}
					<span className="mg:text-xl text-lg">に関連する記事</span>
				</div>
			</div>
			<Articlelist
				contents={contents}
				basePath="category"
				currentPage={currentPage}
				totalCount={totalCount}
				tagId={tagPath}
			/>
			<hr className="mt-8 border-[#d9ae4c] border-[1px]" />
			<div className="mt-2 ml-2">タグから探す</div>
			<div className="mt-2 ml-4">
				<Tag tags={tagContents} variant="card" />
			</div>
		</div>
	);
}
