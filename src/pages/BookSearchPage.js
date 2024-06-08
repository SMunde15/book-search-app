import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const BookSearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchBooks = async () => {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setBooks(response.data.docs);
      };
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="book-results">
        {books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
