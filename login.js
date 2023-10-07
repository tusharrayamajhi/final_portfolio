const main = document.querySelector(".main");
const main2 = document.querySelector(".main2");
const h1 = document.querySelector(".main h1");
const user = document.querySelector(".main .form .username");
const pass = document.querySelector(".main .form .password");
const btn = document.querySelector(".main .btn");
const btn2 = document.querySelector(".main2 .btn");
main2.style.transform = "rotateY(-90deg)";
btn.addEventListener("click",(event)=>{
    main.style.transform = "rotateY(90deg)";
    setTimeout(()=>{
        main2.style.transform = "rotateY(0deg) ";
    },800);
})
btn2.addEventListener("click",(event)=>{
    main2.style.transform = "rotateY(90deg)";
    setTimeout(()=>{
        main.style.transform = "rotateY(0deg) ";
    },800);
})