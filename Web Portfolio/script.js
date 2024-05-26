function item1 () {
    
    let newEle = '<img id="item1" src="/Web Portfolio/images/FTS_CHRock.jpeg" width="300" height="300" alt="Big picture">';
    
    document.getElementById('item1').outerHTML = newEle;
 }

 function item2 () {
    
    let newEle = '<p id="item2">All I Want for Christmas is You <br>- JR AI cover</p>';
    
    document.getElementById('item2').outerHTML = newEle;
 }

 function item3 () {
    
    let audioElement = document.getElementById('item3');
    let newSrc = '/Web Portfolio/sounds/JR_CHRock.mp3';

    audioElement.src = newSrc;
    audioElement.load();
 }

function song1 () {
    item1();
    item2();
    item3();
}


function item12 () {
    
    let newEle = '<img id="item1" src="/Web Portfolio/images/D4VD_cover.png" width="300" height="300" alt="Big picture">';
    
    document.getElementById('item1').outerHTML = newEle;
 }

 function item22 () {
    
    let newEle = '<p id="item2">Here With Me <br>- JR AI cover ft. Furina AI</p>';
    
    document.getElementById('item2').outerHTML = newEle;
 }

 function item32 () {
    
    let audioElement = document.getElementById('item3');
    let newSrc = '/Web Portfolio/sounds/JR_D4VD.mp3';

    audioElement.src = newSrc;
    audioElement.load();
 }

function song2 () {
    item12();
    item22();
    item32();
}


function item13 () {
    
    let newEle = '<img id="item1" src="/Web Portfolio/images/FTS_CHRock.jpeg" width="300" height="300" alt="Big picture">';
    
    document.getElementById('item1').outerHTML = newEle;
 }

 function item23 () {
    
    let newEle = '<p id="item2">From The Start <br>- JR AI cover</p>';
    
    document.getElementById('item2').outerHTML = newEle;
 }

 function item33 () {
    
    let audioElement = document.getElementById('item3');
    let newSrc = '/Web Portfolio/sounds/JR_FTS.mp3';

    audioElement.src = newSrc;
    audioElement.load();
 }

function song3 () {
    item13();
    item23();
    item33();
}