import styles from './Auth.module.css';
import { RegisterFormFields } from "./RegisterFormFields";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { useRegisterForm } from "../../hooks/useRegisterForm";

export const RegisterFormContainer = () => {
    const { data, handleInputChange, handleFormSubmit } = useRegisterForm();

    return (
        <section className={`${styles["form-box"]} ${styles.register}`} aria-labelledby="register-title">
        <form aria-label="Register form" role="form" onSubmit={handleFormSubmit}>
          <h1 id="register-title">Registrarse</h1> 
          <RegisterFormFields data={data} onChange={handleInputChange} />
          <button type="submit" className={styles.btn}>Registrarse</button>
          <SocialAuthButtons context="Registrate" />
        </form>
        </section>
    );
};

