import { html, render } from 'uhtml';
import menu from '../extensions/menu';

export default {
  url : '/',
  callback(update) {
    render(document.querySelector('.container'), html`
      ${ menu(update) }
      <h1>Home</h1>
      <p>Hi there, the following app needs a couple of updates and we are
      wondering if you can fix them. The test should take around 2 hours. If you
      feel you are not able too fix it in that time, please just stop and
      explain what the reason was that you couldn't complete it in time</p>
      <h2>Things to improve</h2>

      <h4>Active menu item</h4>
      <p>Add an active state to the menu, currently we cannot see on which page
      we are. Styling can be done as one sees fit</p>

      <h4>Add the <em>add book page</em></h4>
      <p>Currently we cannot add a new book to the list, please make add the
      page with the following fields: <em>Author, Title and ISBN</em>. Styles
      can be found in form.css, or maybe created manually, validation may be
      done with the native html validator, each field is mandatory</p>

      <h4>Create a cloud function</h4>
      <p>Please create a cloud function in the /functions folder that will
      convert the ISBN number into an url. You can find the url in the
      books component.</p>

      <h4>Load thumbnail for each book</h4>
      <p>Please make sure that each book loads a thumbnail, currently there is
      one missing</p>

      <h4>Update credentials and deploy on own account (bonus)</h4>
      <p>Once done, please update the credentials with the data from one of
      your own projects and deploy it on the firebase url provided by the project</p>
    `);
  }
};