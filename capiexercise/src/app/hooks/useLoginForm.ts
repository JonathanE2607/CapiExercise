'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../store/AuthContext';

export const useLoginForm = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const router = useRouter();
    const { login } = useAuth();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.id]: e.target.value.trim() });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

        const matchedUser = storedUsers.find(
        (user: { email: string; password: string }) =>
            user.email === data.email && user.password === data.password
        );

        if (matchedUser) {
        login();
        alert('Inicio de sesión exitoso');
        router.push('/dashboard');
        } else {
        alert('Correo electrónico o contraseña incorrectos');    
        }
    };

    return {
        data,
        handleInputChange,
        handleFormSubmit,
    };
};
