$(document).ready(() => {

    var finalResults = [];



    $.get("/api/finalresults/").then(data => {

        console.log(data)
        finalResults = data;

        console.log(data[0])
        let count = 0;
        let active = "";
        data.forEach(rest => {
            if (count == 0) {
                active = "active";
            } else {
                active = "";
            }
            $(".carousel-inner").append(`
                <div class="carousel-item ${active}">
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
                            <a href="#" id="check-1" data-id="${rest.id}"><img class="marks" src="/css/assets/exmark.png"></a>
                        </div>
                        <div class="col-6">
                            <a href="#" id="ex-1" data-id="${rest.id}"><img class="marks" src="/css/assets/checkmark.png"></a>
                        </div>
                    </div>
                </div>`
            );
            count++
        })


    })

    $('.carousel').carousel('pause');

    $(document).on("click", "#check-1", function (event) {
        event.preventDefault();
        event.stopPropagation();

        // let id = data.Results[0].id
        let id = $(this).data("id");
        console.log(id)
        $.ajax({
            method: "DELETE",
            url: `/api/results/` + id,

        })
            .then(function () {
                console.log("deleted!")
                $.get("/api/finalresults/").then(data => {
                    finalResults = data;

                    if (finalResults.length < 2) {
                        $.get("/api/results").then(data => {
                            alert("worked! redirecting now! Waiting on other user")
                            setTimeout(() => window.location.replace("/finalmatch1"), 1000)

                        })
                    }
                })


            });
        $('.carousel').carousel('next')
    })
    $(document).on("click", "#ex-1", function (event) {
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
            .then(function () {
                console.log("Added to liked restaurants!")
                $.get("/api/finalresults/").then(data => {
                    finalResults = data;
                    if (finalResults.length < 2) {
                        $.get("/api/results").then(data => {
                            alert("worked! redirecting now! Waiting on other user")
                            setTimeout(() => window.location.replace("/finalmatch1"), 1000)

                        })
                    }
                })
            });
        $('.carousel').carousel('next')

        if (finalResults.length < 2) {
            $.get("/api/results").then(data => {
                alert("worked! redirecting now! Waiting on other user")
                setTimeout(() => window.location.replace("/finalmatch1"), 1000)
                // need to update


                // $(document).ready(function(){ 
                //     jQuery.ajax({ 
                //         type: "GET", 
                //         url: "/api/results", 
                //         dataType:"json", 
                //         success:function(response){ 
                //             console.log(response)
                //             if (response.redirect) {
                //                 window.location.href = response.redirect;
                //             }
                //             else {
                //                 console.log("we will send you to a different page")
                //             }
                //         }, 
                //      error: function(xhr, textStatus, errorThrown) { 
                //             alert('Error!  Status = ' + xhr.status); 
                //          } 

                //     }); 
                // }); 


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
