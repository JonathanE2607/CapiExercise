import styles from "./Sidebar.module.css";

type Props = {
    icon: string;
    label: string;
};

const SidebarNavItem: React.FC<Props> = ({ icon, label }) => {
    return (
        <div className={styles.navItem}>
        <i className={`bx ${icon} bx-sm`} />
        <span className={styles.navText}>{label}</span>
        </div>
    );
};

export default SidebarNavItem;

