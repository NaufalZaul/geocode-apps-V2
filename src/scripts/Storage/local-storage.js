import { dataCountry } from './data';

export default function moveToLocalStorage() {

  dataCountry.map(function (element) {
    localStorage.setItem(`${element.nameCountry}`, JSON.stringify(element))
  });

}