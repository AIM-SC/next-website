import type { ArticleType } from "@/types/microcms";
import Link from "next/link";
import Card from "./card";
import { Pagination } from "./pagination";

export default function Articlelist({
  contents,
  basePath,
  currentPage,
  totalCount,
}: {
  contents: ArticleType[];
  basePath: "info" | "blog";
  currentPage?: number;
  totalCount: number;
}) {
  return (
    <div className="container mx-auto min-h-[60vh] rounded-xl bg-white p-8 shadow-md">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contents.map((content) => (
          <Link
            key={content.id}
            href={`/${basePath}/article/${content.id}`}
            className="relative mx-auto block h-fit w-fit"
          >
            <Card content={content} />
          </Link>
        ))}
      </div>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage ?? 1}
        basePath={basePath}
      />
    </div>
  );
}
