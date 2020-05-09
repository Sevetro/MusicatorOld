import React, { createContext, Component } from 'react';

export const DrumLoopContext = createContext();

export class DrumLoopProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmNumber: 100,
      isActive: false,
      metronomeLedColor: 'white',
      activeDrumTileId: 3,
      drumTileCount: 8,
    };
  }

  updateDrumLoopContext = async (newValues, callback) => {
    const promise = await new Promise((resolve, reject) => {
      resolve(this.setState({ ...newValues }));
    });
    if (callback) callback(this.state.isActive);
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
