var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
var image = document.getElementById('main');
var point = document.getElementsByClassName('point');
var tabImg = ["assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg", "assets/11.jpg" ];
var i = 0;

next.addEventListener('click',suivant); 

function suivant () {
    i += 1;
    if(i>5){
        i=0;
    }
    image.src = tabImg[i];
    for(var j=0; j<point.length; j++){
        point[j].removeAttribute('id');
    }
    point[i].id = "pointjs";
    setTimeout(suivant,5000);
}


prev.addEventListener('click',precedent); 
function precedent() {
    i -= 1;
    if(i<0){
        i= point.length-1;
    }
    image.src = tabImg[i];
    for(var j=0; j<point.length; j++){
        point[j].removeAttribute('id');
    }
    point[i].id = "pointjs";
}
precedent();
suivant();

for (let i = 0; i < point.length; i++) {
    const elem = point[i];
    elem.onclick = function () {
        for(var j=0; j<point.length; j++){
            point[j].removeAttribute('id');
        }
        elem.id = "pointjs";
        image.src = tabImg[i];
    }

    
}
