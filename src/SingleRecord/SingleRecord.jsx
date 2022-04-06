import React from 'react';
import PropTypes from 'prop-types';

// Класс элемента таблицы записей
export default class Record {
  constructor(date, steps) {
    this.id = nanoid();
    this.date = date;
    this.steps = steps;
  }
}

function SingleRecord(props) {
  const { date, steps } = props.record;

  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{steps}</td>
        <td>
          <span onClick={props.onRemove}>X</span>
        </td>
      </tr>
    </>
  );
}
SingleRecord.propTypes = {
  record: PropTypes.instanceOf(Record).isRequired,
  onRemove: PropTypes.func.isRequired,
};
