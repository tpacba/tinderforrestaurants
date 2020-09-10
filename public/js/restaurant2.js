$(document).ready(()=> {

$.get("/api/finalresults/").then(data=> {
    
    console.log(data)


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


})
})
