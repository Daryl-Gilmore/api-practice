

//Plain HTTPS request and json returned.
function queryRandomUserAPI() {
  var url = 'https://randomuser.me/api/?results=10';
  fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp){
      return resp.json()// Transform the data into json
    })
    .then(function(data) {
      console.log(data);
      //How can we display this data?
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });
};
