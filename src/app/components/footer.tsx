import Link from "next/link";

const footer = () => {
	return (
		<div>
			<div className="mt-6 flex justify-center gap-3 font-bold text-base">
				<Link href="https://www.aoyama.ac.jp/" target="_blank" rel="noreferrer">
					青山学院大学公式サイト
					<span className="material-symbols-outlined mb-1 ml-1 align-middle">
						link
					</span>
				</Link>
				<Link
					href="https://www.aim.aoyama.ac.jp/faq/"
					target="_blank"
					rel="noreferrer"
				>
					よくある質問
					<span className="material-symbols-outlined mb-1 ml-1 align-middle">
						link
					</span>
				</Link>
				<Link
					href="https://www.aim.aoyama.ac.jp/customer_support/"
					target="_blank"
					rel="noreferrer"
				>
					お問い合わせ
					<span className="material-symbols-outlined mb-1 ml-1 align-middle">
						link
					</span>
				</Link>
			</div>
			<div className="my-5 text-center text-gray-500 text-sm">
				&copy; 2025 AIM Commons
			</div>
		</div>
	);
};

export default footer;
