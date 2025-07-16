import styles from './Auth.module.css';
import { SocialButton } from "./SocialButton";

interface Props {
    context: "Inicia" | "Registrate";
}

const providers = [
    { name: "Google", icon: "bx bxl-google" },
    { name: "GitHub", icon: "bx bxl-github" },
    { name: "LinkedIn", icon: "bx bxl-linkedin" },
    { name: "Back", icon: "bx bx-arrow-back" },
];

export const SocialAuthButtons = ({ context }: Props) => {
    const text = context === "Inicia" ? "Inicia sesión con" : "Regístrate con";

    return (
        <>
        <p>{text} las siguientes plataformas:</p> 
        <div className={styles["social-icons"]}>
            {providers.map(({ name, icon }) => (
            <SocialButton key={name} provider={name} iconClass={icon} context={context} />
            ))}
        </div>
        </>
    );
};
