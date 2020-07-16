import countryList from '../templates/Countrylist.hbs';
import countryCard from '../templates/Countrycard.hbs';
import { refs } from './fetchCountries';

export const renderList = elem => {
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', countryList(elem));
};

export const renderCard = elem => {
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', countryCard(elem));
};
