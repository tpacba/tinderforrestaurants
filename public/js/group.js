$(document).ready(() => {

const createGroup = $(".group-submit");

const citySearch = $(".city-search");

const priceSearch = $(".price-search");

const categorySearch = $(".category-search")

// let cityVal = citySearch.val();

// let priceVal = priceSearch.val();

// let categoryVal = categorySearch.val();




createGroup.on("click", event => {
event.preventDefault();
event.stopPropagation();
const groupData = {
    city: citySearch.val().trim(),
    category: categorySearch.val().trim(),
    price: priceSearch.val().trim(),
    code: ~~(Math.random()*9000) + 1000
}
$.post("/api/group", groupData).then(data=> {
    alert("worked! redirecting now!")
    setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
})

console.log(groupData.city)


})

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