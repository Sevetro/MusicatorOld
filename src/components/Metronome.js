import React, { useContext } from 'react';
import { DrumLoopContext } from './DrumLoopContext';

let metronomeId;

export default function Metronome() {
  const {
    bpmNumber,
    setBpmNumber,
    isActive,
    setIsActive,
    metronomeLedColor,
    setMetronomeLedColor,
    activeTileId,
    setActiveTileId,
    tileCount,
  } = useContext(DrumLoopContext);

  const toggleMetronome = () => {
    clearInterval(metronomeId);
    if (isActive)
      metronomeId = setInterval(hitNextDrumTile, (60 / bpmNumber) * 1000);
  };

  //za każdym razem jak zmieni sie state bedzie rerender i nie musze dawac onclickow dodatkowych na
  //każdą zmiane bpm
  toggleMetronome();

  const hitNextDrumTile = () => {
    setActiveTileId(activeTileId > tileCount - 2 ? 0 : activeTileId + 1);
    flashMetronomeLed();
  };

  const flashMetronomeLed = () => {
    setMetronomeLedColor('blue');
    setTimeout(() => setMetronomeLedColor('white'), 70);
  };

  const btnStyles = {
    display: 'inline-block',
    marginLeft: 1,
    marginRight: 1,
  };

  return (
    <div className="Metronome">
      <button onClick={() => setBpmNumber(bpmNumber - 10)} style={btnStyles}>
        -10
      </button>

      <button onClick={() => setBpmNumber(bpmNumber - 1)} style={btnStyles}>
        -
      </button>

      <div style={{ display: 'inline-block', width: 30 }}>{bpmNumber}</div>

      <button onClick={() => setBpmNumber(bpmNumber + 1)} style={btnStyles}>
        +
      </button>

      <button onClick={() => setBpmNumber(bpmNumber + 10)} style={btnStyles}>
        +10
      </button>

      <button
        id="playStopButton"
        onClick={() => setIsActive(!isActive)}
        style={{ backgroundColor: isActive ? 'red' : 'white' }}
      >
        PLAY/STOP
      </button>
      <div
        className="metronomeLed"
        id="metronomeLed"
        style={{ backgroundColor: metronomeLedColor }}
      ></div>
    </div>
  );
}
