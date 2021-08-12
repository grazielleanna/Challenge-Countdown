import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Formsy from 'formsy-react';
import Cookies from 'js-cookie';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import InputDateKeyboard from '../../components/Input';

import './style.css';
import moment from 'moment';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    const history = useHistory();

    function enableButton() {
        setIsFormValid(true);
    }

    function disableButton() {
        setIsFormValid(true);
    }

    function handleSubmit(model) {
        console.log(model.date)
        setLoading(true);
        if(model.date === 'Invalid date'){
            Swal.fire({
                title: 'Ops!',
                icon: 'error',
                text: 'Data inválida. Informe uma data posterior a atual.'
            }); 
            setLoading(false);
            return false;
        }else if(model.date > moment().format()){
            Cookies.set('endtime', model.date);
            history.push('/countdown');
            setLoading(false);
        }
    }

    return (
        <section id="dashboard">
            <Grid container p={3} className="container">
                <Grid item xs={12} className="item">
                    <Typography variant="h1">
                        Contador
                    </Typography>
                    <Typography variant="body1" className="text">
                        Informe uma data
                    </Typography>
                    <Formsy autoComplete="off" onSubmit={handleSubmit} onValid={enableButton} onInvalid={disableButton} ref={formRef}>

                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <InputDateKeyboard
                                format="DD/MM/yyyy"
                                name="date"
                                variant="outlined"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                style={{ color: '#191918' }}
                                type="tel"
                                required
                            />
                        </MuiPickersUtilsProvider>

                        <Grid item xs={12}>
                            <Button
                                className="submit"
                                type="submit"
                                variant="contained"
                                value="countdown"
                                disabled={!isFormValid || loading}
                            >
                                {loading ? <CircularProgress /> : 'Iniciar Contagem'}
                            </Button>
                        </Grid>
                    </Formsy>
                </Grid>
            </Grid>
        </section>
    )
}

export default Dashboard;