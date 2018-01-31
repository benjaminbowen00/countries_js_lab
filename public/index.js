var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var populateList = function(countries){
  var ul = document.querySelector('#country-list')
  countries.forEach(function(country){
    var li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li);
  });
}

var formDropdown = function(countries){
  var select = document.querySelector('#country-dropdown')
  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  })
}

var requestComplete = function(){
  // console.log("Check request is working");
  // console.log(this);
  if (this.status !== 200) {return;}
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  var country = countries[0];
  // console.log(jsonString);
  // console.log(countries);
  console.log(country);
  // populateList(countries);
  formDropdown(countries);
}

var showCountries = function(){
  var url = "https://restcountries.eu/rest/v2";
  makeRequest(url, requestComplete);
}

var populateDropdown = function(){
  var url = "https://restcountries.eu/rest/v2";
  makeRequest(url, requestComplete);
}


var app = function(){
  // var showCountriesButton = document.getElementById("button-show-countries");
  // showCountriesButton.addEventListener('click', showCountries);

  populateDropdown();

  // var url = "https://restcountries.eu/rest/v2";
  // makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
