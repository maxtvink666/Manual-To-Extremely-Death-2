const countries=["Ukraine","Poland","Germany","France","Italy","USA"]
const cities={
Ukraine:["Kyiv","Lviv","Odessa"],
Poland:["Warsaw","Krakow","Gdansk"],
Germany:["Berlin","Munich"],
France:["Paris","Lyon"],
Italy:["Rome","Milan"],
USA:["New York","Los Angeles"]
}

const countryInput=document.getElementById("country")
const cityInput=document.getElementById("city")

countryInput.addEventListener("input",()=>{

const val=countryInput.value.toLowerCase()

const match=countries.find(c=>c.toLowerCase().startsWith(val))

if(match)countryInput.value=match

})

cityInput.addEventListener("input",()=>{

const country=countryInput.value

if(!cities[country])return

const val=cityInput.value.toLowerCase()

const match=cities[country].find(c=>c.toLowerCase().startsWith(val))

if(match)cityInput.value=match

})