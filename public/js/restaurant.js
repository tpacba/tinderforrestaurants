$(document).ready(()=> {
    //api calls and dom manipulation happens
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