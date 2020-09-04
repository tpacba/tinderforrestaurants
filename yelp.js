var apiKey = "Bearer huZM0jW7oxfJk_QU1FrFl1ZnuU8y3B8yAFAlAn7RKVr8YIRsHqibw2RnwD19sD2vXCCTTOUNJfwV5VMTEPSy7IecJkDUzzHDMj5fWehQ7wN8GSj2VPe_16ZdbCIrX3Yx"
    
var category = "";
    
var city = "";
    
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=30&location=" + city + "&locale=it_IT&categories=" + category + "&term=restaurant";
    
// var longitude = "";

// var lattitude = "";

// var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=10&latitude=" + latitude + "&longitude=" + longitude + "&locale=it_IT&categories=" + category + "&term=restaurant";
    
function runYelp(){

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
        'Authorization': apiKey,
        },
    })
    .then(function(response) {

        console.log(response);

    });

}

runYelp();