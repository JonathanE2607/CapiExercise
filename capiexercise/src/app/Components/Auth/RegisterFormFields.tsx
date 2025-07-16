import { InputBox } from "./InputBox";

interface Props {
    data: {
        username: string;
        email: string;
        password: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterFormFields = ({ data, onChange }: Props) => (
    <>
        <InputBox
        id="username"
        type="text"
        placeholder="Nombre de usuario"
        iconClass="bx bxs-user"
        label="Username"
        value={data.username}
        onChange={onChange}
        />
        <InputBox
        id="email"
        type="email"
        placeholder="Correo"
        iconClass="bx bxs-envelope"
        label="Email"
        value={data.email}
        onChange={onChange}
        />
        <InputBox
        id="password"
        type="password"
        placeholder="Contraseña"
        iconClass="bx bxs-lock"
        label="Password"
        value={data.password}
        onChange={onChange}
        />
    </>
);
