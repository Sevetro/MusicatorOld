import React, { useContext } from 'react';
import { DrumLoopContext } from '../DrumLoopContext';
import ChangeBpmBtn from './ChangeBpmBtn';
import DisplayBpmDiv from './DisplayBpmDiv';
import ToggleMetronomeBtn from './ToggleMetronomeBtn';
import MetronomeDiv from './MetronomeDiv';
import MetronomeLedDiv from './MetronomeLedDiv';

//gdzie go dać bo nie wiemm ;c
let metronomeId;

export default function Metronome() {
  const {
    bpmNumber,
    isActive,
    metronomeLedColor,
    drumTileCount,
    activeDrumTileId,
    updateDrumLoopContext,
  } = useContext(DrumLoopContext);

  const flashMetronomeLed = () => {
    updateDrumLoopContext({ metronomeLedColor: 'blue' });
    setTimeout(() => updateDrumLoopContext({ metronomeLedColor: 'white' }), 70);
  };

  const hitNextDrumTile = (currentDrumTileId) => {
    updateDrumLoopContext({
      activeDrumTileId:
        currentDrumTileId > drumTileCount - 2 ? 0 : currentDrumTileId + 1,
    });

    flashMetronomeLed();
  };

  function toggleMetronome(contextIsActive) {
    clearInterval(metronomeId);
    if (contextIsActive) {
      console.log('elko');
      metronomeId = setInterval(
        () => hitNextDrumTile(activeDrumTileId),
        (60 / bpmNumber) * 1000
      );
    }
  }

  function handleClick(e) {
    if (e.target.innerHTML === '-' || e.target.innerHTML === '+')
      updateDrumLoopContext(
        {
          bpmNumber: bpmNumber + parseInt(`${e.target.innerHTML}1`),
        },
        toggleMetronome
      );
    else if (e.target.innerHTML === '-10' || e.target.innerHTML === '+10')
      updateDrumLoopContext(
        {
          bpmNumber: bpmNumber + parseInt(e.target.innerHTML),
        },
        toggleMetronome
      );
    else updateDrumLoopContext({ isActive: !isActive }, toggleMetronome);
  }

  return (
    <MetronomeDiv>
      <ChangeBpmBtn onClick={handleClick}>-10</ChangeBpmBtn>
      <ChangeBpmBtn onClick={handleClick}>-</ChangeBpmBtn>
      <DisplayBpmDiv>{bpmNumber}</DisplayBpmDiv>
      <ChangeBpmBtn onClick={handleClick}>+</ChangeBpmBtn>
      <ChangeBpmBtn onClick={handleClick}>+10</ChangeBpmBtn>

      <ToggleMetronomeBtn isActive={isActive} onClick={handleClick}>
        PLAY/STOP
      </ToggleMetronomeBtn>

      <MetronomeLedDiv metronomeLedColor={metronomeLedColor}></MetronomeLedDiv>
    </MetronomeDiv>
  );
}
