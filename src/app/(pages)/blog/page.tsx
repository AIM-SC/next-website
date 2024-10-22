import Image from "next/image";
import { getBlogList } from "../../../../libs/microcms";
import { format } from "date-fns";
import Link from "next/link";

export default async function Blog() {
  const { contents } = await getBlogList();
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
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
            BLOG
          </div>
          <div className="text-4xl text-black text-center font-semibold">
            ブログ
          </div>
          <div className="text-lg text-gray-600 text-center font-bold">
            AIM Commonsスタッフからの発信一覧
          </div>
        </div>

        {/* ニュースカード部分 */}
        <div className="container mx-auto bg-white p-8 rounded-xl min-h-[60vh] shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {contents.map((post) => (
              <Link
                key={post.id} // Add a unique key prop here
                href={`/blog/${post.id}`}
                className="block relative w-fit h-fit mx-auto"
              >
                <div className="card bg-[#F6F3EA] rounded-xl relative max-w-sm p-5 shadow hover:opacity-70">
                  <Image
                    src={`${post.thumbnail.url}`}
                    className="w-[360px] h-[200px] object-cover rounded-md"
                    alt={`News Image ${post.id}`}
                    width={300}
                    height={200}
                  />
                  <div className="pt-4">
                    <h1 className="font-semibold text-[1.3rem] line-clamp-2 leading-6 h-[3rem] overflow-hidden mb-2">
                      {post.title}
                    </h1>
                    <div className="text-gray-600 text-sm font-semibold mb-2">
                      {format(post.createdAt, "yyyy.MM.dd")}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-white h-6">
                      {post.tags.length > 0 ? (
                        post.tags.map((tag) => (
                          <div
                            key={tag.title}
                            className="p-1 px-3 rounded-full h-fit w-fit bg-[#d9ae4c] shadow-sm"
                          >
                            {tag.title}
                          </div>
                        ))
                      ) : (
                        <div className="w-full"></div> // タグがない場合でも高さを維持
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
