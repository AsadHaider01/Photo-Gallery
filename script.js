var bollywood = document.querySelectorAll("#bolly");
var  animated = document.querySelectorAll("#anima");
var lollywood = document.querySelectorAll("#pak")
var imgs= document.querySelectorAll("img");


function ani(){
    bollywood.forEach(function(bollywood){
        bollywood.style.display ="none"
    })

    animated.forEach(function( animated){
        animated.style.display = "inline"
    })
    lollywood.forEach(function(lollywood){
        lollywood.style.display ="none"
    })
}
function boll(){
    animated.forEach(function( animated){
        animated.style.display = "none"
    })
    bollywood.forEach(function(bollywood){
        bollywood.style.display ="inline"
    })
    lollywood.forEach(function(lollywood){
        lollywood.style.display ="none"
    })
    
}
function lol(){
    bollywood.forEach(function(bollywood){
      bollywood.style.display = "none"})

     animated.forEach(function(animated){
        animated.style.display ="none"
})
     animated.forEach(function(animated){
        animated.style.display ="none"
    })
    lollywood.forEach(function(lollywood){
        lollywood.style.display ="inline"
    })

    }

function alls(){
    imgs.forEach(function(imgs){
    imgs.style.display = "inline"
    })
}