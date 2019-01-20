import React, { Component } from 'react';
import './App.css';
import ClassesColumn from './column/ClassesColumn.js'
import ProgramColumn from './program/ProgramColumn.js'
import ResultsPage from './resultspage/ResultsPage.js'

class App extends Component {

  constructor(props) {
      super(props);
      this.getFaculty = this.getFaculty.bind(this);
      this.state = {
          data: []
      };
      this.getFaculty()
  }

  getFaculty() {
      fetch("http://localhost:8000/api/faculty")
        .then(res => res.json())
        .then(text => {
            this.setState({data: text});
            this.setState({promiseDone: true});
        });
  }

  stateChange() {
      document.getElementById("inputpage").classList.toggle('hide');
      document.getElementById("resultspage").classList.toggle('hide');
  }

  render() {
    if(!this.state.promiseDone){return null}
    return (
      <div className="App">
        <div className='inputpage' id='inputpage'>
            <ProgramColumn
                className='program_column'
                faculty={this.state.data}>
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
