import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ItemClass from '../ItemClass/ItemClass';

export default function ItemSingle(props) {
  const { date, value } = props.record;

  return (
    <>
      <tr>
        <td>{moment(date).format('DD.MM.YYYY')}</td>
        <td>{value}</td>
        <td>
          <span className="remove" onClick={props.onRemove}>
            X
          </span>
        </td>
      </tr>
    </>
  );
}
SingleRecord.propTypes = {
  record: PropTypes.instanceOf(ItemClass).isRequired,
  onRemove: PropTypes.func.isRequired,
};
