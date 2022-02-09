import { html } from 'uhtml';

const items = [
  { label : 'Home', url : '/' },
  { label : 'Add new book', url : '/add-book' },
  { label : 'List all books', url : '/books' },
];

export default update => html`
<nav>
  <ul>
    ${items.map(item => html.for(item)`
      <li><a onclick="${ (ev) => {
        $('.active').removeClass('active');
        $(ev.srcElement).addClass('active');
        update(item.url);
      }}">${ item.label }</li>
    `)}
  </ul>
</nav>
`;