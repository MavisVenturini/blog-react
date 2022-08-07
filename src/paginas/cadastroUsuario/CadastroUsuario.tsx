import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import './CadastroUsuario.css';


function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos1"> Cadastrar</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal'type='password' fullWidth></TextField>
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none' >
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit'variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;

