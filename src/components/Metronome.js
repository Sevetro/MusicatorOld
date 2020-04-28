import React, { useState } from 'react'

var metronomeInterval

function Metronome(props) {
  let [isActive, setActive] = useState(props.metronomeState.active)
  let [bpmNumber, setBpmNumber] = useState(props.metronomeState.bpmNumber)
  let [metronomeLedColor, setMetronomeLedColor] = useState("white")


  function changeLedColor() {
    metronomeLedColor = metronomeLedColor === "white" ? "blue" : "white"
    setMetronomeLedColor(metronomeLedColor)
  }

  function changeBpmBtnClick() {
      clearInterval(metronomeInterval)
      metronomeInterval = setInterval(changeLedColor, (60 / bpmNumber) * 1000)
  }

  const playStopClick = () => {
    isActive = !isActive
    setActive(isActive)
    document.getElementById("playStopButton").style.backgroundColor = isActive ? "red" : "white"



    if (isActive)
      metronomeInterval = setInterval(changeLedColor, (60 / bpmNumber) * 1000)
    else {
      clearInterval(metronomeInterval)
      setMetronomeLedColor("white")
    }

  }

  let btnStyles = {
    display: "inline-block",
    marginLeft: 1,
    marginRight: 1
  }


  return (
    <div className="Metronome">
      <button style={btnStyles} onClick={() => { setBpmNumber(bpmNumber - 10); if(isActive) changeBpmBtnClick() }} >-10</button>
      <button style={btnStyles} onClick={() => { setBpmNumber(bpmNumber - 1); if(isActive) changeBpmBtnClick() }} >-</button>
      <div style={{ display: "inline-block", width: 30 }} >{bpmNumber}</div>
      <button style={btnStyles} onClick={() => { setBpmNumber(bpmNumber + 1); if(isActive) changeBpmBtnClick() }} >+</button>
      <button style={btnStyles} onClick={() => { setBpmNumber(bpmNumber + 10); if(isActive) changeBpmBtnClick() }} >+10</button>

      <button onClick={playStopClick} id="playStopButton" style={{ backgroundColor: "white" }}>PLAY/STOP</button>
      <div className="metronomeLed" id="metronomeLed" style={{ backgroundColor: metronomeLedColor }} ></div>
    </div>
  )


}
export default Metronome;