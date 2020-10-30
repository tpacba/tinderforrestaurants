$(document).ready(() => {
    const createGroup = $(".group-submit");

    const citySearch = $(".city-search");

    const categorySearch = $(".category-search");

    const joinGroup = $("#join-group");

    const populateCode = $(".member-one");

    // On click for submit button in creategroup.html
    createGroup.on("click", event => {
        event.preventDefault();
        event.stopPropagation();

        // Create groupData with keys 'city', 'category', 'price' and randomly generated Group 'code'
        const groupData = {
            city: citySearch.val().trim(),
            category: categorySearch.val().trim(),
            price: $("#priceOptions").val(),
            code: ~~(Math.random()*9000) + 1000
        }

        // POST request to send groupData through Yelp api
        $.post("/api/group", groupData).then(data=> {
            alert("worked! redirecting now! Your group code is " + `${data.code}`)

            // Shows user randomly generated Group code with start-button to begin choosing restaurants
            populateCode.text(`${data.code}`)
            $("#create-group-code").css("display", "block");
            $("#start-button").click(()=> window.location.replace(`/results/${data.code}`));
        })
    })

    // On click for submit button in joingroup.html
    joinGroup.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Create fake groupData with user-inputted group code (values aren't relevant for but the object needs to be populated)
        const groupData = {
            city: "Los Angeles",
            price: "1",
            category: "tacos",
            code: $("#group-code").val()
        }
        groupValidate()
        // POST request to send groupData then redirect user to begin choosing restaurant
        console.log(groupData.code)
        async function groupValidate() {
       await $.get("/api/group").then(data=> {
             console.log(data[0].code)
            
            for (var i = 0; i < data.length; i++) {
                if (groupData.code == data[i].code) {
                    alert("worked! redirecting now!")
           //     // setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
                setTimeout(()=> window.location.replace(`/restaurant2`), 1000)
               } else {
                   alert("Incorrect group code, please try again!")
               }
            }



    //          if (groupData.code == data[0].code) {
    //             alert("worked! redirecting now!")
    //    //     // setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
    //         setTimeout(()=> window.location.replace(`/restaurant2`), 1000)
    //        } else {
    //            alert("Incorrect group code, please try again!")
    //        }
        })

        

        // alert("worked! redirecting now!")
        //     // setTimeout(()=> window.location.replace(`/results/${data.code}`), 1000)
        //     setTimeout(()=> window.location.replace(`/restaurant2`), 1000)
    }
    }) 
})

