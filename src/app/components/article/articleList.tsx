import type { ArticleType, ArticleWithSourceType } from "@/types/microcms";
import Link from "next/link";
import { Pagination } from "./pagination";
import ArticleCard from "./articleCard";

type ArticlelistProps = {
	contents: ArticleType[] | ArticleWithSourceType[];
	basePath: "info" | "blog" | "category";
	currentPage?: number;
	totalCount: number;
	tagId?: string;
};

export default function ArticleList({
	contents,
	basePath,
	currentPage,
	totalCount,
	tagId,
}: ArticlelistProps) {
	return (
		<div className="mx-auto rounded-lg bg-white 2lg:p-8 p-8 3xl:px-[4%] xs:px-[20%] md:p-8 lg:px-[8%]">
			<div className="grid 2lg:grid-cols-3 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{contents.map((content) => {
					let href = `/${basePath}/article/${content.id}`;

					if (basePath === "category" && "source" in content) {
						href = `/${content.source}/article/${content.id}`;
					}

					return (
						<Link key={content.id} href={href} className="mx-auto block w-fit">
							<ArticleCard content={content} />
						</Link>
					);
				})}
			</div>
			<Pagination
				totalCount={totalCount}
				currentPage={currentPage ?? 1}
				basePath={basePath}
				tagId={tagId}
			/>
		</div>
	);
}
