import React from 'react';
import './ProgramColumn.css';

class ProgramColumn extends React.Component {

    constructor(props) {
      super(props);
      this.getFacultyValue = this.getFacultyValue.bind(this);
      this.getDepartmentValue = this.getDepartmentValue.bind(this);
    }

    getFacultyOptions() {
        var faculty_options = []
        for (var i = 0; i < this.props.faculty.length; i++) {
            var name = this.props.faculty[i].faculty_name,
                value = this.props.faculty[i].id;
            faculty_options.push(<option
                value={value}
                key={name}>
                    {name}
                </option>)
        }
        return(faculty_options);
    }

    // lawl, this is front end hack because back end querying wasnt working
    getFacultyValue() {
        var value = document.getElementById("faculty_dropdown").value;
        fetch("http://localhost:8000/api/department")
          .then(res => res.json())
          .then(text => {
              this.setState({data: text});
              this.setState({promiseDone: true});
              this.parseDepartments(text, value);
          });
    }

    // lawl, this is front end hack because back end querying wasnt working
    parseDepartments(text, value) {
        var department_options = []
        for (var i = 0; i < text.length; i++) {
            if (String(text[i].faculty_id) === String(value)) {
                department_options.push(<option
                    value={text[i].id}
                    key={text[i].department_name}>
                        {text[i].department_name}
                    </option>)
            }
        }
        this.department_options = department_options;
        this.setState({ state: this.state });
    }

    // lawl, this is front end hack because back end querying wasnt working
    getDepartmentValue() {
        var value = document.getElementById("department_dropdown").value;
        fetch("http://localhost:8000/api/program")
          .then(res => res.json())
          .then(text => {
              this.setState({data: text});
              this.setState({promiseDone: true});
              this.parsePrograms(text, value);
          });
    }

    // lawl, this is front end hack because back end querying wasnt working
    parsePrograms(text, value) {
        var program_options = []
        for (var i = 0; i < text.length; i++) {
            if (String(text[i].department_id) === String(value)) {
                program_options.push(<option
                    value={text[i].id}
                    key={text[i].program_name}>
                        {text[i].program_name}
                    </option>)
            }
        }
        this.program_options = program_options;
        this.setState({ state: this.state });
    }

    componentDidMount() {
        this.getFacultyValue()
    }

    render() {

        return (
            <div className={this.props.className}>
                <h2 className='first'>Faculty</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="faculty_dropdown"
                        id="faculty_dropdown"
                        onChange={this.getFacultyValue}>
                      {this.getFacultyOptions()}
                    </select>
                  </div>
                </div>
                <h2>Department</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="department_dropdown"
                        id="department_dropdown"
                        onChange={this.getDepartmentValue}>
                      {this.department_options}
                    </select>
                  </div>
                </div>
                <h2>Program</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="program_dropdown"
                        id="program_dropdown">
                      {this.program_options}
                    </select>
                  </div>
                </div>
            </div>
        );
    }
}

export default ProgramColumn;
