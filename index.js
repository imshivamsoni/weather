let button = document.querySelector('.button');
let input = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let date = document.querySelector('.date');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let tempminmax = document.querySelector('.tempminmax');

button.addEventListener('click', () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=f5a10ecfb3a24a2af8e80ea698b2ff25
    `
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data['name'];
      let tempValue = data['main']['temp'];
      let descValue = data['weather'][0]['main'];
      let dateValue = new Date().toUTCString().slice(5, 16);
      name.innerHTML = nameValue + ', ' + data['sys']['country'];
      date.innerHTML = dateValue;
      temp.innerHTML = Math.round(tempValue - 273) + '&degC';
      desc.innerHTML = descValue;
      tempminmax.innerHTML =
        Math.round(data['main']['temp_min'] - 273) +
        '&degC (min) / ' +
        Math.round(data['main']['temp_max'] - 273) +
        '&degC (max)';
      console.log(data);
    })
    .catch((err) => console.log(err));
});
