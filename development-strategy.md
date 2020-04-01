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