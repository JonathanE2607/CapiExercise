import styles from "./Sidebar.module.css";
import SidebarNavItem from "./SidebarNavItem";

const SidebarNav = () => {
return (
    <ul className={styles.navList}>
        <li>
            <SidebarNavItem icon="bxs-dashboard" label="Dashboard" />
        </li>
        <li>
            <SidebarNavItem icon="bx-calendar" label="Calendario" />
        </li>
        <li>
            <SidebarNavItem icon="bx-chat" label="Mensajes" />
        </li>
        <li>
            <SidebarNavItem icon="bx-pie-chart-alt-2" label="Estadísticas" />
        </li>
        <li>
            <SidebarNavItem icon="bx-cog" label="Configuración" />
        </li>
        <li>
            <SidebarNavItem icon="bx-log-out" label="Salir"/>
        </li>

    </ul>
    );
}

export default SidebarNav;
