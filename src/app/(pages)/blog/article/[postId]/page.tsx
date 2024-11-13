import { notFound } from "next/navigation";
import Article from "@/app/components/article";
import { getBlogDetail, getBlogList } from "@/libs/microcms";

export async function generateStaticParams() {
  const { contents } = await getBlogList();

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
  const article = await getBlogDetail(postId);

  if (!article) {
    console.error("Post not found:", postId);
    notFound();
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
        </div>
        <Article content = {article}/>
      </div>
    </div>
  );
}
