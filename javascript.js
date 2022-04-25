const img = document.querySelector('img');
const addButton = document.querySelector('#addButton')
let searchFunction
const submitButton = document.querySelector('#submitButton')
/*
    submitButton.addEventListener('click', function(){
        let searchFunction = document.getElementById('gif-search').value; 
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=pW7uIB6KQgumUt6HNinFio0VWggEB8LZ&s=${searchFunction}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
    })
    */    

    submitButton.addEventListener('click', function() {
        let searchFunction = document.getElementById('gif-search').value;
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=pW7uIB6KQgumUt6HNinFio0VWggEB8LZ&s=${searchFunction}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
    })
    
   
/*
    function search() {
        // let searchFunction = document.getElementById('gif-search').value; 
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=pW7uIB6KQgumUt6HNinFio0VWggEB8LZ&s=${searchFunction}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
    }
 */   