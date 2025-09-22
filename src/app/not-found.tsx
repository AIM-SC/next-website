import PageWrapper from "./components/layout/pageWrapper";

export default function Notfound() {
	return (
		<PageWrapper>
			<h1 className="mb-2 font-bold text-xl md:text-2xl">
				ページが見つかりません
			</h1>
			<p className="text-sm md:text-base">現在、このページはありません。</p>
		</PageWrapper>
	);
}
