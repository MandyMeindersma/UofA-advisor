import React from 'react';
import './ResultsPage.css';

class ResultsPage extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div className='button_backdrop'>
                    <div className='arrow'>
                    </div>
                    <button className='back_button'
                        onClick={this.props.stateChange}>
                            Calculate Again
                    </button>
                </div>
                <div className='results_wrapper'>
                    <h2 className='results_header'>You will graduate if you take these courses:</h2>
                    <ul className='courses_list'>
                      <li className='course'>300+ level CMPUT</li>
                      <li className='course'>400+ level CMPUT</li>
                      <li className='course'>Art option</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ResultsPage;
