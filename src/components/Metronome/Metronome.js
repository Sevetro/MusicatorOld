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

  function handleBpmClick(e) {
    if (e.target.innerHTML === '-' || e.target.innerHTML === '+')
      updateDrumLoopContext({
        bpmNumber: bpmNumber + parseInt(`${e.target.innerHTML}1`),
      });
    else
      updateDrumLoopContext({
        bpmNumber: bpmNumber + parseInt(e.target.innerHTML),
      });
  }

  toggleMetronome();

  return (
    <MetronomeDiv>
      <ChangeBpmBtn onClick={handleBpmClick}>-10</ChangeBpmBtn>
      <ChangeBpmBtn onClick={handleBpmClick}>-</ChangeBpmBtn>
      <DisplayBpmDiv>{bpmNumber}</DisplayBpmDiv>
      <ChangeBpmBtn onClick={handleBpmClick}>+</ChangeBpmBtn>
      <ChangeBpmBtn onClick={handleBpmClick}>+10</ChangeBpmBtn>

      <ToggleMetronomeBtn
        isActive={isActive}
        onClick={() => updateDrumLoopContext({ isActive: !isActive })}
      >
        PLAY/STOP
      </ToggleMetronomeBtn>
      <MetronomeLedDiv metronomeLedColor={metronomeLedColor}></MetronomeLedDiv>
    </MetronomeDiv>
  );
}
