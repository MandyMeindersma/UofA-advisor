import React from 'react';
import './ClassesColumn.css';
import Row from './../row/Row.js'

class ClassesColumn extends React.Component {

    ROWS = [ 1, 2, 3, 4, 5];
    //     'odd row 1',
    //     'even row 2',
    //     'odd row 3',
    //     'even row 4',
    //     'odd row 5'
    // ];
    rowNumber = 6;

    constructor(props) {
      super(props);
      this.addAnotherClass = this.addAnotherClass.bind(this);
    }

    addAnotherClass(e) {
        if (this.rowNumber % 2 === 0) {
            this.ROWS.push('even row ' + this.rowNumber);
        } else {
            this.ROWS.push('odd row ' + this.rowNumber);
        }
        this.rowNumber+=1;
        this.setState({ state: this.state });

    }

    render() {
        return (
            <div className={this.props.className}
                id='classes_column'>
                <h2 className='classes_header'>{this.props.name}</h2>
                <div className='row_wrapper'>
                    {this.ROWS.map(row => (
                        <Row className={row} key={row} classNameidThing={row}/>
                    ))}
                </div>
                <div className='button_wrapper'>
                    <button className='a_button another_class'
                        type="button"
                        onClick={this.addAnotherClass}>
                            Add another class
                    </button> <br></br>
                    <button className='a_button check_courses'
                        type="button"
                        onClick={this.props.stateChange}>
                            Check Courses!
                    </button>
                </div>
            </div>
        );
    }
}

export default ClassesColumn;
