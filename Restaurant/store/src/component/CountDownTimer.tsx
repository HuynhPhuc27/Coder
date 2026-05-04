'use Client'
import React from 'react'
import Countdown from "react-countdown";

const endingDate = new Date("2026-05-04")
const CountDownTimer = () => {
  return (
    <Countdown date={endingDate} />
  )
}

export default CountDownTimer