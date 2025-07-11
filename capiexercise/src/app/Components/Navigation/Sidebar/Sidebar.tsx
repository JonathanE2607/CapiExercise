import styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
    return (
        <aside className={styles.sidebarStatic}>
        <div className={styles.content}>
            <SidebarHeader />
            <SidebarNav />
        </div>
        </aside>
    );
};

export default Sidebar;
