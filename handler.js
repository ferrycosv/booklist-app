var handler = {
  addBook: function(event) {
    event.preventDefault();
    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    // Instatiate book
    const book = new Book(title, author, isbn);
    // Add Book to UI
    UI.addBookToList(book);
    // Clear fields
    UI.clearFields();
  },
  deleteBook: function(event) {
    // Remove book from UI
    UI.deleteBook(event.target);
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
