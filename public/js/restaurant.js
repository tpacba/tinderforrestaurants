$(document).ready(()=> {
    //api calls and dom manipulation happens
    const code = window.location.href.split("/results/").slice(-1)[0];
    $.get(`/api/results/${code}`)
    .then(data => {
        //put data in carousel or something...
        console.log(data)
    })
})