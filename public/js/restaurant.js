$(document).ready(() => {
    $('.carousel').carousel('pause');

    var hits = 0;

    // Grab the four-digit code from the web address
    const code = window.location.href.split("/results/").slice(-1)[0];

    // GET request from the results api route using the four-digit code as parameter
    $.get(`/api/results/${code}`)
        .then(data => {
            console.log(data)

            let count = 0;
            let active = "";

            // Loop through the restaurant results
            data.forEach(restaurant => {
                console.log(restaurant);

                if (count == 0) {
                    active = "active";
                } else {
                    active = "";
                }

                // Append the results as a carousel item within carousel component with buttons below within restaurant1.html 
                $(".carousel-1").append(
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
                    <div class="row">
                        <div class="col-6">
                            <a href="#" id="ex-1" data-id="${restaurant.id}"><img class="marks" src="/css/assets/exmark.png"></a>
                        </div>
                        <div class="col-6">
                            <a href="#" id="check-1" data-id="${restaurant.id}"><img class="marks" src="/css/assets/checkmark.png"></a>
                        </div>
                    </div>
                </div>`
                );
                count++;
            })
        })
        .then(() => $('.carousel').carousel('pause'))

    // On click for the ex-button
    $(document).on("click", "#ex-1", function (event) {
        $('.carousel').carousel('pause');

        event.preventDefault();
        event.stopPropagation();

        hits++;
        console.log(hits);

        // Grab the restaurant.id
        let id = $(this).data("id");
        console.log(id);

        // DELETE request for the specific restaurant.id
        $.ajax({
            method: "DELETE",
            url: `/api/results/` + id,
        })
            .then(function () {
                console.log("deleted!");
            });

        // Move to next item
        $('.carousel').carousel('next');

        // Redirect to restaurant2.html after 10 results for second round of choosing
        if (hits > 9) {
            $.get("/api/results").then(data => {
                alert("worked! redirecting now! Waiting on other user")
                setTimeout(() => window.location.replace("/restaurant2"), 1000)
            })
        }
    })

    // On click for the check-button
    $(document).on("click", "#check-1", function (event) {
        $('.carousel').carousel('pause');

        event.preventDefault();
        event.stopPropagation();

        hits++;
        console.log(hits);

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
        });
        
        // Move to next item
        $('.carousel').carousel('next');

        // Redirect to restaurant2.html after 10 results for second round of choosing
        if (hits > 9) {
            $.get("/api/results").then(data => {
                alert("worked! redirecting now! Waiting on other user")
                setTimeout(() => window.location.replace("/restaurant2"), 1000)
            })
        }
    })
})

