$(document).ready(() => {
    $('.carousel').carousel('pause');

    var finalResults = [];

    // GET request from the finalresults
    $.get("/api/finalresults/")
        .then(data => {
            console.log("GET request from /api/finalresults");
            console.log(data);

            finalResults = data;

            let count = 0;
            let active = "";

            // Loop through the restaurant results
            data.forEach(restaurant => {
                console.log("LOOP through the restaurant results");
                console.log(restaurant);

                if (count == 0) {
                    active = "active";
                } else {
                    active = "";
                }

                // Append the results as a carousel item within carousel component with buttons below within restaurant2.html 
                $(".carousel-2").append(
                    `<div class="carousel-item ${active}">
                        <div class="container" style="width: fit-content;">
                            <div class="card">
                                <img id="restaurant-1-image" src="${restaurant.image}" class="card-img-top">
                                <div class="card-body">
                                    <p class="restaurant-name"><span id="restaurant-1-name">${restaurant.restaurant}</span></p>
                                    <p class="rating">Rating: ${restaurant.rating}/5</p>
                                    <p class="price"><span id="restaurant-1-price">${restaurant.price}</span></p>
                                    <a class="btn btn-light" href="${restaurant.url}" target="_blank">More Info</a>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="swipe-buttons">
                            <div class="col-6">
                                <a href="#" id="ex-1" data-id="${restaurant.id}"><img class="marks" src="/css/assets/exmark.png"></a>
                            </div>
                            <div class="col-6">
                                <a href="#" id="check-1" data-id="${restaurant.id}"><img class="marks" src="/css/assets/checkmark.png"></a>
                            </div>
                        </div>
                    </div>`
                );

                count++
            })
        })
        .then(() => $('.carousel').carousel('pause'))

    // On click for the ex-button
    $(document).on("click", "#ex-1", function (event) {
        $('.carousel').carousel('pause');

        event.preventDefault();
        event.stopPropagation();

        // Grab the restaurant.id
        let id = $(this).data("id");
        console.log(id)

        // DELETE request for the specific restaurant.id
        $.ajax({
            method: "DELETE",
            url: `/api/results/` + id,
        })
        .then(function () {
            console.log("deleted!")

            // GET request to grab data from finalresults api and update finalResults variable to measure length array
            $.get("/api/finalresults/").then(data => {
                console.log("GET request to grab data from /api/finalresults and update finalResults variable")
                console.log(data);
                finalResults = data;

                // GET request to redirect to finalmatch1.html when down to last restaurant
                if (finalResults.length < 2) {
                    $.get("/api/results").then(data => {
                        alert("worked! redirecting now! Waiting on other user")
                        setTimeout(() => window.location.replace("/finalmatch1"), 1000)
                    })
                }
            })
        })
        .then(() => $('.carousel').carousel('next'))
    })

    // On click for the ex-button
    $(document).on("click", "#check-1", function (event) {
        $('.carousel').carousel('pause');

        event.preventDefault();
        event.stopPropagation();

        // Grab the restaurant.id
        let id = $(this).data("id");
        console.log(id)

        // PUT request for the specific restaurant.id and switches matches value to true
        $.ajax({
            method: "PUT",
            url: `/api/results/` + id,
            data: {
                matches: true
            }
        })
        .then(function () {
            console.log("Added to liked restaurants!");

            // GET request to grab data from finalresults api and update finalResults variable to measure length array
            $.get("/api/finalresults/").then(data => {
                console.log("GET request to grab data from /api/finalresults and update finalResults variable")
                console.log(data);
                finalResults = data;

                // GET request to redirect to finalmatch1.html when down to last restaurant
                if (finalResults.length < 2) {
                    $.get("/api/results").then(data => {
                        alert("Redirecting now! Waiting on other user!")
                        setTimeout(() => window.location.replace("/finalmatch1"), 1000)
                        // $("#swipe-buttons").css("display", "none")
                    })
                }
            })
        });

        // Move to next item
        $('.carousel').carousel('next');

        // if (finalResults.length < 2) {
        //     $.get("/api/finalmatch/").then(data => {
        //         alert("Great! Redirecting now! Waiting on other user!")
        //         setTimeout(() => window.location.replace("/finalmatch1"), 1000)
        //         // need to update




        //         $(document).ready(function(){ 
        //             jQuery.ajax({ 
        //                 type: "GET", 
        //                 url: "/api/results", 
        //                 dataType:"json", 
        //                 success:function(response){ 
        //                     console.log(response)
        //                     if (response.redirect) {
        //                         window.location.href = response.redirect;
        //                     }
        //                     else {
        //                         console.log("we will send you to a different page")
        //                     }
        //                 }, 
        //              error: function(xhr, textStatus, errorThrown) { 
        //                     alert('Error!  Status = ' + xhr.status); 
        //                  } 

        //             }); 
        //         }); 
        //     })

        //     } else if (id < 2) {
        //         $.get("/api/results/final").then(data=> {
        //             alert("worked! redirecting now! Waiting on other user")
        //             // setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
        //             //need to update
        //         })
        // }
    })
})
