import { notFound } from "next/navigation";
import Articlelist from "@/app/components/articlelist";
import { LIMIT } from "@/libs/constants";
import { getBlogList, getTagList } from "@/libs/microcms";
import Tag from "@/app/components/tag";

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
  const articlesListResponse = await getBlogList(initialQueries).catch(() => notFound());
  const { totalCount } = articlesListResponse;

  const maxPage = Math.ceil(totalCount / LIMIT);

  if (Number.isNaN(currentPage) || currentPage < 1 || currentPage > maxPage) {
    return notFound();
  }

  const articlesListQueries = {
    limit: LIMIT,
    offset: (currentPage - 1) * LIMIT,
  };

  const blogPageResponse = await getBlogList(articlesListQueries).catch(() => notFound());
  const tagListResponse = await getTagList().catch(() => notFound());
  const { contents } = blogPageResponse;
  const tagContents = tagListResponse.contents;

  if (!contents) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="bg-[#F0EBDC] font-bold text-[20px] text-black leading-10">
      <div className="mx-[3%] my-[5%] max-w-full py-[75px] pb-[30px]">
        <div
          id="side_line"
          className="writing-mode-vertical-rl fixed font-semibold text-xs tracking-wide"
        >
          <div className="left_side fixed top-[280px] left-[7px] ml-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
          <div className="right_side fixed top-[280px] right-[7px] mr-1 hidden [writing-mode:vertical-rl] lg:block">
            <p>AIM COMMONS</p>
          </div>
        </div>
        <div className="mb-[3%] flex flex-col gap-4 px-[13%]">
          <div className="text-center font-bold text-[#d9ae4c] text-base">
            BLOG
          </div>
          <div className="text-center font-semibold text-4xl text-black">
            ブログ
          </div>
          <div className="text-center font-bold text-gray-600 text-lg">
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
        <div className="mt-2 ml-4">
          <Tag tags={tagContents} variant="card" />
        </div>
      </div>
    </div>
  );
}
