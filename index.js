let homeCount = 0;
let guestCount = 0;
let scorePlus1 = document.getElementById("homeScore");
let scorePlus2 = document.getElementById("guestScore")

function increase1(){
    homeCount += 1;
    console.log(homeCount)
    scorePlus1.innerText = homeCount;
}

function increase2(){
    homeCount += 2;
    console.log(homeCount)
    scorePlus1.innerText = homeCount;
}

function increase3(){
    homeCount += 3;
    console.log(homeCount)
    scorePlus1.innerText = homeCount;
}

function increase_1(){
    guestCount += 1;
    console.log(guestCount)
    scorePlus2.innerText = guestCount;
}

function increase_2(){
    guestCount += 2;
    console.log(guestCount)
    scorePlus2.innerText = guestCount;
}

function increase_3(){
    guestCount += 3;
    console.log(guestCount)
    scorePlus2.innerText = guestCount;
}