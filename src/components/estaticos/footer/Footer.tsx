import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'> Me siga nas redes sociais! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/mariavitoria.venturini.9/" target="_blank">
                                <FacebookIcon className='redes'/>
                            </a>
                            <a href="https://github.com/MavisVenturini" target="_blank">
                                <GitHubIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/in/maria-vitoria-soares-sotero-venturini-302980205/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;