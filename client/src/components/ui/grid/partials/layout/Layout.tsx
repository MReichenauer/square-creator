import type { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
	return <div className={styles.gridLayout}>{children}</div>;
};

export { Layout };
