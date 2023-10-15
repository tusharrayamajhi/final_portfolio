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
        image:"https://th.bing.com/th/id/OIP.AFvpFVl7hgBvxmuP_XytNQHaFf?pid=ImgDet&w=1024&h=759&rs=1",
        title:"sudukos solver 9X9",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam",
        lang:"language use: HTML,CSS,JS",
        link:"",
    },
    {
        image:"https://th.bing.com/th/id/R.fa34aa07a35154db5ca4c45068ed94c2?rik=16BQtHeloISx%2bQ&riu=http%3a%2f%2fprofesores.fi-b.unam.mx%2fing_gpemn%2fcpi%2fimagenes%2freflejo.jpg&ehk=ivoH2v87aGBlSq5JCpuAzg8MqO9%2fKWw2cO6N17cqYz0%3d&risl=&pid=ImgRaw&r=0",
        title:"Todo website",
        text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam",
        lang:"language use: HTML,CSS,JS",
        link:"",
    },
    {
        image:"https://www.freejpg.com.ar/asset/900/a3/a385/F100004703.jpg",
        title:"Todo website",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam",
        lang:"language use: HTML,CSS,JS",
        link:"",
    },
    {
        image:"https://sergiomadrigal.com/wp-content/uploads/2014/01/blog_fisheye.jpg",
        title:"Todo Website",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam dolor sit amet consectetur adipisicing elit. Eos esse quam laboriosam",
        lang:"language use: HTML,CSS,JS",
        link:"",
    }
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






