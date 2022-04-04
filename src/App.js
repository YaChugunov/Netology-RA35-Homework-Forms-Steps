import React, { useState } from 'react';
import './style.css';

class StepsFormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      steps: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <div className="form">
          <div className="formDate">
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input name="date" type="date" onChange={this.handleInputChange} />
          </div>
          <div className="formSteps">
            <label>Пройдено (км)</label>
            <input
              name="steps"
              type="number"
              value={this.state.steps}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">OK</button>
          </div>
        </div>
      </form>
    );
  }
}

class StepsRecordsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recorddate: '',
      recordsteps: '',
    };
  }

  // Обрабатываем изменение HEX-кода цвета фона
  onSubmit = (e) => {
    e.preventDefault();

    const listItems = items.map((item) => (
      <tr>
        <td>{listitems}</td>
        <td>{listitems}</td>
        <td></td>
      </tr>
    ));
  };

  const;
  render() {
    return (
      <>
        <tr>
          <td>{this.state.recorddate}</td>
          <td>{this.state.recordsteps}</td>
          <td></td>
        </tr>
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
        <StepsFormInput />
        <table
          border="1"
          cellSpacing="0"
          cellPadding="2"
          className="Steps-RecordsList"
        >
          <thead>
            <tr>
              <th>Дата (ДД.ММ.ГГ)</th>
              <th>Пройдено (км)</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <StepsRecordsList />
          </tbody>
        </table>
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
