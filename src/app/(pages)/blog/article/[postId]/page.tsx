import { notFound } from "next/navigation";
import { getBlogDetail, getBlogList } from "../../../../../../libs/microcms";
import Article from "@/app/components/article";

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
            BLOG
          </div>
          <div className="text-4xl text-black text-center font-semibold">
            ブログ
          </div>
        </div>
        <Article content = {article}/>
      </div>
    </div>
  );
}
