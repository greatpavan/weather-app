var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik='29bb132f403e00822f1c48572b04e2f1'
function convertion(val)
{
    retun (val - 273).tofixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']


        city.innerHTML='Weather of <span>${nameval}<span>'
        temp.innerHTML = 'temperature: <span>${ converation(tempatuer)}c</span>'
        description.innerHTML = 'sky conditions: <span>${descrip}<span>'
        wind.innerHTML = 'wind speed: <span>${wndspeed} km/h<span>'

    })


    .catch(err => alert('you entered wrong city name'))
})