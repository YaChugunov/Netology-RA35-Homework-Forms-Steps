import React, { useState } from 'react';
import './style.css';

function FormInput() {
  const [form, setForm] = useState({
    date: new Date(),
    steps: 0,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    console.dir(name);
    return <Item date={form.date} steps={form.steps} />;
  };

  const handleInputChange = (e) => {
    // e.preventDefault(); // При нажатии ничего не происходит
    const inputName = e.target.name;
    const type = e.target.type;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setForm((prevState) => ({ ...prevState, [inputName]: value }));
    console.log(value, type);
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="form">
          <div className="formDate">
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input name="date" type="date" onChange={handleInputChange} />
          </div>
          <div className="formSteps">
            <label htmlFor="steps">Пройдено (км)</label>
            <input
              name="steps"
              type="number"
              value={form.steps}
              onChange={handleInputChange}
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
          <ItemList />
        </tbody>
      </table>
    </>
  );
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <tr>
          <td>{this.props.date}</td>
          <td>{this.props.steps}</td>
          <td></td>
        </tr>
      </>
    );
  }
}

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      steps: this.props.steps,
    };
  }
  render() {
    return (
      <>
        <Item date={this.state.date} steps={this.state.steps} />
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
