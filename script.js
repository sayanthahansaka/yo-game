var boy=document.getElementById("boy");
idleImageNumber = 1;
idlAnimationionNumber = 0;

runImageNumber = 1;
runAnimationNumber = 0;

jumpImageNumber = 1;
jumpAnimationNumber = 0;
boyMarginTop = 382;


backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function idlAnimation(){
    idleImageNumber = idleImageNumber + 1;

    if(idleImageNumber == 11){
        idleImageNumber = 1;
    }

    boy.src = "resources/Idle ("+idleImageNumber+").png";
}

function idlAnimationStart() {
    idlAnimationionNumber = setInterval(idlAnimation, 200);
}

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if(runImageNumber == 11){
        runImageNumber = 1;
    }

    boy.src = "resources/run ("+runImageNumber+").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idlAnimationionNumber);
}

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

   

    if(jumpImageNumber >= 7){
        boyMarginTop = boyMarginTop + 20;
        boy.style.marginTop = boyMarginTop + "px";
    }
     if(jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if(jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }


    boy.src = "resources/jump ("+jumpImageNumber+").png";
}
function jampAnimationStart(){
    clearInterval(idlAnimationionNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}

function keyCheck(event){
    var keyCode=event.which;

    if(keyCode == 13){ 
        if(runAnimationNumber == 0){
            runAnimationStart();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
         }
    }
    if(keyCode == 32){
        if(jumpAnimationNumber == 0){
            jampAnimationStart();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
         }
    }
}

function moveBackground(){
    backgroundImagePositionX = backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}
