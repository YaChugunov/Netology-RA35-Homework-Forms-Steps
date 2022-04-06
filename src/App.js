import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

// Функция форматирования даты в YYYY-MM-DD
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, month].join('-');
}

function Form(props) {
  const { form, onSubmit, onChange } = props;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="form">
          <div className="formDate">
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input
              name="inputDate"
              type="date"
              value={form.inputDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="formSteps">
            <label htmlFor="steps">Пройдено (км)</label>
            <input
              name="inputSteps"
              type="number"
              value={form.inputSteps}
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
  const [form, setForm] = useState({ inputDate: '', inputSteps: '' });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    console.log(value);
  };

  const handleSubmit = () => {
    const { steps } = form;
    const tmpDate = formatDate(form.inputDate);
    // if (!tmpDate.isValid()) return;
    // const formdate = tmpDate.toDate();
    console.log(tmpDate);

    setForm({ inputDate: '', inputSteps: '' });
    setEdit(null);
  };

  return (
    <>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
}

Form.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function App() {
  return (
    <div>
      <Records />
    </div>
  );
}
