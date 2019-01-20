import React from 'react';
import './ProgramColumn.css';

class ProgramColumn extends React.Component {

    constructor(props) {
      super(props);
      this.getFacultyValue = this.getFacultyValue.bind(this);
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
                    <select name="department_dropdown">
                      {this.department_options}
                    </select>
                  </div>
                </div>
                <h2>Program</h2>
                <div className="select_dropdown">
                  <div className="select">
                    <select name="program_dropdown">
                      <option value="Honours">Honours</option>
                      <option value="Open Spec">Open Spec</option>
                      <option value="Software Spec">Software Spec</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                </div>
            </div>
        );
    }
}

export default ProgramColumn;
