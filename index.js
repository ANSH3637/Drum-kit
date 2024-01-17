var a=['tom-1.mp3','tom-2.mp3','tom-3.mp3','tom-4.mp3','snare.mp3','crash.mp3','kick-bass.mp3']; 
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var btnhtml=this.innerHTML;
        makesound(btnhtml);
        addAnimation(btnhtml);
    });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    addAnimation(event.key);
});
function makesound(key){
    switch(key){
    case "w":
        var audio=new Audio("sounds/"+a[0]);
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/"+a[1]);
        audio.play();
        break;
    case "s":
        var audio=new Audio("sounds/"+a[2]);
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/"+a[3]);
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/"+a[4]);
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/"+a[5]);
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/"+a[6]);
        audio.play();
        break;
    }
}

function addAnimation(click){
    document.querySelector("."+click).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+click).classList.remove("pressed");
    },100);
}