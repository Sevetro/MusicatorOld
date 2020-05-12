import React, { useContext } from 'react';
import { DrumLoopContext } from '../DrumLoopContext';
import ChangeBpmBtn from './ChangeBpmBtn';
import DisplayBpmDiv from './DisplayBpmDiv';
import ToggleMetronomeBtn from './ToggleMetronomeBtn';
import MetronomeDiv from './MetronomeDiv';
import MetronomeLed from './MetronomeLed';

let metronomeId;

export default function Metronome() {
  const {
    bpmNumber,
    isActive,
    drumTileCount,
    activeDrumTileId,
    updateDrumLoopContext,
  } = useContext(DrumLoopContext);

  function hitNextDrumTile() {
    updateDrumLoopContext({
      activeDrumTileId:
        activeDrumTileId > drumTileCount - 2 ? 0 : activeDrumTileId + 1,
    });
  }

  const toggleMetronome = () => {
    clearTimeout(metronomeId);
    if (isActive) {
      metronomeId = setTimeout(hitNextDrumTile, (60 / bpmNumber) * 1000);
    }
  };

  function handleClick(value) {
    updateDrumLoopContext({ bpmNumber: bpmNumber + value });
  }

  toggleMetronome();

  return (
    <MetronomeDiv>
      <ChangeBpmBtn onClick={() => handleClick(-10)}>-10</ChangeBpmBtn>
      <ChangeBpmBtn onClick={() => handleClick(-1)}>-</ChangeBpmBtn>
      <DisplayBpmDiv>{bpmNumber}</DisplayBpmDiv>
      <ChangeBpmBtn onClick={() => handleClick(1)}>+</ChangeBpmBtn>
      <ChangeBpmBtn onClick={() => handleClick(10)}>+10</ChangeBpmBtn>

      <ToggleMetronomeBtn
        isActive={isActive}
        onClick={() => updateDrumLoopContext({ isActive: !isActive })}
      >
        PLAY/STOP
      </ToggleMetronomeBtn>

      <MetronomeLed activeDrumTileId={activeDrumTileId}></MetronomeLed>
    </MetronomeDiv>
  );
}
