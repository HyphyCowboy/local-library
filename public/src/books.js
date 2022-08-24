function findById(array, id){
  return array.find((object) => object.id === id);
}

function findAuthorById(authors, id) {
return findById(authors, id)
}
//   return authors.find((author) => author.id === id);
// }

// function findBookById(books, id) {
// //   return books.find((book) => book.id === id);
// // }

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
 return book.borrows
  .slice(0, 10)
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
}

module.exports = {
  findAuthorById,
  findBookById: findById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
