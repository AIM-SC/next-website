import type { ArticleType, ArticleWithSourceType } from "@/types/microcms";
import Link from "next/link";
import Card from "./card";
import { Pagination } from "./pagination";

type ArticlelistProps = {
  contents: ArticleType[] | ArticleWithSourceType[];
  basePath: "info" | "blog" | "category";
  currentPage?: number;
  totalCount: number;
  tagId?: string;
};

export default function Articlelist({
  contents,
  basePath,
  currentPage,
  totalCount,
  tagId,
}: ArticlelistProps) {
  return (
    <div className="container mx-auto min-h-[60vh] rounded-xl bg-white p-8 shadow-md">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contents.map((content) => {
          let href = `/${basePath}/article/${content.id}`;

          if (basePath === "category" && "source" in content) {
            href = `/${content.source}/article/${content.id}`;
          }

          return (
            <Link
              key={content.id}
              href={href}
              className="relative mx-auto block h-fit w-fit"
            >
              <Card content={content} />
            </Link>
          );
        })}
      </div>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage ?? 1}
        basePath={basePath}
        tagId={tagId} // 追加
      />
    </div>
  );
}
