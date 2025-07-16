import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RegisterFormData {
    username: string;
    email: string;
    password: string;
}

export const useRegisterForm = () => {
    const [data, setData] = useState<RegisterFormData>({
        username: '',
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if (!['username', 'email', 'password'].includes(id)) return;

        setData((prev) => ({
        ...prev,
        [id]: id === 'username' ? value.replace(/\s+/g, '') : value,
        }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        alert('Formulario enviado con éxito');
        if (typeof window !== 'undefined') {
        const storedUsers: RegisterFormData[] = JSON.parse(
            localStorage.getItem('users') || '[]'
        );
        storedUsers.push(data);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        }

        setData({ username: '', email: '', password: '' });
        router.push('/auth/login');
    };

    return {
        data,
        handleInputChange,
        handleFormSubmit,
    };
};
