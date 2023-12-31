"use client"
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Grid, TextField, Select, MenuItem } from "@mui/material";
import { getApiUrl } from "../../functions/getApiUrl"
import { useRouter } from "next/navigation";

const login = z
    .object({
        nomeCompleto: z.string(),
        usuario: z.string(),
        email: z.string().email({ message: "Isso deve ser um email válido!" }).regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        senha: z.string().min(6, { message: "Deve ser uma senha válida! Deve ter 6 dígitos!" }),
        tipoPerfil: z.string(),
        orgao: z.string(),
        status: z.string(),
        profile: z.string(),
    })
    .transform((data) => ({
        name: data.nomeCompleto,
        email: data.email,
        password: data.senha,
        userName: data.usuario,
        status: "ACTIVE",
        profile: "ADMIN",
        regionalAgencyNaturatins: data.orgao
    }));

type LoginValues = z.infer<typeof login>;
export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginValues>();

    const router = useRouter();

    const onSubmit: SubmitHandler<LoginValues> = async (data) => {
        console.log(data);
        data.profile = "ADMIN"
        data.status = "ACTIVE"

        const response = await fetch('http://localhost:8080/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // handle error
            const errorMessage = await response.text();
            alert(errorMessage);
        }
    };    

    const routerLogin = () => {
        router.push('/auth/login')
    }

    return (
        <>
            <div
                className={`h-4/5 w-full space-y-2 flex flex-col justify-center text-black bg-cinzaClaro rounded p-4`}>
                <form className={`justify-center space-y-4`} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={`text-3xl p-5 w-full flex text-start`}>Cadastrar</h2>
                    <Grid className={`w-full`}>
                        <TextField
                            required
                            label="Nome completo:"
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name?.message || ' '}
                            {...register('name', { required: "Nome Completo é obrigatório!" })}
                        />

                    </Grid>

                    <Grid className={`w-full`}>
                        <TextField
                            required
                            label="Nome de usuário:"
                            variant="outlined"
                            fullWidth
                            error={!!errors.userName}
                            helperText={errors.userName?.message || ' '}
                            {...register('userName', { required: "Nome de usuário é obrigatório!" })}
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
                            {...register('email', { required: "Email é obrigatório!" })}
                        />

                    </Grid>

                    <Grid>
                        <Select
                            label="Orgão:"
                            placeholder={"Selecione um orgão"}
                            variant="outlined"
                            fullWidth
                            error={!!errors.regionalAgencyNaturatins}
                            {...register('regionalAgencyNaturatins', { required: "Orgão é obrigatório!" })}
                        >
                            <MenuItem value="">Selecione um orgão</MenuItem>
                            <MenuItem value="PALMAS">PALMAS</MenuItem>
                            <MenuItem value="ARAGUAÍNA">ARAGUAÍNA</MenuItem>
                            <MenuItem value="DIANÓPOLIS">DIANÓPOLIS</MenuItem>
                            <MenuItem value="AUGUSTINÓPOLIS">AUGUSTINÓPOLIS</MenuItem>
                            <MenuItem value="GURUPI">GURUPI</MenuItem>
                        </Select>
                    </Grid>

                    <Grid className={`w-full`}>
                        <TextField
                            required
                            placeholder={`*************`}
                            label="Senha:"
                            variant="outlined"
                            fullWidth
                            error={!!errors.password}
                            helperText={errors.password?.message || ' '}
                            {...register('password', { required: "A senha é obrigatória!" })}
                        />
                    </Grid>

                    <TextField
                        required
                        placeholder={`*************`}
                        label="Repetir senha:"
                        variant="outlined"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message || ' '}
                        {...register('password', { required: "A senha é obrigatória!" })}
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
