import { html, render } from 'uhtml';
import menu from '../extensions/menu';

export default {
  url : '/add-book',
  callback(update) {
    render(document.querySelector('.container'), html`
      ${ menu(update) }
      <h1>Add Book</h1>
      <form onsubmit="${
        () => {
          $.ajax({
            type: "POST",
            url: "localhost:5001/add",
            data: {
              "author": $('#author_input').val(),
              "title": $('#title_input').val(),
              "isbn": $('#isbn_input').val()
            },
            success: function(data, status, xhr) {
              console.log(data);
            },
            error: function(jqXhr, textStatus, errorMessage) {
              console.log(errorMessage);
            }
          });
        }
      }">
        <p class="formElement full">Author</p>
        <input id="author_input" required></input>
        <p class="formElement full">Title</p>
        <input id="title_input" required></input>
        <p class="formElement full">ISBN</p>
        <input id="isbn_input" required></input>
        <input id="submit_button" class="formElement full" type="submit">
      </form>
    `);
  }
};