import React from 'react';

export default function DrumTile({ isActive, id }) {
  return (
    <button
      style={{
        float: 'left',
        width: 70,
        height: 70,
        borderRadius: 20,
        margin: 2,
        backgroundColor: isActive ? 'red' : 'white',
      }}
    >
      {id}
    </button>
  );
}
