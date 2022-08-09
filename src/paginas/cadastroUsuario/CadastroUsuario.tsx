import React , { useState, useEffect, ChangeEvent }from 'react';
import {useNavigate } from 'react-router-dom';
import Usuario from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import './CadastroUsuario.css';


function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token:'',
        });

    const [userResult, setUserResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token:'',   
        });

        useEffect(() => {
            if (userResult.id != 0) {
                navigate("/login")
            }
        }, [userResult])
    
    
        function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
            setConfirmarSenha(e.target.value)
        }
    
    
        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
    
        }
        async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()

            // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
            if(confirmarSenha === user.senha && user.senha.length >= 8) {

                //Tenta executar o cadastro
                try {
                    await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                    alert("Usuário cadastrado com sucesso")

                //Se houver erro, pegue o Erro e retorna uma msg
                } catch (error) {
                    console.log(`Error: ${error}`)

                    //Pode modificar a msg de acordo com o erro
                    alert("Usuário já existente")
                }
        
            }else{
                alert('Confirmação de senha deve ser igual senha e deve conter 5 caracteres ou mais.') // Mensagem que indica a quantidade minima de caracteres
                setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
                setConfirmarSenha("") // Reinicia o campo de Confirmar Senha
            }
        }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos1"> Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField  value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none2'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type= 'submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}

export default CadastroUsuario;