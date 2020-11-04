$(document).ready(() => {
    
    // Append the final results within finalmatch1.html 

    $.get("/api/group").then(data => {
        console.log(data)
        let group = data.pop();
        let groupid = group.id;
        console.log(groupid)


    $.get("/api/finalmatch/" + groupid)
        .then(data => {
            console.log("GET request from /api/finalmatch");
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
                                <p style="margin-top: 20px;">Click <a href="/logout">here</a> to try another search</p>
                            </div>
                        </div>
                    </div>
                `);
            })
        })

    })
})

