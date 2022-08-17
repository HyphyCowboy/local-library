function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter(
    (book) =>
      book.borrows.filter((marked) => marked.returned === false).length > 0
  );
  return borrowed.length;
}

function getMostCommonGenres(books) {
  let genreCount = books.reduce((genreCount, book) => {
    if (!genreCount.hasOwnProperty(book.genre)) {
      genreCount[book.genre] = 1;
    } else genreCount[book.genre]++;
    return genreCount;
  }, {});
  return Object.keys(genreCount)
    .map((genre) => ({
      name: genre,
      count: genreCount[genre],
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
