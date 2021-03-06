  // Soda Springs
  const apiURL4 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL4)
    .then((response) => response.json())
    .then((jsObject) => {
        let day = 0;
        
        const current = document.querySelector('#current');
        current.innerHTML = jsObject.list[0].weather[0].main;
        const temperature = document.querySelector('#temp');
        temperature.innerHTML = Math.round(jsObject.list[0].main.temp) + "&#8457";
        const humidity = document.querySelector('#humid');
        humidity.innerHTML = jsObject.list[0].main.humidity + "&#37;";
        const windspeed = document.querySelector('#speed')
        windspeed.innerHTML = jsObject.list[0].wind.speed;

         function windchill() {
var temperature = parseFloat(document.querySelector('#temp').innerHTML);
    var windSpeed = parseFloat(document.querySelector('#speed').innerHTML);
    var chill = Math.round(35.74 + 0.6215 * temperature - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
if ( temperature <= 50 && windSpeed > 3){
    document.getElementById("windchill").innerHTML = chill.toFixed(0) + "&#8457";
}
else{
    document.getElementById("windchill").innerHTML="N/A";
} 
        }
          windchill();
    });

        const apiURL42 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=02d538d3f6e5b1a6ebc01ea46b82bc1d&units=imperial";
fetch(apiURL42)
    .then((response) => response.json())
    .then((jsObject) => {
        const thefive = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        thefive.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
             const imagesrc =`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            document.getElementById(`dayofWeek${day + 1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day + 1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`date${day + 1}`).textContent = months[d.getMonth()] +","+ d.getDate();
            document.getElementById(`wicon${day + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`wicon${day + 1}`).setAttribute('alt', desc);
            
            day++
        });
       
    });
    const requestURL7 = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL7)
    .then(function (response) {
       return response.json();
    })
   .then(function (jsonObject) {
      const towns = jsonObject['towns'];
        const events = document.querySelector('.mainEvents');
       const townfilter = towns.filter(i => i.name == "Soda Springs");
       
       const mainevents = townfilter[0].events; 
       document.getElementById(`event1`).textContent = townfilter[0].events[0];
       document.getElementById(`event2`).textContent = townfilter[0].events[1];
            document.getElementById(`event3`).textContent = townfilter[0].events[2];

   });
