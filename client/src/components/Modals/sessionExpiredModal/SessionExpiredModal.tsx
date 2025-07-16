import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageModal } from "../messageModal/MessageModal";

const SessionExpiredModal = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [showModal, setShowModal] = useState(searchParams.get("sessionExpired") === "true");

	useEffect(() => {
		if (searchParams.has("sessionExpired")) {
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.delete("sessionExpired");
			setSearchParams(newSearchParams, { replace: true });
		}
	}, [searchParams, setSearchParams]);

	return (
		<MessageModal
			title="Inactivity detected"
			message="You have been automatically sent to the home page because you ware inactive for 5 minutes."
			isOpen={showModal}
			closeModal={() => setShowModal(false)}
		/>
	);
};

export { SessionExpiredModal };
