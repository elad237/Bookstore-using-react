const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

const initialState = {
  categories: [],
};

export function checkStatus() {
  return {
    type: CHECK_STATUS,
    payload: 'Under construction',
  };
}

export default function categoriesSlice(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      // eslint-disable-next-line
      return window.alert(action.payload);
    default:
      return state;
  }
}
