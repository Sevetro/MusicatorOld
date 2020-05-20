import React, { createContext, Component } from 'react';
import loopsData from '../data/loopsData.json';

export const DrumLoopContext = createContext();

export class DrumLoopProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmNumber: 160,
      isActive: false,
      metronomeTicks: 0,
      loops: loopsData,
    };
  }

  updateDrumLoopContext = (newValues) => {
    this.setState({ ...newValues });
  };

  render() {
    return (
      <DrumLoopContext.Provider
        value={{
          ...this.state,
          updateDrumLoopContext: this.updateDrumLoopContext,
        }}
      >
        {this.props.children}
      </DrumLoopContext.Provider>
    );
  }
}
