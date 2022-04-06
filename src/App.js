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

  return [day, month, year].join('.');
}
//
// --- --- --- --- --- --- --- --- --- ---
//
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
Form.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
//
// --- --- --- --- --- --- --- --- --- ---
//
function SingleRecord(props) {
  const { recordID, recordDate, recordSteps } = props.item;

  return (
    <>
      <tr key={recordID}>
        <td>{recordDate}</td>
        <td>{recordSteps}</td>
        <td></td>
      </tr>
    </>
  );
}
//
// --- --- --- --- --- --- --- --- --- ---
//
function AllRecords(props) {
  const { steps } = props;

  const handleRemove = (id) => props.onRemove(id);
  const handleEdit = (id) => props.onEdit(id);

  const sortedSteps = steps.sort((a, b) => {
    if (Date.parse(a.date) < Date.parse(b.date)) return 1;
    return -1;
  });

  return (
    <>
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
        <tbody>
          {sortedSteps.map((o) => (
            <SingleRecord
              item={o}
              onEdit={() => handleEdit(o.id)}
              onRemove={() => handleRemove(o.id)}
              key={o.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
//
// --- --- --- --- --- --- --- --- --- ---
//
function MainComponent(props) {
  const [records, setRecords] = useState([]);
  const [edit, setEdit] = useState();
  const [form, setForm] = useState({ inputDate: '', inputSteps: '' });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    console.log('>> ' + value);
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

  const handleRemove = (id) => {
    setSteps((prevSteps) => prevSteps.filter((o) => o.id !== id));
  };

  return (
    <>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <AllRecords steps={records} onRemove={handleRemove} />
    </>
  );
}
//
// --- --- --- --- --- --- --- --- --- ---
//
export default function App() {
  return (
    <div>
      <MainComponent />
    </div>
  );
}
