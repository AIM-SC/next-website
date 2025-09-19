import { CongestionIcons } from "./CongestionIcons";
import { SofaIcons } from "./SofaIcons";
import type { CongestionLevel, SofaCongestion } from "./types";

type CongestionStatusProps = {
	icon: number;
	sofaCount: number;
	congestion: CongestionLevel | "";
	sofaCongestion: SofaCongestion | "";
};

export function CongestionStatus({
	icon,
	sofaCount,
	congestion,
	sofaCongestion,
}: CongestionStatusProps) {
	return (
		<div className="flex items-center gap-2">
			<div className="flex flex-col gap-2">
				<CongestionIcons icon={icon} />
				<SofaIcons sofaCount={sofaCount} />
			</div>
			<div className="text-left">
				<p>利用者{congestion}</p>
				<p>ソファ{sofaCongestion}</p>
			</div>
		</div>
	);
}
