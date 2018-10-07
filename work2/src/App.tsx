import * as React from 'react';
import './App.css';
import Jack from './Jack';
import Lily from './Lily';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Jack/>
        <Lily/>
      </div>
    );
  }
}

export default App;
