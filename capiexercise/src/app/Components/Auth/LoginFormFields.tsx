import { InputBox } from "./InputBox";

interface Props {
    data: {
        email: string;
        password: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginFormFields = ({ data, onChange }: Props) => {
    return (
        <>
        <InputBox
            type="email"
            id="email"
            label="Correo electrónico"  
            iconClass="bx bxs-user"
            value={data.email}
            onChange={onChange}
            placeholder="Ingresa tu correo electrónico"
        />

        <InputBox
            type="password"
            id="password"
            label="Contraseña" 
            iconClass="bx bxs-lock"
            value={data.password}
            onChange={onChange}
            placeholder="Ingresa tu contraseña" 
        />
        </>
    );
};
