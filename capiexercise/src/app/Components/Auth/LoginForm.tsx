import styles from './Auth.module.css';
import { LoginFormFields } from "./LoginFormFields";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { useLoginForm } from "../../hooks/useLoginForm";

export const LoginFormContainer = () => {
    const { data, handleInputChange, handleFormSubmit } = useLoginForm();

    return (
        <section className={`${styles["form-box"]} ${styles.login}`} aria-labelledby="login-title">
            <form aria-label="Login form" role="form" onSubmit={handleFormSubmit}>
                <h1 id="login-title">Inicia sesión</h1>
                <LoginFormFields data={data} onChange={handleInputChange} /> 
                <button type="submit" className={styles.btn}>
                    Inicia sesión
                </button>
                <SocialAuthButtons context="Inicia" />
            </form>
        </section>
    );
};
