import React, { useState } from 'react';
import './style.css';

function StepsFormInput(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    console.dir(e);
  };

  return (
    <div class="Steps-FormInput">
      <form action="" onSubmit={onSubmit}>
        <input type="text" name="inputDate" />
        <input type="text" name="inputSteps" />
        <button>OK</button>
      </form>
    </div>
  );
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
