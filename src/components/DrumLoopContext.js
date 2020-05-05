import React, { useState, createContext } from 'react';

export const DrumLoopContext = createContext();

export const DrumLoopProvider = (props) => {
  const [bpmNumber, setBpmNumber] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [metronomeLedColor, setMetronomeLedColor] = useState('white');
  const [activeTileId, setActiveTileId] = useState(6);
  const [tileCount, setTileCount] = useState(47);

  return (
    <DrumLoopContext.Provider
      value={{
        bpmNumber,
        setBpmNumber,
        isActive,
        setIsActive,
        metronomeLedColor,
        setMetronomeLedColor,
        activeTileId,
        setActiveTileId,
        tileCount,
        setTileCount,
      }}
    >
      {props.children}
    </DrumLoopContext.Provider>
  );
};
