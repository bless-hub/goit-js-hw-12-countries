import { renderList, renderCard } from './Renderlist';
import { showMessage } from './Errortoastr';

const refs = {
  input: document.querySelector('#input'),
  list: document.querySelector('.country_list'),
  url: `https://restcountries.eu/rest/v2/name/`,
};

const fetchCountries = function(searchQuery) {
  refs.list.innerHTML = '';
  fetch(`${refs.url}${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      if (data.length >= 2 && data.length <= 10) {
        renderList(data);
      }
      if (data.length === 1) {
        renderCard(data);
      } else {
        showMessage();
      }
    });
};

export { refs, fetchCountries };
