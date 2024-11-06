import Link from "next/link";
import { LIMIT } from "../../libs/constants";

export const Pagination = ({
  totalCount,
  currentPage = 1,
  basePath,
}: {
  totalCount: number;
  currentPage: number;
  basePath: string;
}) => {
  const totalPages = Math.ceil(totalCount / LIMIT);

  return (
    <ul className="flex items-center justify-center space-x-4 mt-8">
      <li>
        {currentPage === 1 ? (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <span>最初へ</span>
          </div>
        ) : (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <Link href={`/${basePath}/1`}>最初へ</Link>
          </div>
        )}
      </li>
      <li>
        {currentPage === 1 ? (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <span>前へ</span>
          </div>
        ) : (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <Link href={`/${basePath}/${currentPage - 1}`}>前へ</Link>
          </div>
        )}
      </li>
      <li>
        <div className="">
          {currentPage} / {totalPages}
        </div>
      </li>
      <li>
        {currentPage === totalPages ? (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <span>次へ</span>
          </div>
        ) : (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <Link href={`/${basePath}/${currentPage + 1}`}>次へ</Link>
          </div>
        )}
      </li>
      <li>
        {currentPage === totalPages ? (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <span>最後へ</span>
          </div>
        ) : (
          <div className="p-2 px-3 bg-[#F6F3EA] rounded-md shadow text-lg hover:opacity-70">
            <Link href={`/${basePath}/${totalPages}`}>最後へ</Link>
          </div>
        )}
      </li>
    </ul>
  );
};
