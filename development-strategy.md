# BookList: development strategy

Building this site one step at a time

---

## 0. Setup

- `index.html`: basic HTML layout and references to external files
- `font-awesome.css`: CSS stylesheet with font awesome icons
- `bootstrap.min.css`: https://bootswatch.com/ CSS stylesheet with Darkly theme
- `fonts/*`: folder with all font-awesome icon font files

---

## 1. Data & Log

- `data/book.js` & `log.js`

---

## 2. User Story: `Display books`

- A user can observe a table with the list of books previously added
- I wrote the code in `ui.js` and `handler.js`
- The handler calls the function responsible of displaying the `Book` objects to screen using a table HTML object, the handler is called using the `window.onload` property.

---

## 3. User Story: `Add book`

- A user can add a new book to the list
- I wrote the code in `ui.js` and `handler.js`
- The handler calls the function responsible of adding a `Book` object with the form input to screen using a table HTML object, the handler is called using the `submit` event.

---

## 4. User Story: `Delete book`

- A user can delete a book from the list
- I wrote the code in `ui.js` and `handler.js`
- The handler calls the function responsible of deleting a `Book` object from list, the handler is called using the `click` event for each element from the list.

---

## 5. User Story: `Validate book`

- A user must not be allowed to continue if any text field is empty, an alert message indicates the user if the request is successful or failed.
- I wrote the code in `ui.js` and `handler.js`
- Added code to validate the user input and alert the user with a message

---

## 6. User Story: `Local storage`

- A user must be able to store the list locally in their computer, so the next time the access our page the list can be retrieved from the hard drive and loaded to the webpage.
- I wrote the code in `ui.js`, `store.js` and `handler.js`
- Added code to perform all the required operations to retrieve, add and delete from the local storage and parse the result to objects in javascript language