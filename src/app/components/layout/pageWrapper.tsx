interface PageWrapperProps {
	children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
	return <div className="py-[75px]">{children}</div>;
}
