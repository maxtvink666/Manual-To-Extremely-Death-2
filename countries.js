const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

const data = {

USA:[
"New York",
"Los Angeles",
"Chicago",
"Houston",
"Miami"
],

Germany:[
"Berlin",
"Hamburg",
"Munich",
"Frankfurt",
"Cologne"
],

France:[
"Paris",
"Lyon",
"Marseille",
"Nice",
"Bordeaux"
],

Italy:[
"Rome",
"Milan",
"Naples",
"Florence",
"Turin"
],

Spain:[
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Malaga"
],

Poland:[
"Warsaw",
"Krakow",
"Gdansk",
"Wroclaw",
"Poznan"
],

Ukraine:[
"Kyiv",
"Lviv",
"Odesa",
"Kharkiv",
"Dnipro"
],

UK:[
"London",
"Manchester",
"Birmingham",
"Liverpool",
"Leeds"
],

Canada:[
"Toronto",
"Vancouver",
"Montreal",
"Calgary",
"Ottawa"
],

Australia:[
"Sydney",
"Melbourne",
"Brisbane",
"Perth",
"Adelaide"
]

};

const countries = [

"Afghanistan","Albania","Algeria","Andorra","Angola","Argentina",
"Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
"Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
"Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil",
"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon",
"Canada","Chad","Chile","China","Colombia","Costa Rica","Croatia",
"Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic",
"Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Finland",
"France","Georgia","Germany","Ghana","Greece","Guatemala","Haiti",
"Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq",
"Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
"Kenya","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Libya",
"Lithuania","Luxembourg","Madagascar","Malaysia","Maldives",
"Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco",
"Netherlands","New Zealand","Nigeria","North Korea","Norway",
"Oman","Pakistan","Panama","Paraguay","Peru","Philippines",
"Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia",
"Serbia","Singapore","Slovakia","Slovenia","South Africa",
"South Korea","Spain","Sri Lanka","Sweden","Switzerland",
"Syria","Taiwan","Thailand","Tunisia","Turkey","Ukraine",
"United Arab Emirates","United Kingdom","USA","Uruguay",
"Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"

];

countries.forEach(country=>{

let option=document.createElement("option");
option.value=country;
option.textContent=country;

countrySelect.appendChild(option);

});

countrySelect.addEventListener("change",()=>{

citySelect.innerHTML='<option value="">Select City</option>';

const cities=data[countrySelect.value];

if(!cities) return;

cities.forEach(city=>{

let option=document.createElement("option");

option.value=city;
option.textContent=city;

citySelect.appendChild(option);

});

});