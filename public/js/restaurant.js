$(document).ready(()=> {
    //api calls and dom manipulation happens

    const code = window.location.href.split("/results/").slice(-1)[0];
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
        $(".carousel-inner").append(` <div class="carousel-item ${active}">
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
    </div>`);

            count++
        })

        // data.forEach(rest => {
        //     console.log(rest.image)
        //     const $carouselInner = $(".carousel-inner");
            // const $carouselItem = $("<div>");
            // const $carouselContainer = $("<div>");
            // const $cardContainer = $("<card>");
            // const $img = $("<img>");
            // const $cardBody = $("<div>");
            // const $restaurantName = $("<p>");
            // const $price = $("<p>");
            // // const $category = $("<p>")
            // $carouselItem.addClass("carousel-item");
            // $img.attr("src", rest.image);
            // $restaurantName.append(rest.restaurant);
            // $price.append(rest.price)
           
            // $carouselItem.append($carouselContainer);
            // $carouselContainer.append($cardContainer);
            // $cardContainer.append($img);
            // $cardBody.append($restaurantName);
            // $cardBody.append($price);
            // $carouselInner.append($carouselItem);
            // const $carouselItem = $("<div class='carouselitem'>")
            
            // const $carouselItem = "`<div class='carousel-item'>"
            // const $carouselContainer = "<div class='container' style='width: fit-content;>"
            // const $cardContainer = "<div class='card'>"
            // const $img = "<img id='restaurant-1-image' src='${rest.image}' class='card-img-top'>"
            // const $cardBody = "<div class='card-body'>"
            // const $restaurantName = "<p class='restaurant-name'><span id='restaurant-1-name'>${rest.restaurant}/span></p>"
            // const $price = "<p class='price'><span id='restaurant-1-price'>${rest.price}</span></p>"
            // const $div = "</div>" + "</div>" + "</div>" + "</div>`"

            // $(".carousel-inner").append($carouselItem, $carouselContainer, $cardContainer, $img, $cardBody, $restaurantName, $price, $div)

            //appending Carousel
            // $(".carousel-inner").append(`
            //     <div class="container" style="width: fit-content;">
            //         <div class="card">
            //             <img id="restaurant-1-image" src="${rest.image}" class="card-img-top">
            //             <div class="card-body">
            //                 <p class="restaurant-name"><span id="restaurant-1-name">${rest.restaurant}</span></p>
            //                 <p class="price"><span id="restaurant-1-price">${rest.price}</span></p>
            //             </div>
            //         </div>
            //     </div>
            // </div>`);


        // })

        


      
    //     <div class="carousel-item">
    //     <div class="container" style="width: fit-content;">
    //         <div class="card">
    //             <img id="restaurant-1-image" src="./css/assets/mcdonalds.jpg" class="card-img-top">
    //             <div class="card-body">
    //                 <p class="restaurant-name"><span id="restaurant-1-name">Burger King</span></p>
    //                 <p class="rating"><span id="restaurant-1-stars">3.2 Stars</span>(<span
    //                         id="restaurant-1-reviews"></span>
    //                     Reviews)</p>
    //                 <p class="price"><span id="restaurant-1-price">$</span></p>
    //                 <p class="category"><span id="restaurant-1-category">Burgers, Fast Food</span></p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
      
    })
    
    $(document).on("click", "#check-1", function(event) {
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
            //   console.log(match)
        });
    })
            $(document).on("click", "#ex-1", function(event) {
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
                      console.log(match)
                    });
    
    
                // $.put(`api/results/${code}/` + id, function(data) {
                //     // console.log(data.Results[0].id)
    
                // })
            })



    // const code = window.location.href.split("/results/").slice(-1)[0];
    // $.get(`/api/results/${code}`)
    // .then(data => {
    //     //put data in carousel or something...
    //     console.log(data)
    // })
    $('.carousel').carousel('pause');
    $("#check-1").click(function() {
        $('.carousel').carousel('next')
    })
    $("#ex-1").click(function() {
        $('.carousel').carousel('next')
    })

    console.log("hello")
})

