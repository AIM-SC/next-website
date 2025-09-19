import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SofaIconsProps = {
	sofaCount: number;
};

export function SofaIcons({ sofaCount }: SofaIconsProps) {
	return (
		<div className="flex gap-1">
			{[1, 2, 3, 4].map((index) => (
				<FontAwesomeIcon
					key={index}
					icon={faCouch}
					className={`size-4 ${
						sofaCount >= index ? "text-black" : "text-gray-400"
					}`}
				/>
			))}
		</div>
	);
}
