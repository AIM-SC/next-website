import { TagType } from "@/types/microcms";
  
  export default function Tag({ tags, variant }: {tags: TagType[], variant: "card" | "article"}) {
    const tagClass = variant === "card"
      ? "p-1 px-3 rounded-full h-fit w-fit bg-[#d9ae4c] shadow-sm"
      : "p-1 px-3 rounded-full h-fit w-fit bg-[#d9ae4c]";
  
    return (
      <div className="flex flex-wrap gap-2 text-xs text-white h-6">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <div key={tag.title} className={tagClass}>
              {tag.title}
            </div>
          ))
        ) : (
          <div className="w-full"></div>
        )}
      </div>
    );
  }
  