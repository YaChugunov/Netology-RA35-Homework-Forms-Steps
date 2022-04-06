import React, { useState } from 'react';
import moment from 'moment';

import Form from '../Form/Form';
import AllRecords from '../AllRecords/AllRecords';
import RecordItem from '../RecordItem/RecordItem';

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

    if (records.find((o) => o.date.valueOf() === date.valueOf())) {
      setRecords((prevRecords) =>
        prevRecords.map((o) => {
          if (o.date.valueOf() === date.valueOf())
            return new RecordItem(date, Number(form.inputSteps) + o.steps);
          return o;
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
    setRecords((prevRecords) => prevRecords.filter((o) => o.id !== id));
  };

  return (
    <>
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <AllRecords records={records} onRemove={handleRemove} />
    </>
  );
}
