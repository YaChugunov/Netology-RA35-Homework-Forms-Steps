import React from 'react';
import { nanoid } from 'nanoid';

// Класс элемента таблицы записей
export default class Record {
  constructor(date, steps) {
    this.id = nanoid();
    this.date = date;
    this.steps = steps;
  }
}
