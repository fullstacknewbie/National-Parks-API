'use strict'

function getResults() {
    console.log(state.value)
    fetch ("https://developer.nps.gov/api/v1/parks?stateCode="+state.value+"&limit="+maxResults.value+"&api_key=XYAZIv3O6HaWcsnGpine6IRetfjeP0kLTPXCbISZ")
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
}

function displayResults(responseJson) {
    let i = 0
    $("#form").addClass('hide');
    $("#results").empty();
    console.log(responseJson)
    console.log(responseJson.data[0].fullName)
    let total = responseJson.data.length-1
    console.log(total)
    for (i=0; i < total; i++) {
        console.log(i);
        var name=(responseJson.data[i].fullName);
        var desc=(responseJson.data[i].description);
        var web=(responseJson.data[i].url);
        $("#results").append("<span><b>"+name+":<b><span><br/>");
        $("#results").append("<span>"+desc+"<span><br/>");
        $("#results").append("<span><i>Website: "+web+"<i><span><br/><br>");
    }
}

/*full name . description . website url*/

function watchForSubmit () {
    $("form").submit(event => {
        event.preventDefault();
        const state=$('#state').val();
        const maxResults=$('#maxResults').val();
        console.log(state)
        console.log(maxResults)
        getResults(state);
    });
}

$(function() {
    watchForSubmit();
})