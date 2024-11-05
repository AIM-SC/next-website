import { ArticleType } from "@/types/microcms";
import { format } from "date-fns";
import parse from "html-react-parser";
import Tag from "./tag";

export default function Article({ content }: { content: ArticleType }) {
  return (
    <div className="container mx-auto bg-white p-[8%] rounded-xl min-h-[60vh]">
      <h1 className="text-4xl mb-4">{content.title}</h1>
      <div className="flex justify-between mb-2">
        <Tag tags={content.tags} variant="article" />
        <h2 className="text-right font-semibold text-gray-600">
          {format(content.createdAt, "yyyy.MM.dd")}
        </h2>
      </div>
      <hr className="border-gray-600 mb-[5%]" />
      <div className="prose mx-auto">{parse(content.body)}</div>
    </div>
  );
}
