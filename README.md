# Rest-Countries-API
Frontend Mentor - Rest Countries API Challenge 
# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot/Web%20capture_screenshot2.jpeg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid



### What I learned

# Search bar 
**JavaScript code Demonstration**
To understand how this code works, let's break it down into smaller pieces:

The `searchInput` variable refers to the search input element in your HTML.

The `handleSearch()` function is defined as the event handler for the input event of the search `input` element. This means that the function will be called every time the user types something in the search input.

Inside the `handleSearch()` function, the search term entered by the user is retrieved from the `event.target.value` property and converted to lower case using the `toLowerCase()` method. This is done to make the search case-insensitive, so that it will match regardless of the case of the search term.

The `filteredCountries` array is created by using the `filter()` method on the `countries` array. The `filter()` method takes a callback function as an argument, which is called for each element in the array. The callback function returns `true` if the element should be included in the filtered array, and `false` if it should be excluded. In this case, the callback function checks if the search term is contained in either the `name` or `region` property of the country object, using the `includes()` method. The `name` and `region` values are also converted to lower case to make the search case-insensitive.

The `innerHTML` property of the `countriesCardCountainer` element is set to an empty string, which removes all existing cards from the container.

The filtered countries are displayed by using the `forEach()` method to iterate over the `filteredCountries` array, and the `append()` method to append the `element` property of each country object to the `countriesCardCountainer`.


```html

```
```css

```
```js
let countries = [] // it return from map that was applied on the API load response after it parse the value.

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
```


### Continued development

-I still want to build the second page which will represent the information for an individual country by click on its card from the homepage.

-as well I must finish the part of filter by region task.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@Ismail-sync](hhttps://www.frontendmentor.io/profile/Ismail-sync)


## Acknowledgments

I'd like to thank my instructor, Mr. Joseph Boutros, for his guidance and patience with us, as well as all of his effort in teaching us coding from the ground up; and I'd also like to thank AL Hussein Technical University for establishing an upskilling program that developed our soft skills and English language skills while also teaching us new technical skills. 

