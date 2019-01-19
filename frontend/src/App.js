import React, { Component } from 'react';
import './App.css';
import ClassesColumn from './column/ClassesColumn.js'
import ProgramColumn from './program/ProgramColumn.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgramColumn
            className='program_column'>
        </ProgramColumn>
        <ClassesColumn
            className='classes_column'
            name='Classes'>
        </ClassesColumn>
      </div>
    );
  }
}

export default App;
