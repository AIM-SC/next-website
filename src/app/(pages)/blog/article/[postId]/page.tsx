import { notFound } from "next/navigation";
import Article from "@/app/components/article";
import { getBlogDetail, getBlogList } from "@/libs/microcms";
import Heading from "@/app/components/heading";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateMetadata({
	params,
	searchParams,
}: {
	params: { postId: string };
	searchParams: { draftKey?: string };
}): Promise<Metadata> {
	console.log("Generating metadata for:", params);

	const blog = await getBlogDetail(params.postId);

	if (!blog) {
		return {
			title: "記事が見つかりません",
			description: "お探しの記事は存在しないか、削除された可能性があります。",
		};
	}

	const metadata: Metadata = {
		title: `${blog.title} | AIMCommons`,
		description: `${blog.title}に関する記事です`,
		openGraph: {
			title: `${blog.title} | AIMCommons`,
			description: `${blog.title}に関する記事です`,
			type: "article",
			url: `https://localhost:3000/blog/${params.postId}`,
			siteName: "AIMCommons",
			images: {
				url: "https://localhost:3000/images/logo_commons.jpeg",
				width: 1200,
				height: 630,
				alt: blog.title,
			},
		},
		twitter: {
			card: "summary_large_image",
			title: `${blog.title} | AIMCommons`,
			description: `${blog.title}に関する記事です`,
			site: "@AIMCommons",
			images: {
				url: "https://localhost:3000/images/logo_commons.jpeg",
				width: 1200,
				height: 630,
				alt: blog.title,
			},
		},
	};

	if (searchParams.draftKey) {
		metadata.robots = {
			index: false,
		};
	}

	console.log("Generated metadata:", metadata);
	return metadata;
}

export async function generateStaticParams() {
	const { contents } = await getBlogList();

	const paths = contents
		.filter((post) => post.id)
		.map((post) => ({
			postId: post.id.toString(),
		}));

	return paths;
}

export default async function StaticDetailPage({
	params: { postId },
	searchParams,
}: {
	params: { postId: string };
	searchParams: { draftKey?: string };
}) {
	const { isEnabled } = draftMode();
	const queries = searchParams.draftKey
		? { draftKey: searchParams.draftKey }
		: {};
	const article = await getBlogDetail(postId, queries);
	console.log(article);

	if (!article) {
		console.error("Post not found:", postId);
		notFound();
	}

	return (
		<>
			{(isEnabled || searchParams.draftKey) && (
				<>
					<div className="text-lg">
						プレビューモード中 - これは下書きのプレビューです
					</div>
					<Link href="/api/disable_draft?redirect=/blog/1">
						<Button>プレビューモードを解除</Button>
					</Link>
				</>
			)}
			<div className="py-[75px] text-[20px] text-black leading-10">
				<Heading engTitle="BLOGS" jpTitle="業務ブログ" />
				<Article content={article} />
			</div>
		</>
	);
}
