import React from 'react';
import DrumTileBtn from './DrumTileBtn';

export default function DrumTile({ isActive, id }) {
  return <DrumTileBtn isActive={isActive}>{id}</DrumTileBtn>;
}
