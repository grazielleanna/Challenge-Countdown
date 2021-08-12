import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CountDown from '../../components/Countdown';

import './style.css'

const Countdown = () => {
    return(
        <section id="countdown">
            <header>
                <div className="name">
                    <Typography variant="h1">
                        Contador
                    </Typography>
                </div>

                <div className="button">
                    <Link to="/">
                        Reiniciar
                    </Link>
                </div>
            </header>

            <Grid container className="container">
                <Grid item xs={12}>
                    <Typography variant="h2">
                        Faltam
                    </Typography>

                    <Grid container p={3} className="countdown">
                        <CountDown />
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default Countdown;