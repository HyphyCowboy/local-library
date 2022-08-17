function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // let borrowed = []
  // let returned = []
  //  books.forEach( book => {
  //   if ( book.borrows[0].returned === false ) borrowed.push(book)
  //   else returned.push(book)
  //  } )
  //  return [borrowed,returned]
  // }
  return books.reduce(
    (res, book) => {
      if (book.borrows[0].returned) {
        res[1].push(book);
      } else {
        res[0].push(book);
      }
      return res;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
let result = []
  let borrowers = book.borrows  
  borrowers.forEach( borrow => {
    let account = accounts.find( account => account.id === borrow.id )
    let obj = account
    obj[ 'returned' ] =  borrow.returned
    result.push(obj)
  })
  return result.slice(0,10)
}
// {
//  return book.borrows
//   .map((borrow) => {
//    let account = accounts.find((account) => account.id === borrow.id);
//    return { ...borrow, ...account };
//   })
//   .slice(0, 10);

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
