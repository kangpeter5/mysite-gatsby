import React, { useState, useEffect } from "react"
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

function Timer(props) {
    const [time, setTime] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [start, setStart] = useState(0)

    function startTimer() {
        setIsOn = true
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
            <h3>Timer: {setTime}</h3>
            <button onClick={() => startTimer()}>start</button>
            <button onClick={() => stopTimer()}>stop</button>
            <button onClick={() => resetTimer()}>reset</button>
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

/* 
https://productoptimist.com/start-using-react-hooks-a-clock-timer-example/

https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553
*/

/*
import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }
  render() {
    let start =
      this.state.time == 0 ? (
        <button onClick={this.startTimer}>start</button>
      ) : null;
    let stop =
      this.state.time == 0 || !this.state.isOn ? null : (
        <button onClick={this.stopTimer}>stop</button>
      );
    let resume =
      this.state.time == 0 || this.state.isOn ? null : (
        <button onClick={this.startTimer}>resume</button>
      );
    let reset =
      this.state.time == 0 || this.state.isOn ? null : (
        <button onClick={this.resetTimer}>reset</button>
      );
    return (
      <div>
        <h3>timer: {this.state.time}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}
module.exports = Timer;

*/