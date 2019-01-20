import React, { Component } from 'react';
import './App.css';
import ClassesColumn from './column/ClassesColumn.js'
import ProgramColumn from './program/ProgramColumn.js'
import ResultsPage from './resultspage/ResultsPage.js'

class App extends Component {

  stateChange() {
      document.getElementById("inputpage").classList.toggle('hide');
      document.getElementById("resultspage").classList.toggle('hide');
  }

  render() {
    return (
      <div className="App">
        <div className='inputpage' id='inputpage'>
            <ProgramColumn
                className='program_column'>
            </ProgramColumn>
            <ClassesColumn
                className='classes_column'
                name='Classes'
                stateChange={this.stateChange}>
            </ClassesColumn>
        </div>
        <div className='resultspage hide' id='resultspage'>
            <ResultsPage
                className='results_column'
                stateChange={this.stateChange}>
            </ResultsPage>
        </div>
      </div>
    );
  }
}

export default App;
