

//Plain HTTPS request and json returned.
function queryRandomUserAPI() {
  var url = 'https://randomuser.me/api/?results=10';
  fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp){ //PROMISE
      return resp.json()// Transform the data into json
    })
    .then(function(data) {
      const usersElement = document.querySelector('#users');
      data.results.forEach(user =>{
        let pTag = document.createElement('p');
        pTag.innerText = `Name: ${user.name.first}`
        usersElement.appendChild(pTag)
      })
    })
    .catch(function() {


        alert('Oh no! Something went wrong!');
        // This is where you run code if the server returns any errors
    });
};
fetch('https://dog.ceo/api/breeds/image/random')
.then(data => {
console.log(data);
})
.catch(err => {

})

function calculateVisits() {
  let visitCount = 0;
  visitCount++;
  function logCount() {
    console.log(visitCount);
  }
  return logCount();
}

calculateVisits();



//slightly more complicated example using same structure
function queryWithParams(queryCategory, queryTerm) {
  //How can we dynamically get queryCategory and query?

  const url =`https://randomuser.me/api/?${queryCategory}=${queryTerm}&results=10`;
  fetch(url)
  .then(function(resp){
    return resp.json()// Transform the data into json
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
}
