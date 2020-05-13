import React, { createContext, Component } from 'react';

export const DrumLoopContext = createContext();

export class DrumLoopProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmNumber: 500,
      isActive: false,
      activeDrumTileId: 3,
      drumTileCount: 48,
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
