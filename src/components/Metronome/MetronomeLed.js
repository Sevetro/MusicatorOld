import React, { useContext, useState } from 'react';
import MetronomeLedDiv from './MetronomeLedDiv';
import { DrumLoopContext } from '../DrumLoopContext';

export default function MetronomeLed() {
  const { metronomeTicks } = useContext(DrumLoopContext);
  const [metronomeLedColor, setMetronomeLedColor] = useState('white');
  const [hookDrumTileId, setHookDrumTileId] = useState(metronomeTicks);
  const flashTime = 100;

  const flashMetronomeLed = () => {
    setMetronomeLedColor('blue');
    setHookDrumTileId(metronomeTicks);
    setTimeout(() => setMetronomeLedColor('white'), flashTime);
  };

  if (metronomeTicks !== hookDrumTileId) {
    flashMetronomeLed();
  }

  return <MetronomeLedDiv metronomeLedColor={metronomeLedColor} />;
}
