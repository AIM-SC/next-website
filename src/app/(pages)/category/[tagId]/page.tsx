import { redirect } from "next/navigation";

export default function Page({
	params: { tagId },
}: { params: { tagId: string } }) {
	redirect(`/category/${tagId}/1`);
}
