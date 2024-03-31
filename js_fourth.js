function random(x, y){
    return(x + (Math.random() * (y - x)));
}
for(var i = 0; i < 400; i++){
    document.body.innerHTML += '<div class="star" style="animation-duration: ' + random(8,12) + 's; top: ' + random(0, 100) + '%; left: ' + random(0, 100) + '%; "></div>'
}
