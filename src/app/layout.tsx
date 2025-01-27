import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: {
		template: "%s | AIM Commons",
		default: "AIM Commons | 青山学院大学情報メディアセンター",
	},
	description:
		"AIM Commonsとは、青山学院大学情報メデイアセンターに属している、ITに特化した学習用の施設及びそれに付帯するサービスの総称です。",
	keywords: [
		"青山学院大学",
		"青学",
		"ラーニングコモンズ",
		"ラーコモ",
		"AIM Commons",
		"パソコン",
		"勉強スペース",
		"学習室",
		"自習",
		"貸出",
		"ワークショップ",
		"YouTube",
		"採用",
		"お知らせ",
		"技術",
	],
	openGraph: {
		title: "AIM Commons | 青山学院大学情報メディアセンター",
		description:
			"AIM Commonsとは、青山学院大学情報メデイアセンターに属している、ITに特化した学習用の施設及びそれに付帯するサービスの総称です。",
		url: "https://commons.aim.aoyama.ac.jp",
		siteName: "AIM Commons | 青山学院大学情報メディアセンター",
		images: [
			{
				width: "200",
				height: "100",
				url: "https://commons.aim.aoyama.ac.jp/images/nav_logo.svg",
			},
		],
		locale: "jp",
		type: "article",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=link"
				/>
				<Header />
				<div className="bg-[#F0EBDC]">
					<div className="mx-[5vw] max-w-full pb-[30px]">
						<div
							id="side_line"
							className="writing-mode-vertical-rl fixed font-semibold text-xs tracking-wide"
						>
							<div className="left_side fixed top-[280px] left-[7px] ml-1 hidden [writing-mode:vertical-rl] lg:block">
								<p>AIM COMMONS</p>
							</div>
							<div className="right_side fixed top-[280px] right-[7px] mr-1 hidden [writing-mode:vertical-rl] lg:block">
								<p>AIM COMMONS</p>
							</div>
						</div>
						{children}
					</div>
				</div>
				<Footer />
			</body>
		</html>
	);
}
