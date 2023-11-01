const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e42ea202dmsh2b2a403d782de6fp1e8ed3jsnd4fb456ab462',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let city = "Brampton";


const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options).then(response => response.json()).then((response) => {
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed

    }).catch(err => console.error(err));
}

let subBtn = document.getElementById('submit');
let cityValue = document.getElementById('cityValue')
subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(cityValue.value);
})

getWeather("Brampton");
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Brampton';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3e42ea202dmsh2b2a403d782de6fp1e8ed3jsnd4fb456ab462',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// async function test() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// test();