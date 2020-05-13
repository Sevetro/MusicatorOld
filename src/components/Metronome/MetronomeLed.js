import React, { useContext, useState } from 'react';
import MetronomeLedDiv from './MetronomeLedDiv';
import { DrumLoopContext } from '../DrumLoopContext';

export default function MetronomeLed() {
  const { activeDrumTileId } = useContext(DrumLoopContext);
  const [metronomeLedColor, setMetronomeLedColor] = useState('white');
  const [hookDrumTileId, setHookDrumTileId] = useState(activeDrumTileId);
  const flashTime = 100;

  const flashMetronomeLed = () => {
    setMetronomeLedColor('blue');
    setHookDrumTileId(activeDrumTileId);
    setTimeout(() => setMetronomeLedColor('white'), flashTime);
  };

  if (activeDrumTileId !== hookDrumTileId) {
    flashMetronomeLed();
  }

  return <MetronomeLedDiv metronomeLedColor={metronomeLedColor} />;
}
