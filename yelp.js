var apiKey = "Bearer huZM0jW7oxfJk_QU1FrFl1ZnuU8y3B8yAFAlAn7RKVr8YIRsHqibw2RnwD19sD2vXCCTTOUNJfwV5VMTEPSy7IecJkDUzzHDMj5fWehQ7wN8GSj2VPe_16ZdbCIrX3Yx"
    
    var address = "Gardena";
    
    var category = "tacos";

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