import { UserCountLayout } from "./userCountLayout";
import { UserCount } from "./UserCount";
import { CongestionStatus } from "./CongestionStatus";
import { getUserDisplayData } from "./hooks";

export default async function UserDisplay() {
	const { total, note, congestion, sofaCongestion, icon, sofaCount } =
		await getUserDisplayData();

	return (
		<UserCountLayout note={note}>
			<UserCount total={total} />
			<div className="flex items-center gap-2">
				{total !== "---" && (
					<CongestionStatus
						icon={icon}
						sofaCount={sofaCount}
						congestion={congestion}
						sofaCongestion={sofaCongestion}
					/>
				)}
			</div>
		</UserCountLayout>
	);
}
