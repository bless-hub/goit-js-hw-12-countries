import './styles.scss';
import debounce from 'lodash.debounce';
import { refs, fetchCountries } from './js/fetchCountries.js';

refs.input.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(input.value);
  }, 500),
);
