import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const song1 = new Audio("../sound/ring.wav")

function displayPopup() {
    document.getElementById("dialog").style.display = "block"
    song1.play()
}

function hidePopup() {
    document.getElementById("dialog").style.display = "none"
    song1.pause()
}
/*
function Timer(props) {

    const [time, setTime] = useState(0)
    const [isOn, setIsOn] = useState(false)
    //const [duration, setDuration] = useState(0)

    function startTimer(duration) {
        setIsOn(true)
        setTime(duration)
        timer = duration * 1000
        setInterval( () => setTime(), 1000 )
    }
    function stopTimer() {
        setIsOn = false
    }
    function resetTimer() {
        setTime = 0
        setIsOn = false
    }
    return (
        <>
            <h2>Time Left: {minutes}:{seconds}</h2>
            <h3>Timer: {duration}</h3>
            <button onClick={() => startTimer(duration)}>Start</button>
            <button onClick={() => stopTimer()}>Stop</button>
            <button onClick={() => resetTimer()}>Reset</button>
        </>
    )
}

const CalmDownPage = () => (
    <Layout>
        <SEO title="Calm Down" keywords={[`react`, `timer`, `javscript`]} />
        <Timer />
    </Layout>
)

export default CalmDownPage
*/

/* 
https://productoptimist.com/start-using-react-hooks-a-clock-timer-example/

https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553

https://github.com/amrlabib/react-timer-hook/blob/master/src/useTimer.js
*/

/*
import React from "react";
import ReactDOM from "react-dom";
/* ---------------------- useTimer --------------------- */

/*
export function useTimer(settings) {
  const { expiryTimestamp, onExpire } = settings || {};

  const [seconds, setSeconds] = useState(0);
  function subtractSecond() {
    setSeconds(prevSeconds => {
      if(prevSeconds === 0) {
        subtractMinute();
        return 59;
      } else if(prevSeconds > 0) {
        return prevSeconds - 1;
      }
      return 0;
    });
  }


  const [minutes, setMinutes] = useState(0);
  function subtractMinute() {
    setMinutes(prevMinutes => {
      if (prevMinutes === 0) {
        subtractHour();
        return 59;
      } else if(prevMinutes > 0) {
        return prevMinutes - 1;
      }
      return 0;
    });
  }

  const [hours, setHours] = useState(0);
  function subtractHour() {
    setHours(prevHours => {
      if (prevHours === 0) {
        subtractDay();
        return 23;
      } else if(prevHours > 0) {
        return prevHours - 1;
      }
      return 0;
    });
  }

  const [days, setDays] = useState(0);
  function subtractDay() {
    setDays(prevDays => {
      if(prevDays > 0) {
        return prevDays - 1;
      }
      reset();
      isValidOnExpire(onExpire) && onExpire();
      return 0;
    });
  }

  const intervalRef = useRef();

  function start() {
    if(isValidExpiryTimestamp(expiryTimestamp) && !intervalRef.current) {
      calculateExpiryDate();
      intervalRef.current = setInterval(() => calculateExpiryDate(), 1000);
    }
  }

  function pause() {
    if(intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  function reset() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
  }

  function resume() {
    if(isValidExpiryTimestamp(expiryTimestamp) && !intervalRef.current) {
      intervalRef.current = setInterval(() => subtractSecond(), 1000);
    }
  }

  // Timer expiry date calculation
  function calculateExpiryDate() {
    var now = new Date().getTime();
    var distance = expiryTimestamp - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds < 0) {
      reset();
      isValidOnExpire(onExpire) && onExpire();
    } else {
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);
    }
  }

  // didMount effect
  useEffect(() => {
    start();
    return reset;
  },[]);


  // Validate expiryTimestamp
  function isValidExpiryTimestamp(expiryTimestamp) {
    const isValid = (new Date(expiryTimestamp)).getTime() > 0;
    if(!isValid) {
      console.warn('react-timer-hook: { useTimer } Invalid expiryTimestamp settings', expiryTimestamp);
    }
    return isValid;
  }

  // Validate onExpire
  function isValidOnExpire(onExpire) {
    const isValid = onExpire && typeof onExpire === 'function';
    if(onExpire && !isValid) {
      console.warn('react-timer-hook: { useTimer } Invalid onExpire settings function', onExpire);
    }
    return isValid;
  }

  return { seconds, minutes, hours, days, start, pause, resume };
}
*/