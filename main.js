 const api = {
    key: "eabfd93eedea2ad0f9eb2ddee87ff327",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){ //number 13 is enterkey on the keyboard
        getResults(searchbox.value);
    
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`) //appid is api.key
    .then(weather =>{
        return weather.json();
    }).then( (json) => { 
        displayResults(json)
    });
}

function displayResults (weather) {
    console.log(weather);
   let city = document.querySelector('.city');
   city.innerText= `${weather.name},${weather.sys.country}`;


   let now = new Date();
   let date = document.querySelector('.date');
   date.innerText = dateBuilder(now);


   let temp = document.querySelector('.temp');
   temp.innerHTML = `${Math.round(weather.main.temp)}<span>℃</span>`;

   let weather_el = document.querySelector('.weather');
   weather_el.innerText = weather.weather[0].main;

   let hilow = document.querySelector('.hi-low');
   hilow.innerText = `${weather.main.temp_min}℃ / ${weather.main.temp_max}℃`;
}


function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    return `${day} ${date} ${month} ${year}`;


}





