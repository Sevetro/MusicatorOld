import React, { createContext, Component } from 'react';

export const DrumLoopContext = createContext();

export class DrumLoopProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmNumber: 60,
      isActive: false,
      activeDrumTileId: 3,
      drumTileCount: 8,
    };
  }

  updateDrumLoopContext = (newValues) => {
    this.setState({ ...newValues });
  };

  // flashMetronomeLed = () => {
  //   this.setState({ metronomeLedColor: 'blue' });
  //   setTimeout(() => {
  //     this.setState({ metronomeLedColor: 'white' });
  //   }, 100);
  // };

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
