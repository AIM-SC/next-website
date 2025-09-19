import type { TotalCount } from "./types";

type UserCountProps = {
	total: TotalCount;
};

export function UserCount({ total }: UserCountProps) {
	return (
		<div className="flex items-baseline justify-center">
			<span className="font-bold text-4xl">
				{total === undefined ? "—--" : total}
			</span>
			<span className="text-lg">人</span>
		</div>
	);
}
