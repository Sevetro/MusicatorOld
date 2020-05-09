import React from 'react';
import './App.css';
import Metronome from './components/Metronome/Metronome';
import DrumLoop from './components/DrumLoop/DrumLoop';
import DrumSelector from './components/DrumSelector/DrumSelector'
import { DrumLoopProvider } from './components/DrumLoopContext';

export default function App() {
  return (
    <div className="App">
      <DrumLoopProvider>
        <Metronome />
        <DrumSelector/>
        <DrumLoop />
        
      </DrumLoopProvider>
    </div>
  );
}
