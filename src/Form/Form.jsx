import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const { form, onSubmit, onChange } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <div className="formDate">
            <label htmlFor="inputDate">Дата (ДД.ММ.ГГ)</label>
            <input
              name="inputDate"
              type="date"
              value={form.inputDate}
              onChange={handleChange}
            />
          </div>
          <div className="formValue">
            <label htmlFor="inputValue">Пройдено (км)</label>
            <input
              name="inputValue"
              type="number"
              value={form.inputValue}
              onChange={handleChange}
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
