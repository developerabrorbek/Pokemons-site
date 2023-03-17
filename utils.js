"use strict";

function renderUi(arr) {
  cards.innerHTML = "";

  arr.forEach((item) => {
    let copy = templ.cloneNode(true);
    let elCard = copy.querySelector(".main-card");
    let image = copy.querySelector(".main-card__img");
    let name = copy.querySelector(".pokemon-name");
    let subName = copy.querySelector(".pokemon-subname");
    let weight = copy.querySelector(".pokemon-weight");
    let age = copy.querySelector(".pokemon-age");

    image.setAttribute("src", `${item.img}`);
    name.textContent = item.name;
    subName.textContent = item.type.join(" ");
    weight.textContent = item.weight;
    age.textContent = item.avg_spawns;

    cards.appendChild(elCard);
  });
}

const elCreator = (tagName, textContent) => {
  let newEl = document.createElement(tagName);

  if (textContent) {
    newEl.innerHTML = textContent;
  }

  return newEl;
};

function optionCreator(arr1) {
  let candies = [];
  arr1.forEach((item) => {
    if (!candies.includes(item.candy)) {
      candies.push(item.candy);
    }
  });

  candies.forEach((item) => {
    let elOption = elCreator("option", item);
    elSelectName.appendChild(elOption);
  });
}

function sortByName(arr) {
  arr.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } 
    if(a.name.toLowerCase() < b.name.toLowerCase()){
      return -1;
    }

    return 0;
  });

  return arr;
}

function sortByAge(arr) {
  arr.sort((a, b) => {
    if (a.avg_spawns > b.avg_spawns) {
      return 1;
    } else {
      return -1;
    }
  });

  return arr;
}

function sortBySwitch(arr, switchValue) {
  switch (switchValue) {
    case 1:
      sortByName(arr);
      break;
    case 2:
      sortByName(arr).reverse();
      break;
    case 3:
      sortByAge(arr);
      break;
    case 4:
      sortByAge(arr).reverse();
      break;
  }

  return arr;
}
