'use client'
import React from 'react'
import Countdown from "react-countdown"

const endingDate = new Date("2026-05-05");
const CountDownTimer = () => {
  return (
    <Countdown className="font-bold text-5xl text-amber-400" date={endingDate} />
  )
}

export default CountDownTimer