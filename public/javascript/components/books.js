import { html, render } from 'uhtml';
import menu from '../extensions/menu';
import { getApp } from 'firebase/app';
import { getFirestore, collection, query, getDocsFromServer } from 'firebase/firestore';

export default {
  url : '/books',
  callback : async(update) => {

    const database = getFirestore(getApp());
    const books = await getDocsFromServer(query(collection(database, 'books')));

    let content = html`<p>There are no books available</p>`;

    function thumbnail(item) {
      const { isbn } = item.data();
      if (isbn) {
        const url = `https://covers.openlibrary.org/b/isbn/${ item.data().isbn }-S.jpg`;
        return html`<img src="${ url }" />`;
      }
      return html`<img src="/stylesheets/assets/picture-unavailable.jpg" width="38" height="58"/>`;
    }

    if (!books.empty) {
      content = html`<ul class="booksContainer">
        ${ books.docs.map(item => html.for(item)`
          <li>
            ${ thumbnail(item) }
            <h1>${ item.data().title }</h1>
            <p>${ item.data().author }</p>
          </li>
        `)}
      </ul>`;
    }

    render(document.querySelector('.container'), html`
      ${ menu(update) }
      <h1>Books</h1>
      ${ content }
    `);
  }
};