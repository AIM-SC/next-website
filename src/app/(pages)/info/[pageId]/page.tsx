import { notFound } from "next/navigation";
import Articlelist from "@/app/components/articlelist";
import { LIMIT } from "../../../../libs/constants";
import { getInfoList } from "../../../../libs/microcms";

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
  const currentPage = parseInt(params.pageId, 10);

  const initialQueries = { limit: LIMIT, fields: "id" };
  const articlesListResponse = await getInfoList(initialQueries).catch(() => notFound());
  const { totalCount } = articlesListResponse;

  const maxPage = Math.ceil(totalCount / LIMIT);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > maxPage) {
    return notFound();
  }

  const articlesListQueries = {
    limit: LIMIT,
    offset: (currentPage - 1) * LIMIT,
  };

  const articlePageResponse = await getInfoList(articlesListQueries).catch(() => notFound());
  const { contents } = articlePageResponse;

  if (!contents) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="bg-[#F0EBDC] text-black font-bold text-[20px] leading-10">
      <div className="max-w-full mx-[3%] my-[5%] py-[75px] pb-[30px]">
        <div
          id="side_line"
          className="fixed writing-mode-vertical-rl text-xs font-semibold tracking-wide"
        >
          <div className="left_side [writing-mode:vertical-rl] hidden lg:block fixed top-[280px] left-[7px] ml-1">
            <p>AIM COMMONS</p>
          </div>
          <div className="right_side [writing-mode:vertical-rl] hidden lg:block fixed top-[280px] right-[7px] mr-1">
            <p>AIM COMMONS</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-[3%] px-[13%]">
          <div className="text-base text-[#d9ae4c] text-center font-bold">
            NEWS
          </div>
          <div className="text-4xl text-black text-center font-semibold">
            お知らせ
          </div>
          <div className="text-lg text-gray-600 text-center font-bold">
            AIM Commonsからのお知らせ一覧
          </div>
        </div>
        <Articlelist
          contents={contents}
          basePath="info"
          currentPage={currentPage}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
}
