import styles from "./Button.module.css";

type ButtonVariantType = "default" | "primary" | "secondary";

type ButtonProps = {
	onClick: () => void;
	label?: string;
	disabled?: boolean;
	variant?: ButtonVariantType;
	type?: HTMLButtonElement["type"];
};

const Button = ({
	label = "Default",
	onClick,
	variant = "default",
	disabled = false,
	type = "button",
}: ButtonProps) => {
	return (
		<button type={type} disabled={disabled} className={styles[variant]} onClick={onClick}>
			{label}
		</button>
	);
};

export { Button };
