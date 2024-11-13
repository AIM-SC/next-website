import type { ArticleType } from "@/types/microcms";
import { format } from "date-fns";
import Image from "next/image";
import Tag from "./tag";

export default function Card({ content }: { content: ArticleType }) {
  return (
    <div className="relative max-w-sm rounded-xl bg-[#F6F3EA] p-5 shadow hover:opacity-70">
      <Image
        src={content.thumbnail.url}
        className="h-[200px] rounded-md object-cover"
        alt={`News Image ${content.id}`}
        width={360}
        height={200}
      />
      <div className="pt-4">
        <h1 className="mb-2 line-clamp-2 h-[3rem] overflow-hidden font-semibold text-[1.3rem] leading-6">
          {content.title}
        </h1>
        <div className="mb-2 font-semibold text-gray-600 text-sm">
          {format(new Date(content.createdAt), "yyyy.MM.dd")}
        </div>
        <Tag tags={content.tags} variant="card" />
      </div>
    </div>
  );
}
