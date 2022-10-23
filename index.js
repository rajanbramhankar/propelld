console.log("working");

let changeImage = () => {
    let img = document.getElementsByClassName('loan_img')
    img[0].src='./loan-application (1).png'
}

let changeImage1 = () => {
    let img = document.getElementsByClassName('loan_img')
    img[0].src='./loan-approval (1).png'
}

let changeImage2 = () => {
    let img = document.getElementsByClassName('loan_img')
    img[0].src='./easy-repayments (1).png'
}

let limg=document.getElementById('limg')
let images =['loan-application (1).png','loan-approval (1).png','easy-repayments (1).png'];

setInterval(function() {
    let random = Math.floor(Math.random()*3);
    limg.src = images[random]
}, 1500);

let pop = ()=>{
    let raj = document.getElementsByClassName("raj")
    raj[0].style.display="flex"
    document.getElementById("main").style.display="none"

    
}
