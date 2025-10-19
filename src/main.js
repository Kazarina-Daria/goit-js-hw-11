import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');



form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
 

  const searchText = event.target.elements['search-text'].value.trim();

 showLoader();

  getImagesByQuery(searchText)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          messageColor: '#fff',
          position: 'topRight',
          theme: 'light',
          maxWidth: '330px',
          color: 'white',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      console.error('Something went wrong');
      iziToast.error({
        message: 'Something went wrong',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        position: 'topRight',
        maxWidth: '330px',
      });
    })
    .finally(() => {
   event.target.reset();
      hideLoader();
    });

}
