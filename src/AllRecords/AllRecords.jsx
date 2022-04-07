import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SingleRecord from '../SingleRecord/SingleRecord';

export default function AllRecords(props) {
  const { records } = props;

  const handleRemove = (id) => {
    records.onRemove(id);
  };

  const sortedRecords = records.sort((a, b) => {
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
          {sortedRecords.map((obj) => (
            <SingleRecord
              record={obj}
              onRemove={() => handleRemove(obj.id)}
              key={obj.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
AllRecords.propTypes = {
  records: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
