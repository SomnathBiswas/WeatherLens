const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-item');
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec'];

const API_KEY='1439a12c5adc4317dedc7c944cca4e54';

setInterval(() =>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HRFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12?'PM' : 'AM'

    timeE1.innerHTML= hoursIn12HRFormat + ':' + minutes+ '' + `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
}, 1000);

getWeatherData()
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success)=>{
        //let{latitude,longitude } = success.coords;
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=22.5726&lon=88.3639&exclude=hourly,minutely&appid=${API_KEY}`).then(res =>res.json()).then(data =>{
            console.log(data)
            showWeatherData(data);
            
        })

    })

}


/*function showWeatherData(data){
    let{humidity,pressure,sunrise , sunset,wind_speed}=data.current;

    currentWeatherItemsE1.innerHTML= 
    `<div class="weather-item">
    <div>Humidity</div>
    <div>20%</div>
</div>
<div class="weather-item">
    <div>Pressure</div>
    <div>111</div>
</div>
<div class="weather-item">
    <div>Wind Speed</div>
    <div>200km/h</div>
</div>`;
}


















/*function timeCount() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if(hour<10)hour = "0"+hour;

    var minute = today.getMinutes();
    if(minute<10)minute = "0"+minute;

    var second = today.getSeconds();
    if(second<10)second = "0"+second;

    document.getElementById("clock").innerHTML = 
    day+"/"+month+"/"+year+" |"+hour+":"+minute+":"+second;

    setTimeout("timeCount()", 1000);
}*/

/*window.addEventListener("load",()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
            const api=` api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
            fetch(api).then((response)=>{

                return response.json();
            })
            .then (data=>{
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
            })
    }
    )}

})*/

/*getWeatherData()
function getWeatherData(){
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        //const proxy="https://cors-anywhere.herokuapp.com/";
        const api=`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=1439a12c5adc4317dedc7c944cca4e54`
        fetch(api).then((response)=>{

                return response.json();
            })
            .then (data=>{
                console.log(data)
                showWeatherData(data);
            })
           
    })}
}*/

/*function showWeatherData(data){
    let{humidity,pressure,sunrise , sunset,wind_speed}=data.current;

    currentWeatherItemsE1.innerHTML= 
    `<div class="weather-item">
    <div>Humidity</div>
    <div>20%</div>
</div>
<div class="weather-item">
    <div>Pressure</div>
    <div>111</div>
</div>
<div class="weather-item">
    <div>Wind Speed</div>
    <div>200km/h</div>
</div>`;}*/

/*function showWeatherData(data){
    let{humidity,pressure,sunrise , sunset,wind_speed}=data.current;

    currentWeatherItemsE1.innerHTML= 
    `<div class="weather-item">
    <div>Humidity</div>
    <div>20%</div>
</div>
<div class="weather-item">
    <div>Pressure</div>
    <div>111</div>
</div>
<div class="weather-item">
    <div>Wind Speed</div>
    <div>200km/h</div>
</div>`;


    
}*/

/*window.addEventListener("load",()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
            const api=` api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1439a12c5adc4317dedc7c944cca4e54`
            fetch(api).then((response)=>{

                return response.json();
            })
            .then (data=>{
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
            })
    }
    )}

})*/

