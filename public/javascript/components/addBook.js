import { html, render } from 'uhtml';
import menu from '../extensions/menu';

export default {
  url : '/add-book',
  callback(update) {
    render(document.querySelector('.container'), html`
      ${ menu(update) }
      <h1>Add Book</h1>

      <form id="addbook" onsubmit="${(e) => {
        e.preventDefault();

        var isbn = $('#isbn').val();
        var title = $('#title').val();
        var author = $('#author').val();

        $.ajax({
            url: 'http://localhost:5001/firebase-dev-test-123/us-central1/saveBook',
            type: 'POST',
            data: {
              "isbn": isbn,
              "title": title,
              "author": author
            },
            success: function(result){
                if (result){
                    $('#msg').html('Book record successfully saved');
                }
            },
            error: function(){
                $('#msg').html('Error saving');
            }
        });        

      }
      }">
      <table style="width:100%" border="0">
      <tr>
        <td class="formElement label">ISBN</td>
        <td><input type="text" id="isbn" name="isbn" required="true" style="width:270px;" class="formElement field"></td>
      </tr>
      <tr>
        <td class="formElement label">Title</td>
        <td><input type="text" id="title" name="title" required="true" style="width:270px;" class="formElement field"></td>
      </tr>
      <tr>
        <td class="formElement label">Author</td>
        <td><input type="text" id="author" name="author" required="true" style="width:270px;" class="formElement field"></td>
      </tr>
      <tr>
        <td colspan="2"><input type="submit" value="Save"></td>
      </tr>
      </table>
      <div id="msg"></div>
    </form>
  `);
  }
};