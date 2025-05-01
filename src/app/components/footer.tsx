import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const footer = () => {
	return (
		<div>
			<div className="mt-6 flex flex-col items-center justify-center gap-3 font-bold sm:flex-row">
				<Link
					href="https://www.aoyama.ac.jp/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1"
				>
					青山学院大学公式サイト
					<FontAwesomeIcon icon={faLink} className="size-5" />
				</Link>
				<Link
					href="https://www.aim.aoyama.ac.jp/faq/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1"
				>
					よくある質問
					<FontAwesomeIcon icon={faLink} className="size-5" />
				</Link>
				<Link
					href="https://www.aim.aoyama.ac.jp/customer_support/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1"
				>
					お問い合わせ
					<FontAwesomeIcon icon={faLink} className="size-5" />
				</Link>
			</div>
			<div className="text-center text-xs">
				<div className="mt-4">
					<span>
						本ウェブサイトはAIM Commons学生スタッフが
						<br className="md:hidden" />
						作成しました（太田・櫻井・西堀・ほか一名）。
					</span>
				</div>
				<div className="mt-2">
					万が一掲載内容に相違があった場合は、
					<br className="md:hidden" />
					<Link
						href="https://www.aim.aoyama.ac.jp/"
						target="_blank"
						className="text-blue-500 hover:opacity-70"
					>
						情報メディアセンター
					</Link>
					の案内を優先してください。
				</div>
			</div>
			<div className="my-5 text-center text-gray-500 text-sm">
				&copy; 2025 AIM Commons
			</div>
		</div>
	);
};

export default footer;
