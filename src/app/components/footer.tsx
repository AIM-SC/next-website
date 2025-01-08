const footer = () => {
	return (
		<div>
			<div className="mt-6 flex justify-center gap-3 font-bold text-base">
				<a href="https://www.aoyama.ac.jp/" target="_blank" rel="noreferrer">
					青山学院大学公式サイト
					<span className="material-symbols-outlined mb-1 ml-1 align-middle">
						link
					</span>
				</a>
				<a
					href="https://www.aim.aoyama.ac.jp/faq/"
					target="_blank"
					rel="noreferrer"
				>
					よくある質問
					<span className="material-symbols-outlined mb-1 ml-1 align-middle">
						link
					</span>
				</a>
			</div>
			<div className="my-5 text-center text-gray-500 text-sm">
				&copy; 2024 AIM Commons
			</div>
		</div>
	);
};

export default footer;
