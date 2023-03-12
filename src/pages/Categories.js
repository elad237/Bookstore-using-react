import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h2>Categories</h2>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
}

export default Categories;
