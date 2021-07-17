var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=0a24f6082df14108ca78847b83b32791")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var nameValue = data['name'];
        var tempValue = data['wind']['deg'];
        var descValue = data['weather'][0]['description'];
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    }) 

    .catch(err => alert("Wrong City Name!"))
})
