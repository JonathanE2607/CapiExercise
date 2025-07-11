import styles from "./Sidebar.module.css";
const SidebarFooter = () => {
    return (
        <div className={styles.footerActions}>
            <button className={`${styles.btn} ${styles.logout}`}>
                <i className="bx bx-power-off bx-sm" />
                <span className={styles.footerText}>Cerrar sesión</span>
            </button>
        </div>
    );
};

export default SidebarFooter;

