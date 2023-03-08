// Actions
const CHECK = 'bookstore-react/categoriesReducer/CHECK';

// Reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return [
        ...state,
        'Under Construction',
      ];
    default: return state;
  }
}

// Action Creators
export const checkStatus = (book) => ({
  type: CHECK,
  book,
});
