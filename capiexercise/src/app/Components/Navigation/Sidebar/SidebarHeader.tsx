import styles from "./Sidebar.module.css";
import Image from "next/image";

const SidebarHeader = () => {
    return (
        <div className={styles.header}>
        <span className={styles.logoText}>Ejemplo Capi</span>
        </div>
    );
};

export default SidebarHeader;

