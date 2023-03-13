import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="container-fluid p-5">
      <h2 className="text-secondary">Categories</h2>
      <button type="button" className="btn-blue text-uppercase m-3" onClick={handleClick}>Check status</button>
    </div>
  );
}

export default Categories;
