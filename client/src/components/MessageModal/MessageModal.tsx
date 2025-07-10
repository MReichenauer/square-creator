import { useEffect, useRef } from "react";
import styles from "./MessageModal.module.css";
import Button from "@components/ui/button/Button";

type MessageModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	title: string;
	message: string;
};
const MessageModal = ({ isOpen, closeModal, title, message }: MessageModalProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen && ref.current) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [isOpen]);

	return (
		<dialog className={styles.modal} ref={ref} onCancel={closeModal}>
			<h2>{title}</h2>
			<p>{message}</p>
			<Button variant="primary" label="Close modal" onClick={closeModal} />
		</dialog>
	);
};

export { MessageModal };
