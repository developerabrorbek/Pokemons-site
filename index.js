"use strict";

let elForm = document.querySelector(".form-one");
const cards = document.querySelector(".main-cards");
let templ = document.querySelector(".template").content;

let elSelectName = document.querySelector(".name-select");
let elSearch = document.querySelector(".input-search");
let elSelectSort = document.querySelector(".select-sort");

let filteredArray = undefined;
let pokemonsClone = pokemons;

renderUi(pokemons);

optionCreator(pokemons);

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let selectValueName = elSelectName.value;
  let selectValueSort = Number(elSelectSort.value);

  if (selectValueName == "All") {
    renderUi(pokemons);

    if (selectValueSort != 0) {
      let newArr = [];

      sortBySwitch(pokemonsClone, selectValueSort)

      renderUi(pokemonsClone);
    }
  } else {
    filteredArray = pokemonsClone.filter((item) => {
      return item.candy == selectValueName;
    });

    sortBySwitch(filteredArray, selectValueSort)

    renderUi(filteredArray);
  }
});

elSearch.addEventListener("input", (evt) => {
  let inputValue = elSearch.value;
  let filteredArraySearch = [];

  if (filteredArray) {
    filteredArraySearch = filteredArray.filter((item) => {
      return item.name.toLowerCase().includes(inputValue);
    });
  } else {
    filteredArraySearch = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(inputValue);
    });
  }

  renderUi(filteredArraySearch);
});
