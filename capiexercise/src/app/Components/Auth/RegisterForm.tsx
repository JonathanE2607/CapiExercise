'use client';
import { useState } from "react";
import axios from "axios";

export default function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubdmit = async (e:React.FormEvent) =>{
        e.preventDefault();

        if (password !== confirmPassword){
            alert ('Las contraseñas no coiniciden');
            return;
        }

        const newUser ={
            email,
            password,
        };

        try{
            const res = await axios.post('http://localhost:3001/register', newUser);
            alert(res.data.message);
            console.log('Respuesta:', res.data);
        } catch(error){
            console.error('Error en la peticion:',error);
            alert('Ocurrio un error al registrar');
        }
    }


}