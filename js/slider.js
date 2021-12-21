var back = document.getElementById("back");
back.addEventListener("click", playBack);
var imgArr = ["/img/k6.webp", "/img/c2.jpg", "/img/k7.jpg", "/img/k2.jpg", "/img/k3.jpg", "/img/k4.jpg", "/img/k1.jfif"];
var next = document.getElementById("next");
next.addEventListener("click", playNext);
var myVar;
i = 0;



function stop() {

    clearInterval(myVar);
}


function playNext() {
    stop();
    i++;
    var Myimg = document.getElementById('img1');
    Myimg.setAttribute("src", imgArr[(i) % 7]);
    play();

}


function playBack() {
    stop();
    var Myimg = document.getElementById('img1');
    i--;
    if (i < 0)
        i = 6;
    Myimg.setAttribute("src", imgArr[i % 7]);
    play();
}


function play() {


    myVar = setInterval(function () {
        playNext();

    }, 3000);

}
play();
