document.getElementById("confettiButton").addEventListener('click', function(){
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    confetti();
});
