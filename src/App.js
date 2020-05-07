import React from 'react';
import './App.css';
import Metronome from './components/Metronome/Metronome';
import DrumLoop from './components/DrumLoop/DrumLoop';
import { DrumLoopProvider } from './components/DrumLoopContext';

export default function App() {
  return (
    <div className="App">
      <DrumLoopProvider>
        <Metronome />
        <DrumLoop />
      </DrumLoopProvider>
    </div>
  );
}
