import React, { useContext } from 'react';
import { DrumLoopContext } from './DrumLoopContext';
import ChangeBpmButton from './styled/ChageBpmButton';
import DisplayBpmDiv from './styled/DisplayBpmDiv';

let metronomeId;

export default function Metronome() {
  const {
    bpmNumber,
    isActive,
    metronomeLedColor,
    tileCount,
    activeTileId,
    updateDrumLoopContext,
  } = useContext(DrumLoopContext);

  const flashMetronomeLed = () => {
    updateDrumLoopContext({ metronomeLedColor: 'blue' });
    setTimeout(() => updateDrumLoopContext({ metronomeLedColor: 'white' }), 70);
  };

  const hitNextDrumTile = () => {
    updateDrumLoopContext({
      activeTileId: activeTileId > tileCount - 2 ? 0 : activeTileId + 1,
    });
    flashMetronomeLed();
  };

  const toggleMetronome = () => {
    clearInterval(metronomeId);
    if (isActive)
      metronomeId = setInterval(hitNextDrumTile, (60 / bpmNumber) * 1000);
  };

  toggleMetronome();

  const handleBpmClick = (e) => {
    updateDrumLoopContext({ bpmNumber: bpmNumber - 10 })
  }

  return (
    <div className="Metronome">
      <ChangeBpmButton
        onClick={() => handleBpmClick}
        value={5}
      >
        -10
      </ChangeBpmButton>

      <ChangeBpmButton
        onClick={() => updateDrumLoopContext({ bpmNumber: bpmNumber - 1 })}
      >
        -
      </ChangeBpmButton>

      <DisplayBpmDiv>{bpmNumber}</DisplayBpmDiv>

      <ChangeBpmButton
        onClick={() => updateDrumLoopContext({ bpmNumber: bpmNumber + 1 })}
      >
        +
      </ChangeBpmButton>

      <ChangeBpmButton
        onClick={() => updateDrumLoopContext({ bpmNumber: bpmNumber + 10 })}
      >
        +10
      </ChangeBpmButton>

      <button
        id="playStopButton"
        onClick={() => updateDrumLoopContext({ isActive: !isActive })}
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
