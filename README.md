# Bookshelf React App

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- **Book Search Page:** Search for books and display results in real-time.
- **Personal Bookshelf Page:** Add books from search results to a personal bookshelf and store them persistently using localStorage.

## Tech Stack

- React
- CSS
- React Router
- Open Library API
- localStorage

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (v14 or above)
- [npm](https://www.npmjs.com/get-npm) (v6 or above) or [yarn](https://yarnpkg.com/)

### Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SMunde15/book-search-app.git
    cd book-search-app
    ```

2. **Install dependencies:**

    If you are using npm:

    ```bash
    npm install
    ```

    If you are using yarn:

    ```bash
    yarn install
    ```

### Running the Application

1. **Start the development server:**

    If you are using npm:

    ```bash
    npm start
    ```

    If you are using yarn:

    ```bash
    yarn start
    ```

2. **Open your browser:**

    Once the development server is running, open your browser and go to:

    ```
    http://localhost:3000
    ```

### Project Structure

- `src/`
  - `components/`
    - `BookCard.js` - Component for displaying individual book cards.
    - `Bookshelf.js` - Component for displaying books in the personal bookshelf.
    - `SearchBar.js` - Component for the search input field.
  - `pages/`
    - `BookSearchPage.js` - Page component for book search functionality.
    - `BookshelfPage.js` - Page component for displaying the personal bookshelf.
  - `App.js` - Main application component.
  - `App.css` - Main stylesheet for the application.

### API Reference

This project uses the [Open Library API](https://openlibrary.org/developers/api) for fetching book data.

- **Search Endpoint:**

    ```
    https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1
    ```

    - `q`: Name of the book.
    - `limit`: Number of results to return (set to 10).
    - `page`: Page number (set to 1).

