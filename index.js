

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Click events
for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        PlayAudio(buttonInnerHTML);
    });
}

// Keyboard Event
document.addEventListener("keydown", function(event) {
    PlayAudio(event.key);
});

// Song Player function
function PlayAudio(key) {

    var audioName;

    switch(key) {
        case "w": audioName = "crash"; break;
        case "a": audioName = "kick-bass"; break;
        case "s": audioName = "snare"; break;
        case "d": audioName = "tom-1"; break;
        case "j": audioName = "tom-2"; break;
        case "k": audioName = "tom-3"; break;
        case "l": audioName = "tom-4"; break;

        default: return;
    }

    var audio = new Audio('sounds/'+ audioName + '.mp3')
    audio.play();
}