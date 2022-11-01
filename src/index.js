/* eslint-disable import/extensions */
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const list = document.querySelector('.list-item');

const tasks = [
  {
    description: 'clean house',
    complete: false,
    index: 6,
  },
  {
    description: 'learn english',
    complete: true,
    index: 5,
  },
];

const render = (task) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h3>
        <input type="checkbox">
            ${task.description}
    </h3>
        <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
  div.classList.add('list');
  list.appendChild(div);
};

document.addEventListener('DOMContentLoaded', () => {
  tasks.sort((a, b) => a.index - b.index)
    .map((item) => render(item));
});
