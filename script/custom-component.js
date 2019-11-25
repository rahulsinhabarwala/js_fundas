//HTMLElement register an custom element with the browser



//basic example
class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1>Hello world</h1>`;
    }
}
customElements.define('my-component', MyComponent);

//second example

const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });
shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<button id="button"><slot></slot> tomato</button>`;



//third example

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'A Farewell to Arms', author: 'Ernest Hemingway' },
    { title: 'Catch 22', author: 'Joseph Heller' }
  ];
  
  function appendBooks(templateId) {
    const booksList = document.getElementById('books');
    const fragment = document.getElementById(templateId);
    
    // Clear out the content from the ul
    booksList.innerHTML = '';
    
    // Loop over the books and modify the given template
    books.forEach(book => {
      // Create an instance of the template content
      const instance = document.importNode(fragment.content, true);
      // Add relevant content to the template
      instance.querySelector('.title').innerHTML = book.title;
      instance.querySelector('.author').innerHTML = book.author;
      // Append the instance ot the DOM
      booksList.appendChild(instance);
    });  
  }
  
  
  document.getElementById('templates').addEventListener('change', (event) => appendBooks(event.target.value));
  
  appendBooks('book-template');



//My simple example
const fragment = document.querySelector('#simple-template');
let instance = document.importNode(fragment.content, true);W
document.querySelector('.host').appendChild(instance);
document.querySelector('.myDiv').innerHTML = 'sahil'
  


      
