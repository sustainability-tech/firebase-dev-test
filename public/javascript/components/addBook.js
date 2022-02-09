import { html, render } from 'uhtml';
import menu from '../extensions/menu';

export default {
  url : '/add-book',
  callback(update) {
    render(document.querySelector('.container'), html`
      ${ menu(update) }
      <h1>Add Book</h1>
    `);
  }
};