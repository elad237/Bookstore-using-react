import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const ADD = 'bookstore-react/booksReducer/ADD';
const REMOVE = 'bookstore-react/booksReducer/REMOVE';
const GET = 'bookstore-react/booksReducer/GET';

// API URL
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xKgONp1vYVZJzmgq5zMK/books';

// Reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return state.concat(action.meta.arg);
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case `${GET}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });
    default: return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});

// API requests
export const getBooks = createAsyncThunk(GET, async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const createBook = createAsyncThunk(ADD, async (book) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export const deleteBook = createAsyncThunk(REMOVE, async (itemId) => {
  await fetch(`${url}/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
