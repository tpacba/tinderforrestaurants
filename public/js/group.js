$(document).ready(() => {

const createGroup = $(".group-submit");

const citySearch = $(".city-search");

const priceSearch = $(".price-search");

const categorySearch = $(".category-search");

const joinGroup = $("#join-group");

const populateCode = $(".member-one");

// let cityVal = citySearch.val();

function priceOptions() {
    
    // if ($("#priceOptions").val() === "1"){
    //     return "1"
    // } else if ($("#priceOptions").val() === "2"){
    //     return "2"
    // } else if ($("#priceOptions").val() === "3"){
    //     return "3"
    // }
}
// document.getElementById("priceOptions").value;
    
// let priceVal = priceSearch.val();

// let categoryVal = categorySearch.val();


createGroup.on("click", event => {

    event.preventDefault();
    event.stopPropagation();
    const groupData = {
        city: citySearch.val().trim(),
        category: categorySearch.val().trim(),
        price: $("#priceOptions").val(),
        code: ~~(Math.random()*9000) + 1000
    }


    $.post("/api/group", groupData).then(data=> {
        console.log(data.price)
        alert("worked! redirecting now! Your group code is " + `${data.code}`)
        populateCode.text(`${data.code}`)

        $("#create-group-code").css("display", "block");

        $("#start-button").click(()=> window.location.replace(`/results/${data.code}`));
        // setTimeout(()=> window.location.replace(`/results/${data.code}`), 3000)
    })

    console.log(groupData.city, groupData.code)
})


//need to update so the other user gets only options that were matched on
joinGroup.on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    const groupCode = {
        city: "Los Angeles",
        code: $("#group-code").val()
    }

    $.post("/api/group", groupCode).then(data=> {
        alert("worked! redirecting now!")
        setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
    })

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