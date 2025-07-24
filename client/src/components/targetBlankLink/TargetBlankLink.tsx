type TargetBlankLinkProps = {
	href: string;
	label: string;
};
const TargetBlankLink = ({ href, label }: TargetBlankLinkProps) => {
	return (
		<a target="_blank" href={href}>
			{label}
			<span className="screenReaderOnly">Open in new tab</span>
		</a>
	);
};

export { TargetBlankLink };
