import { Grid } from '@material-ui/core';
import Cookies from 'js-cookie';
import moment from 'moment';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './style.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 160,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div className="dimension">{dimension}</div>
        </div>
    )
};

const getTimeSeconds = time => (minuteSeconds - time) | 0;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;

const CountDown = () => {
    const cookie = Cookies.get('endtime');

    const startTime = Date.now() / 1000;
    const remainingTime = moment(cookie).unix('x') - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <>
            <Grid item xs={12} md={3} className="item">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[['#21EB00']]}
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({ elapsedTime }) => renderTime('Dias', getTimeDays(daysDuration - elapsedTime))}
                </CountdownCircleTimer>
            </Grid>

            <Grid item xs={12} md={3} className="item">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[['#21EB00']]}
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > hourSeconds]}
                >
                    {({ elapsedTime }) => renderTime('Horas', getTimeHours(daySeconds - elapsedTime))}
                </CountdownCircleTimer>
            </Grid>

            <Grid item xs={12} md={3} className="item">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[['#21EB00']]}
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > minuteSeconds]}
                >
                    {({ elapsedTime }) => renderTime('Minutos', getTimeMinutes(hourSeconds - elapsedTime))}
                </CountdownCircleTimer>
            </Grid>


            <Grid item xs={12} md={3} className="item">
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[['#21EB00']]}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
                >
                    {({ elapsedTime }) => renderTime('Segundos', getTimeSeconds(elapsedTime))}
                </CountdownCircleTimer>
            </Grid>
        </>
    )
}

export default CountDown;