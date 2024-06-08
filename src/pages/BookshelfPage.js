import React from "react";
import BookShelf from "../components/BookShelf";


const BookshelfPage = ({ books }) => {
  return (
    <div >
      <h2>My Bookshelf</h2>

      <BookShelf books={books} />
    </div>
  );
};

export default BookshelfPage;
