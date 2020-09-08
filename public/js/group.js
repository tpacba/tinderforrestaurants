$(document).ready(() => {

const createGroup = $(".group-submit");

const citySearch = $(".city-search");

const priceSearch = $(".price-search");

const categorySearch = $(".category-search")

// let cityVal = citySearch.val();

// let priceVal = priceSearch.val();

// let categoryVal = categorySearch.val();

const groupData = {
    city: citySearch.val().trim(),
    categorySearch: categorySearch.val().trim(),
    price: priceSearch.val().trim(),
}


createGroup.on("submit", event => {
event.preventDefault();

yelpSearch()

console.log(groupData.city)



})

function yelpSearch() {


    var apiKey = "Bearer huZM0jW7oxfJk_QU1FrFl1ZnuU8y3B8yAFAlAn7RKVr8YIRsHqibw2RnwD19sD2vXCCTTOUNJfwV5VMTEPSy7IecJkDUzzHDMj5fWehQ7wN8GSj2VPe_16ZdbCIrX3Yx"
    
    // var category = "Pizza";
        
    // var city = "San Diego";
        
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=30&location=" + groupData.city + "&locale=it_IT&categories=" + groupData.categorySearch + "&term=restaurant";
        
    // var longitude = "";
    
    // var lattitude = "";
    
    // var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=10&latitude=" + latitude + "&longitude=" + longitude + "&locale=it_IT&categories=" + category + "&term=restaurant";
        
   
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

})

// for (var i = 0; i < 3; i++) {

        //     var img = $('<img />', { 
        //         id: 'Myid',
        //         src: response.businesses[i].image_url,
        //         alt: 'MyAlt'
        //       });
        //       img.appendTo($('.imageurl'));

        //     $(".restaurant").append(response.businesses[i].name)
            
        //     // $(".imageurl").createElement(`<img src="response.businesses[0].image_url">`)
        //     $(".price").append(response.businesses[i].price)
        //     }