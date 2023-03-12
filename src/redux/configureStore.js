import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksSlice from './books/books';
import categoriesSlice from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
},
applyMiddleware(thunk));

export default store;
