const baseURL = "https://restcountries.com/v3.1/all";
const countriesCardTempleat = document.querySelector(
  "[data-countries-template]"
);
const countriesCardCountainer = document.querySelector("[data-container]");
const searchInput = document.querySelector("[data-search]");


let countries = []

searchInput.addEventListener("input", handleSearch);

function handleSearch(event) {
  // Get the search term entered by the user
  const searchTerm = event.target.value.toLowerCase();

  // Filter the countries based on the search term
  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm) ||
           country.region.toLowerCase().includes(searchTerm);
  });

  // Clear the existing cards from the container
  countriesCardCountainer.innerHTML = "";

  // Display the filtered countries
  filteredCountries.forEach((country) => {
    countriesCardCountainer.append(country.element);
  });
}


// ***********************
//  theme toggle
// ***********************

// const themeMode = document.querySelectorAll('[data-theme]')
// console.log(themeMode)

// themeMode.addEventListener('click', (event) =>{
//     const value = event.target
//     console.log(value)
// })

countriesCardCountainer.addEventListener("load", creatCards);
creatCards();

function creatCards() {
  let countriesXhr = new XMLHttpRequest();
  countriesXhr.open("GET", baseURL, true);
  countriesXhr.onload = () => {
    let countriesJSON = countriesXhr.responseText;
    let allCountries = JSON.parse(countriesJSON);

    countries = allCountries.map((originalCountry) => {
      const card =
        countriesCardTempleat.content.cloneNode(true).firstElementChild;

      let flag = card.querySelector("[data-country-flag]");
      flag.src = originalCountry.flags.png;
      let countryName = card.querySelector("[data-country-name]");
      let population = card.querySelector("[data-country-population]");
      let region = card.querySelector("[data-country-region]");
      let capital = card.querySelector("[data-country-capital]");

      countryName.textContent += originalCountry.name.official;
      population.textContent += originalCountry.population;
      region.textContent += originalCountry.region;
      capital.textContent += originalCountry.capital;

      //   console.log(countryName);

      countriesCardCountainer.append(card);

      return {
        name: originalCountry.name.official,
        // capital: originalCountry.capital,
        region: originalCountry.region,
        // flag: country.flag,
        // currencies: country.currencies,
        element: card,
      };
    });
    // console.log(countries)

    // *****************************************************
    // let htmlCode = "";

    //  countries = allCountries.map(element => {
    //     const card = document.querySelector('.card')
    //     htmlCode +=
    //     `
    // <div class="card">

    //       <img src="${element.flags.png}" alt="country-flag">
    //       <h5 class="name">${element.name.common}</h5>
    //       <ul class="basic-list">
    //         <li><strong>Population: </strong>${element.population}</li>
    //         <li><strong>Region: </strong>${element.region}</li>
    //         <li><strong>Capital: </strong>${element.capital}</li>
    //       </ul>
    // </div>
    // `
    // // console.log(element)
    // return {name:element.name, capital:element.capital, region:element.region, flag:element.flag, currencies:[element.currencies], element: card}

    // });
    // console.log(countries)
    // document.querySelector('.cards').innerHTML = htmlCode
    // ***************************************************
  };
  countriesXhr.send();
}
