import React, { useState } from 'react';
import './style.css';

import Main from './Main/Main';

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
export default function App() {
  return (
    <div>
      <Main />
    </div>
  );
}
