import http from '../http-common';

const getSrvc = () => http.get('/apps/gCkgMJadyIOiLMqiR7An/books');

const addSrvc = (data) => http.post('/apps/gCkgMJadyIOiLMqiR7An/books', data);

const deleteSrvc = (id) => http.delete(`/apps/gCkgMJadyIOiLMqiR7An/books/${id}`);

const BookSrvc = {
  getSrvc,
  addSrvc,
  deleteSrvc,
};

export default BookSrvc;
