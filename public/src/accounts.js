function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    if (a.name.last > b.name.last) {
      return 1;
    }
    if (a.name.last < b.name.last) {
      return -1;
    }
    return 0;
  });
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const subtotal = book.borrows.filter(
      (borrowed) => borrowed.id === account.id
    );
    total += subtotal.length;
    return total;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const found = book.borrows.find(
        (borrowed) => borrowed.returned === false && borrowed.id === account.id
      );
      return found !== undefined;
    })
    .map((book) => {
      book.author = authors.find((author) => author.id === book.authorId);
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
