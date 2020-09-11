$(document).ready(() => {
    
    // Append the final results within finalmatch1.html 
    $.get("/api/finalresults/")
        .then(data => {
            console.log("GET request from /api/finalresults");
            console.log(data);

            // Loop through the restaurant results
            data.forEach(restaurant => {
                console.log("LOOP through the restaurant results");
                console.log(restaurant);

                $(".finalresult").append(`
                    <div class="container" style="width: fit-content;">
                        <div class="card">
                            <img id="restaurant-1-image" src="${restaurant.image}" class="card-img-top">
                            <div class="card-body">
                                <p class="restaurant-name"><span id="restaurant-1-name">${restaurant.restaurant}</span></p>
                                <p class="rating">Rating: ${restaurant.rating}/5</p>
                                <p class="price"><span id="restaurant-1-price">${restaurant.price}</span></p>
                                <button type="button" class="btn btn-danger" onclick="window.location.href='${restaurant.url}';">Check it out on Yelp!</button>
                            </div>
                        </div>
                    </div>
                `);
            })
        })
})