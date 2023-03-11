// Actions
const ADD = 'bookstore-react/booksReducer/ADD';
const REMOVE = 'bookstore-react/booksReducer/REMOVE';

// Reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
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
