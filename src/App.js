import React, { useState } from 'react';
import './style.css';

function FormInput() {
  const [form, setForm] = useState({
    date: '',
    steps: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    console.dir(name);
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
  );
}

function Item(props) {
  const [item, setItem] = useState({
    id: '',
    date: true,
    steps: null,
  });
  const item = (

  );
  return <>{item}</>;
}
function ItemList() {

  return <>{}</>;
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
}

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
