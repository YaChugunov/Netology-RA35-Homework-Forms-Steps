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
//
// --- --- --- --- ---
//
class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.form = {
      inputDate: formatDate(new Date()),
      inputSteps: 0,
    };
    this.records = {
      row: [
        {
          id: null,
          recordDate: null,
          recordSteps: null,
        },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.form.inputDate, this.form.inputSteps);
    // this.setState((prevState) => ({
    //   records: [
    //     ...prevState.records,
    //     [this.form.inputDate, this.form.inputSteps],
    //   ],
    // }));
    // console.log(this.row);
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    console.log(name, value);

    this.setState({
      [name]: value,
    });
  };

  render() {
    const data = [{ name: 'test1' }, { name: 'test2' }];
    const listItems = data.map((d) => (
      <tr key={d.name}>
        <td>{d.name}</td>
        <td></td>
        <td></td>
      </tr>
    ));

    return (
      <>
        <form action="" onSubmit={this.handleFormSubmit}>
          <div className="form">
            <div className="formDate">
              <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
              <input
                name="inputDate"
                type="date"
                value={this.form.inputDate}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="formSteps">
              <label htmlFor="steps">Пройдено (км)</label>
              <input
                name="inputSteps"
                type="number"
                value={this.form.inputSteps}
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
          <tbody>{listItems}</tbody>
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
        <Item date={this.props.date} steps={this.props.steps} />
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
