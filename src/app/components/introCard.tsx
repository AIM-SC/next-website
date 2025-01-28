import Image from "next/image";
import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type Props = {
	image: string;
	title: string;
	url?: string;
	time: string;
	text: React.ReactNode;
	accordionText?: React.ReactNode;
};

const introCard = ({ image, title, time, text, url, accordionText }: Props) => {
	return (
		<div className="mx-[8%] my-[8%] flex flex-col items-start bg-white p-4">
			<div className="relative mb-4 aspect-[16/9] w-full">
				<Image
					src={image}
					alt={title}
					fill
					className="mb-4 rounded object-cover"
				/>
			</div>

			<div className="mb-3 font-bold text-xl">{title}</div>

			<div className="mt-1 w-full rounded bg-muted p-2">
				<div className="text-base text-black">{time}</div>
			</div>
			<div className="mt-2 text-base">{text}</div>

			<Accordion type="multiple" className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>利用方法</AccordionTrigger>
					<AccordionContent>
						{url ? (
							<div className="text-base flex">
								利用方法は
								<Link
									target="_blank"
									href={url}
									className="text-blue-500 hover:opacity-70 flex items-center gap-1"
								>
									こちら
									<FontAwesomeIcon icon={faLink} className="size-5 text-black" />
								</Link>
								をご確認ください。
							</div>
						) : (
							<div className="text-base">利用に申請は必要ありません。</div>
						)}
					</AccordionContent>
				</AccordionItem>
				{accordionText && (
					<AccordionItem value="item-2">
						<AccordionTrigger>注意事項</AccordionTrigger>
						<AccordionContent>{accordionText}</AccordionContent>
					</AccordionItem>
				)}
			</Accordion>
		</div>
	);
};

export default introCard;
