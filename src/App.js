import React, { useState } from 'react';
import './style.css';

// Функция форматирования даты в YYYY-MM-DD
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function Form(props) {
  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="form">
          <div className="formDate">
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input
              name="inputDate"
              type="date"
              value={}
              onChange={handleInputChange}
            />
          </div>
          <div className="formSteps">
            <label htmlFor="steps">Пройдено (км)</label>
            <input
              name="inputSteps"
              type="number"
              value={}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">OK</button>
          </div>
        </div>
      </form>
    </>
  );
}

function Records(props) {
  const [records, setRecords] = useState([]);
  const [edit, setEdit] = useState();
  const [form, setForm] = useState({ date: '', steps: '' });

  return <></>;
}

export default function App() {
  return (
    <div>
      <Form />
      <Records />
    </div>
  );
}
