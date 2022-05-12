const url='https://api.openweathermap.org/data/2.5/'
const key='5419f3be03caa929488a3294fb9ab717'


const getResult=()=>{
    let query=`${url}weather?q=Trabzon&appid=${key}&units=metric&lang=tr`;
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)}

    const displayResult=(result)=>
    {
    let temp = document.querySelector('.temp');
    temp.innerHTML = `Sıcaklık : ${Math.round(result.main.temp)}°C`;
    let desc = document.querySelector('.desc');
    desc.innerHTML = `Hava ${result.weather[0].description}`;
    
    }
    getResult();