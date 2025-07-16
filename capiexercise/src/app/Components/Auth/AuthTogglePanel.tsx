import styles from './Auth.module.css';
import { ToggleButton } from "./ToggleButton";

interface Props {
    onToggle: (register: boolean) => void;
}

interface PanelProps {
    title: string;
    description: string;
    label: string;
    onClick: () => void;
    panelStyle: string;
}

const TogglePanel = ({ title, description, label, onClick, panelStyle }: PanelProps) => (
    <div className={`${styles["toggle-panel"]} ${panelStyle}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ToggleButton label={label} onClick={onClick} />
    </div>
);

export const AuthTogglePanel = ({ onToggle }: Props) => {
    return (
        <div className={styles["toggle-box"]}>
        <TogglePanel
            title="Bienvenido" 
            description="¿No tienes cuenta?" 
            label="Regístrate"
            onClick={() => onToggle(true)}
            panelStyle={styles["toggle-left"]}
        />
        <TogglePanel
            title="Volver"
            description="¿Ya tienes cuenta?"
            label="Iniciar sesión" 
            onClick={() => onToggle(false)}
            panelStyle={styles["toggle-right"]}
        />
        </div>
    );
};
