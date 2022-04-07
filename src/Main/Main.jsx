import React, { useState } from 'react';
import moment from 'moment';

import Form from '../Form/Form';
import AllRecords from '../AllRecords/AllRecords';
import RecordItem from '../RecordItem/RecordItem';

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

export default function Main(props) {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ inputDate: '', inputSteps: '' });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    // console.log('>> ' + value);
  };

  const handleSubmit = () => {
    // const { steps } = form;
    // const formattedDate = formatDate(form.inputDate);
    const momentDate = moment(form.inputDate, 'YYYY-MM-DD');
    if (!momentDate.isValid()) return;
    const date = momentDate.format('DD.MM.YYYY');
    console.log(date, form.inputSteps);

    if (records.find((obj) => obj.date.valueOf() === date.valueOf())) {
      setRecords((prevRecords) =>
        prevRecords.map((obj) => {
          if (obj.date.valueOf() === date.valueOf())
            return new RecordItem(date, Number(form.inputSteps) + obj.steps);
          return obj;
        })
      );
    } else {
      setRecords((prevRecords) => [
        ...prevRecords,
        new RecordItem(date, Number(form.inputSteps)),
      ]);
    }

    setForm({ inputDate: '', inputSteps: '' });
  };

  const handleRemove = (id) => {
    setRecords((prevRecords) => prevRecords.filter((obj) => obj.id !== id));
  };

  return (
    <>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <AllRecords records={records} onRemove={handleRemove} />
    </>
  );
}
