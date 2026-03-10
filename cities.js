const citySelect = document.getElementById("city");

const cities = [

"New York",
"Los Angeles",
"Chicago",
"Houston",
"Miami",

"London",
"Manchester",
"Liverpool",
"Birmingham",

"Paris",
"Lyon",
"Marseille",
"Nice",

"Berlin",
"Hamburg",
"Munich",
"Frankfurt",

"Rome",
"Milan",
"Naples",
"Florence",

"Madrid",
"Barcelona",
"Valencia",
"Seville",

"Warsaw",
"Krakow",
"Wroclaw",
"Gdansk",

"Kyiv",
"Lviv",
"Odesa",
"Kharkiv",
"Dnipro",

"Toronto",
"Vancouver",
"Montreal",
"Ottawa",

"Sydney",
"Melbourne",
"Brisbane",
"Perth",

"Tokyo",
"Osaka",
"Nagoya",

"Beijing",
"Shanghai",
"Shenzhen",

"Seoul",
"Busan",

"Bangkok",
"Phuket",

"Dubai",
"Abu Dhabi",

"Doha",

"Istanbul",
"Ankara",

"Tel Aviv",
"Jerusalem",

"Cairo",
"Alexandria",

"Mexico City",
"Cancun",

"Rio de Janeiro",
"Sao Paulo",

"Buenos Aires",

"Lima",

"Santiago",

"Cape Town",
"Johannesburg",

"Nairobi",

"Singapore",

"Hong Kong"

];

cities.sort();

cities.forEach(city => {

let option = document.createElement("option");

option.value = city;
option.textContent = city;

citySelect.appendChild(option);

});