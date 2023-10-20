"use client"

import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Grid, TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {getUsers} from "@/app/functions/getUsers";

const login = z
    .object({
        email: z.string().email({message: "Isso deve ser um email válido!"}).regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        senha: z.string().min(6, {message: "Deve ser uma senha válida! Deve ter 6 dígitos!"})
    })
    .transform((data) => ({
        email: data.email,
        senha: data.senha
    }));

type LoginValues = z.infer<typeof login>;
export default function AuthPage() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginValues>();

    const router = useRouter();

    const onSubmit: SubmitHandler<LoginValues> = (data) => {
        console.log(data);
    };

    const routerCadastro = () => {
        router.push('/auth/cadastrar')
    }

    return (
        <>
            <div
                className={`h-full w-full space-y-10 flex flex-col justify-center text-black bg-[url('/assets/NaturatinsMapSemFundo.png')] bg-image bg-multiply bg-cover bg-cinzaClaro rounded p-4`}>
                <form className={`justify-center space-y-4`} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={`text-3xl p-5 w-full flex text-start`}>Login</h2>
                    <Grid className={`w-full`}>
                        <TextField
                            required
                            placeholder={`exemplo@email.com`}
                            label="Email:"
                            variant="outlined"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message || ' '}
                            {...register('email', {required: "Email é obrigatório!"})}
                        />

                    </Grid>
                    <Grid className={`w-full`}>
                        <TextField
                            required
                            placeholder={`*************`}
                            label="Senha:"
                            variant="outlined"
                            fullWidth
                            error={!!errors.senha}
                            helperText={errors.senha?.message || ' '}
                            {...register('senha', {required: "A senha é obrigatória!"})}
                        />
                    </Grid>

                    <div className={`flex flex-col justify-center space-y-4`}>
                        <Button
                            type="submit"
                            className={`bg-azulEscuro text-white font-medium active:font-bold`}
                            variant="contained">
                            Entrar
                        </Button>

                        <h3 className={`text-center`}>Ainda não tem conta? </h3>
                        <Button
                            onClick={routerCadastro}
                            className={`bg-verdeClaro text-white font-medium active:font-bold`}
                            variant="contained">
                            Criar Conta
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}
