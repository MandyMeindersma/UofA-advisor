import React from 'react';
import './ClassesColumn.css';
import Row from './../row/Row.js'

class ClassesColumn extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <h2>{this.props.name}</h2>
                <Row className='row odd'></Row>
                <Row className='row even'></Row>
                <Row className='row odd'></Row>
                <Row className='row even'></Row>
                <Row className='row odd'></Row>
            </div>
        );
    }
}

export default ClassesColumn;
