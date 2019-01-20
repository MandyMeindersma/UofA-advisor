import React from 'react';
import './ClassesColumn.css';
import Row from './../row/Row.js'

class ClassesColumn extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <h2 className='classes_header'>{this.props.name}</h2>
                <Row className='row odd'></Row>
                <Row className='row even'></Row>
                <Row className='row odd'></Row>
                <Row className='row even'></Row>
                <Row className='row odd'></Row>
                <button className='another_class' type="button">Add another class</button>
                <button className='check_courses' type="button">Check Courses!</button>
            </div>
        );
    }
}

export default ClassesColumn;
