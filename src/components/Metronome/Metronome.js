import React, { useContext } from 'react';
import { DrumLoopContext } from '../DrumLoopContext';
import ChangeBpmBtn from './ChangeBpmBtn';
import DisplayBpmDiv from './DisplayBpmDiv';
import ToggleMetronomeBtn from './ToggleMetronomeBtn';
import MetronomeDiv from './MetronomeDiv';
import MetronomeLed from './MetronomeLed';

let timeoutId;

export default function Metronome() {
  const {
    bpmNumber,
    isActive,
    metronomeTicks,
    updateDrumLoopContext,
  } = useContext(DrumLoopContext);

  const toggleMetronome = () => {
    clearTimeout(timeoutId);
    if (isActive) {
      timeoutId = setTimeout(
        () =>
          updateDrumLoopContext({
            metronomeTicks: metronomeTicks + 1,
          }),
        (60 / bpmNumber) * 1000
      );
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

      <MetronomeLed />
    </MetronomeDiv>
  );
}
