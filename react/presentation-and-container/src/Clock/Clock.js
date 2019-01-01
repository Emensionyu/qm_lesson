import React from 'react';
import propTypes from 'prop-types';

export default function  Clock(props){
    var  [hours,minutes,seconds]=[
        props.hours,
        props.minutes,
        props.seconds
    ].map(num=>num<10?'0'+num:num);
    return <h1>{hours}:{minutes}:{seconds}</h1>
}

Clock.propTypes = {
    hours: propTypes.number.isRequired,
    minutes:propTypes.number.isRequired,
    seconds:propTypes.number.isRequired,
  }