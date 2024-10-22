// static/[postId]/page.tsx
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getInfoDetail, getInfoList } from "../../../../../libs/microcms";
import { format } from "date-fns";

export async function generateStaticParams() {
  const { contents } = await getInfoList();

  const paths = contents
    .filter((post) => post.id) // idが存在するもののみ
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
  if (typeof postId !== "string") {
    console.error("Invalid postId:", postId);
    notFound();
  }

  const post = await getInfoDetail(postId);

  if (!post) {
    console.error("Post not found:", postId);
    notFound();
  }

  return (
    <div className="bg-[#F0EBDC] text-black font-bold text-[20px] leading-10">
      <div className="max-w-full mx-[3%] my-[5%] py-[75px] pb-[30px]">
        {/* サイドの固定文字 */}
        <div
          id="side_line"
          className="fixed writing-mode-vertical-rl text-xs font-semibold tracking-wide"
        >
          <div className="left_side [writing-mode:vertical-rl] hidden lg:block fixed top-[280px] left-[7px] ml-1">
            <p className="font-lineSeed">AIM COMMONS</p>
          </div>
          <div className="right_side [writing-mode:vertical-rl] hidden lg:block fixed top-[280px] right-[7px] mr-1">
            <p className="font-lineSeed">AIM COMMONS</p>
          </div>
        </div>

        {/* タイトル部分 */}
        <div className="flex flex-col gap-4 mb-[3%] px-[13%]">
          <div className="text-base text-[#d9ae4c] text-center font-bold">
            NEWS
          </div>
          <div className="text-4xl text-black text-center font-semibold">
            お知らせ
          </div>
        </div>
        <div className="container mx-auto bg-white p-[8%] rounded-xl min-h-[60vh]">
          <h1 className="text-4xl mb-4">{post.title}</h1>
          <div className="flex justify-between mb-2">
            <div className="flex flex-wrap gap-2 text-sm text-white h-6">
              {post.tags.length > 0 ? (
                post.tags.map((tag) => (
                  <div
                    key={tag.title}
                    className="p-1 px-3 rounded-full h-fit w-fit bg-[#d9ae4c]"
                  >
                    {tag.title}
                  </div>
                ))
              ) : (
                <div className="w-full"></div> // タグがない場合でも高さを維持
              )}
            </div>
            <h2 className="text-right font-semibold text-gray-600">
              {format(post.createdAt, "yyyy.MM.dd")}
            </h2>
          </div>
          <hr className="border-gray-600 mb-[5%]" />
          <div className="prose mx-auto">{parse(post.body)}</div>
        </div>
      </div>
    </div>
  );
}
