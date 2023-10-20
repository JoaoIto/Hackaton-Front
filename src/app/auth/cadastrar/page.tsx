"use client"

import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Grid, TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";

const login = z
    .object({
        nomeCompleto: z.string(),
        email: z.string().email({message: "Isso deve ser um email válido!"}).regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        senha: z.string().min(6, {message: "Deve ser uma senha válida! Deve ter 6 dígitos!"})
    })
    .transform((data) => ({
        nome: data.nomeCompleto,
        email: data.email,
        senha: data.senha
    }));

type LoginValues = z.infer<typeof login>;
export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginValues>();

    const router = useRouter();

    const onSubmit: SubmitHandler<LoginValues> = (data) => {
        console.log(data);
    };

    const routerLogin = () => {
        router.push('/auth/login')
    }

    return (
        <>
            <div
                className={`h-full w-full space-y-2 flex flex-col justify-center text-black bg-[url('/assets/NaturatinsMapSemFundo.png')] bg-opacity-60 bg-multiply bg-cover bg-cinzaClaro rounded p-4`}>
                <form className={`justify-center space-y-4`} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={`text-3xl p-5 w-full flex text-start`}>Cadastrar</h2>
                    <Grid className={`w-full`}>
                        <TextField
                            required
                            label="Nome completo:"
                            variant="outlined"
                            fullWidth
                            error={!!errors.nome}
                            helperText={errors.nome?.message || ' '}
                            {...register('nome', {required: "Nome Completo é obrigatório!"})}
                        />

                    </Grid>
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

                    <TextField
                        required
                        placeholder={`*************`}
                        label="Repetir senha:"
                        variant="outlined"
                        fullWidth
                        error={!!errors.senha}
                        helperText={errors.senha?.message || ' '}
                        {...register('senha', {required: "A senha é obrigatória!"})}
                    />

                    <div className={`space-x-4`}>
                        <Button
                            onClick={routerLogin}
                            className={`bg-azulEscuro text-white font-medium active:font-bold`}
                            variant="contained">
                            Já tenho conta
                        </Button>
                        <Button
                            type={"submit"}
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
