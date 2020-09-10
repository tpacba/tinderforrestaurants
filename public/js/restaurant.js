$(document).ready(()=> {
    //api calls and dom manipulation happens

    const code = window.location.href.split("/results/").slice(-1)[0];
    console.log(code)
    $.get(`/api/results/${code}`)
    .then(data => {
        //put data in carousel or something...
        
        console.log(data[0])
        let count = 0;
        let active = "";
        data.forEach(rest => {
            if (count == 0) {
                active = "active";
            } else {
                active = "";
            }
        $(".carousel-inner").append(
            `<div class="carousel-item ${active}">
                <div class="container" style="width: fit-content;">
                    <div class="card">
                        <img id="restaurant-1-image" src="${rest.image}" class="card-img-top">
                        <div class="card-body">
                            <p class="restaurant-name"><span id="restaurant-1-name">${rest.restaurant}</span></p>
                            <p class="price"><span id="restaurant-1-price">${rest.price}</span></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="#" id="ex-1" data-id="${rest.id}"><img class="marks" src="/css/assets/exmark.png"></a>
                    </div>
                    <div class="col-6">
                        <a href="#" id="check-1" data-id="${rest.id}"><img class="marks" src="/css/assets/checkmark.png"></a>
                    </div>
                </div>
            </div>`
        );
            count++
        })
    })
    .then(() => $('.carousel').carousel('pause'))

    $(document).on("click", "#ex-1", function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // let id = data.Results[0].id
        let id = $(this).data("id");
        console.log(id)
        $.ajax({
            method: "DELETE",
            url: `/api/results/` + id,

        })
        .then(function() {
            console.log("deleted!")
        });
        $('.carousel').carousel('next')
        if (id > 9) {
            $.get("/api/results").then(data=> {
                alert("worked! redirecting now! Waiting on other user")
                setTimeout(()=> window.location.replace("/restaurant2"), 1000)
                // need to update

            })
        }
    })
            $(document).on("click", "#check-1", function(event) {
                event.preventDefault();
                event.stopPropagation();
    
                // let id = data.Results[0].id;
                let id = $(this).data("id");
                
                console.log(id)
                $.ajax({
                    method: "PUT",
                    url: `/api/results/` + id,
                    data: {
                        matches: true
                    }
                })
                    .then(function() {
                        console.log("Added to liked restaurants!")
                    });
                    $('.carousel').carousel('next')

                    if (id > 9) {
                        $.get("/api/results").then(data=> {
                            alert("worked! redirecting now! Waiting on other user")
                            setTimeout(()=> window.location.replace("/restaurant2"), 1000)
                            // need to update




                        })

                    // } else if (id < 2) {
                    //     $.get("/api/results/final").then(data=> {
                    //         alert("worked! redirecting now! Waiting on other user")
                    //         // setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
                    //         //need to update
                    //     })

                    }

            })
})

