import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    author: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = {
      item_id: v4(),
      title: state.title,
      author: state.author,
      category: '',
    };

    await dispatch(addBook(newBook));
    await dispatch(fetchBooks());

    setState({ title: '', author: '' });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={state.title} name="title" onChange={handleChange} />
        <input type="text" placeholder="Author" value={state.author} name="author" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
