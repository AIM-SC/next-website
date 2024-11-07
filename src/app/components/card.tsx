import { ArticleType } from "@/types/microcms";
import { format } from "date-fns";
import Image from "next/image";
import Tag from "./tag";

export default function Card({ content }: { content: ArticleType }) {
  return (
    <div className="bg-[#F6F3EA] rounded-xl relative max-w-sm p-5 shadow hover:opacity-70">
      <Image
        src={content.thumbnail.url}
        className="object-cover h-[200px] rounded-md"
        alt={`News Image ${content.id}`}
        width={360}
        height={200}
      />
      <div className="pt-4">
        <h1 className="font-semibold text-[1.3rem] line-clamp-2 leading-6 h-[3rem] overflow-hidden mb-2">
          {content.title}
        </h1>
        <div className="text-gray-600 text-sm font-semibold mb-2">
          {format(new Date(content.createdAt), "yyyy.MM.dd")}
        </div>
        <Tag tags={content.tags} variant="card" />
      </div>
    </div>
  );
}
