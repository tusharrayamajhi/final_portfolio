const container = document.querySelector(".portfolio");
let cards = [
    {
        image:"suduko/sudukoimg.png",
        title:"sudukos solver 9X9",
        text:"suduko solver of 9X9 board",
        lang:"language use: HTML,CSS,JS",
        link:"suduko/index.html",
    },
    {
        image:"todo.png",
        title:"Todo website",
        text:" ",
        lang:"language use: HTML,CSS,JS,Express-js,Node-js",
        link:"todo.html",
    },
    
];

for(let card of cards){
    let div = document.createElement("div");
    container.appendChild(div);
    let img = document.createElement("img");
    div.appendChild(img);
    let div2 = document.createElement("div");
    div.appendChild(div2);
    div.setAttribute("style","width:23rem");
    div.setAttribute("class","cards card m-3 overflow-hidden position-relative");
    let h2 = document.createElement("h2");
    h2.innerText= `${card.title}`;
    let p = document.createElement("p");
    p.innerText = `${card.text}`;
    let a = document.createElement("a");
    img.setAttribute("class","card-img cards-image");
    img.setAttribute("src",`${card.image}`);
    img.setAttribute("alt","....")
    div2.setAttribute("class","card-body w-100")
    h2.setAttribute("class","card-title");
    div2.appendChild(h2);
    let h5 = document.createElement("h5");
    h5.innerText = card.lang;
    div2.appendChild(h5);
    p.setAttribute("class","card-text");
    div2.appendChild(p);
    a.setAttribute("class","btn btn-primary");
    a.innerText ="View website";
    a.setAttribute("href",`${card.link}`);
    div2.appendChild(a); 
}






