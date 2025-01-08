import Link from "next/link";
import { LIMIT } from "@/libs/constants";

export const Pagination = ({
	totalCount,
	currentPage = 1,
	basePath,
	tagId,
}: {
	totalCount: number;
	currentPage: number;
	basePath: string;
	tagId?: string;
}) => {
	const totalPages = Math.ceil(totalCount / LIMIT);

	const createHref = (page: number) =>
		basePath === "category" && tagId
			? `/${basePath}/${tagId}/${page}`
			: `/${basePath}/${page}`;

	const isDisabled = (condition: boolean) =>
		condition ? "opacity-50 pointer-events-none" : "";

	return (
		<ul className="mt-8 flex items-center justify-center space-x-4">
			<li>
				<Link
					href={createHref(1)}
					className={`rounded-md bg-[#F6F3EA] p-2 px-3 text-lg shadow hover:opacity-70 ${isDisabled(
						currentPage === 1,
					)}`}
				>
					最初へ
				</Link>
			</li>
			<li>
				<Link
					href={createHref(currentPage - 1)}
					className={`rounded-md bg-[#F6F3EA] p-2 px-3 text-lg shadow hover:opacity-70 ${isDisabled(
						currentPage === 1,
					)}`}
				>
					前へ
				</Link>
			</li>
			<li>
				<span className="rounded-md bg-[#F6F3EA] p-2 px-3 text-lg shadow">
					{currentPage} / {totalPages}
				</span>
			</li>
			<li>
				<Link
					href={createHref(currentPage + 1)}
					className={`rounded-md bg-[#F6F3EA] p-2 px-3 text-lg shadow hover:opacity-70 ${isDisabled(
						currentPage === totalPages,
					)}`}
				>
					次へ
				</Link>
			</li>
			<li>
				<Link
					href={createHref(totalPages)}
					className={`rounded-md bg-[#F6F3EA] p-2 px-3 text-lg shadow hover:opacity-70 ${isDisabled(
						currentPage === totalPages,
					)}`}
				>
					最後へ
				</Link>
			</li>
		</ul>
	);
};
