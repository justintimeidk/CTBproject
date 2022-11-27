function move(){
    var elem = document.getElementById("btn");
    elem.style.left=(Math.random()*(45-(-45))+(-45))+"%";
    elem.style.top=(Math.random()*(45-(-45))+(-45))+"%";
}
