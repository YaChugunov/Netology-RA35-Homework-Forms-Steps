import React, { useState } from 'react';
import './style.css';

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}


function TableRow(props) {

  return (
    <>
      <tr key={props.id}>
        <td>{props.date}</td>
        <td>{props.steps}</td>
        <td></td>
      </tr>
    </>
  );
}
//
// --- --- --- --- ---
//
class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          id: null,
          recordDate: null,
          recordSteps: null,
        },
      ],
      inputDate: null,
      inputSteps: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputDate, this.state.inputSteps);
    // this.setState((prevState) => ({
    //   records: [
    //     ...prevState.records,
    //     [this.state.inputDate, this.state.inputSteps],
    //   ],
    // }));
    // console.log(this.row);

    const data = [
      { id: 1, date: this.state.inputDate, steps: this.state.inputSteps },
    ];
    const listItems = data.map((d) => (
      <tr key={d.id}>
        <td>{d.date}</td>
        <td>{d.steps}</td>
        <td></td>
      </tr>
    ));
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // console.log(name, value);

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleFormSubmit}>
          <div className="form">
            <div className="formDate">
              <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
              <input
                name="inputDate"
                type="date"
                value={this.state.inputDate}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="formSteps">
              <label htmlFor="steps">Пройдено (км)</label>
              <input
                name="inputSteps"
                type="number"
                value={this.state.inputSteps}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button type="submit">OK</button>
            </div>
          </div>
        </form>
        <table
          border="1"
          cellSpacing="0"
          cellPadding="2"
          className="Steps-records"
        >
          <thead>
            <tr>
              <th>Дата (ДД.ММ.ГГ)</th>
              <th>Пройдено (км)</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody><Item id={} date={this.props.date} steps={this.props.steps} />
</tbody>
        </table>
      </>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const item = (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.steps}</td>
        <td></td>
      </tr>
    );
    return <>{item}</>;
  }
}

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <TableRow date={this.props.date} steps={this.props.steps} />
      </>
    );
  }
}

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <FormInput />
      </>
    );
  }
}

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
