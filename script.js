$(document).ready(function(){
    function randomCatPicCall(){
    $.ajax({
        url:"https://aws.random.cat/meow",
        method:"GET"
    }).then(function (response){
        console.log(response);
        generateImage(response);
    })
    
}
    function generateImage(response){
        var catImage = $("<img>").attr("src", response.file)
        $("#randomCatPic").append(catImage)
    }
  

  $("#fetchCatPic").on("click", function(){
        $("#randomCatPic").empty();
        randomCatPicCall();
    })




})