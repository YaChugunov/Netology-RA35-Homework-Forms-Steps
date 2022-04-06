import React from 'react';
import PropTypes from 'prop-types';

import RecordItem from '../RecordItem/RecordItem';

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
  record: PropTypes.instanceOf(RecordItem).isRequired,
  onRemove: PropTypes.func.isRequired,
};
