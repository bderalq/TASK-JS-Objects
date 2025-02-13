function createBook(title, author, publishedYear, genre) {
  let book = {
    title : title, 
    author : author,
    publishedYear : publishedYear,
    genre : genre
  } 
  return book;
}

const book = createBook();

function printBookTitleAndYear(book) {
  // write your code here...
  console.log(book.title);
  console.log(book[publishedYear]);
}

function addPageCount(book, pageCount) {
  // write your code here...
  book.pageCount = pageCount;
  return book;
}


function addISBN(book, ISBN) {
  // write your code here...
  book.ISBN = ISBN;
  return book;
}


function updatePublishedYear(book, newYear) {
  // write your code here...
  book.publishedYear = newYear;
  return book;
}

function addSecondAuthor(book, additionalAuthor) {
  book.author = [book.author, additionalAuthor];
  return book;
}

/**
 * 🌶️🌶️🌶️ addReview
 *
 * - receives a book object which MIGHT have a reviews property
 * - receives a reviewer
 * - receives a comment
 *
 * Create a new review object made up of a `reviewer` and `comment`
 *  and add it to the book's reviews array
 *
 * - returns the book object with the new review included in the reviews array
 */
function addReview(book, reviewer, comment) {
  // write your code here
}

module.exports = {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
  addReview,
};
