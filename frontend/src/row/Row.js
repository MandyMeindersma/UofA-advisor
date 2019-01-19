import React from 'react';
import './Row.css';

class Row extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <select name="class_name_dropdown">
                  <option value="CMPUT">CMPUT</option>
                  <option value="MATH">MATH</option>
                  <option value="PHYS">PHYS</option>
                  <option value="CHEM">CHEM</option>
                  <option value="BIOL">BIOL</option>
                  <option value="HIST">HIST</option>
                  <option value="ASTRO">ASTRO</option>
                </select>
                <select name="class_number_dropdown">
                  <option value="101">101</option>
                  <option value="174">174</option>
                  <option value="175">175</option>
                  <option value="101">101</option>
                  <option value="174">174</option>
                  <option value="175">175</option>
                </select>
            </div>
        );
    }
}

export default Row;
