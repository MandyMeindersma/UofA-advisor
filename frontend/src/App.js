import React, { Component } from 'react';
import './App.css';
import ClassesColumn from './column/ClassesColumn.js'
import ProgramColumn from './program/ProgramColumn.js'
import ResultsPage from './resultspage/ResultsPage.js'

class App extends Component {

  constructor(props) {
      super(props);
      this.getDb = this.getDb.bind(this);
  }

  getDb() {
      fetch("http://localhost:8000/api/")
        //.then(data => data.json())
        .then(res => res.text())
        .then(text => console.log(text))
        //.then(res => this.setState({data: res.data}));
    //console.log(this.state.data);
  }

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
        <button onClick={this.getDb}>
        things

        </button>
      </div>
    );
  }
}

export default App;
