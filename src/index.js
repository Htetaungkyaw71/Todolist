/* eslint-disable import/extensions */
import './style.css';
import {
  render, add, checkLocalStorage, tasks, ChangeEdit, removeDom,
} from './script.js';
import {
  checkbox
} from "./complete.js";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

document.getElementById('addForm').onsubmit = (e) => {
  e.preventDefault();
  const { value } = e.target.task;
  add({
    id: Date.now().toString(),
    description: value,
    complete: false,
    index: tasks.length,
  });
  e.target.task.value = '';
};

document.addEventListener('DOMContentLoaded', () => {
  checkLocalStorage();
  tasks.sort((a, b) => a.index - b.index)
    .map((item) => render(item));
  ChangeEdit();
  removeDom();
  checkbox()
});
