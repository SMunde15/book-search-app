import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BookSearchPage from "./pages/BookSearchPage";
import BookshelfPage from "./pages/BookshelfPage";
import "./App.css";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBooks);
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="links">
            <Link to="/">Search Books</Link>
          </div>
          <div>
            <Link to="/bookshelf" className="bookshelf-link">
              My Bookshelf
            </Link>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BookSearchPage addToBookshelf={addToBookshelf} />}
          />
          <Route
            path="/bookshelf"
            element={<BookshelfPage books={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
