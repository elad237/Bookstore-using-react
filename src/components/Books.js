import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Inputs from './Inputs';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
            key={book.item_id}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <Inputs />
    </div>
  );
};

export default Books;
