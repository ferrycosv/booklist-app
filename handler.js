var handler = {
  addBook: function(event) {
    event.preventDefault();
    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    // Validate
    if (title === "" || author === "" || isbn === "") {
      UI.showAlert("Please fill in all fields", "danger");
    } else {
      // Instatiate book
      const book = new Book(title, author, isbn);

      // Add Book to UI
      UI.addBookToList(book);

      // Add book to store
      Store.addBook(book);

      // Show success message
      UI.showAlert("Book Added", "success");

      // Clear fields
      UI.clearFields();
      // log the user input
      log.push({
        handler: "addBook",
        book: JSON.parse(JSON.stringify(book))
      });
    }
  },
  deleteBook: function(event) {
    // Remove book from UI
    UI.deleteBook(event.target);
    // Remove book from store
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
    // Show success message
    UI.showAlert("Book Removed", "success");
    // log the user input
    log.push({
      handler: "deleteBook"
    });
  }
};
// Event: Display Books
window.onload = UI.displayBooks();
// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", e => {
  handler.addBook(e);
});
// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", e => {
  handler.deleteBook(e);
});
