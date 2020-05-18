import React from 'react';
import './App.css';
import Metronome from './components/Metronome/Metronome';
import DrumLoop from './components/DrumLoop/DrumLoop';
import DrumSelector from './components/DrumSelector/DrumSelector';
import { DrumLoopProvider } from './components/DrumLoopContext';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

export default function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <DrumLoopProvider>
          <Metronome />
          <DrumSelector />
          <DrumLoop />
        </DrumLoopProvider>
      </DndProvider>
    </div>
  );
}
