const menu = document.querySelector(".menu");
let nav_btns = ["home_btn","portfolio_btn","about_btn","resume_btn","blog_btn","contact_btn"];
let a = ["home","portfolio","about","resume","blogs","contact"];
for(let i = 0;i<nav_btns.length;i++){
    document.querySelector(`.${nav_btns[i]}`).addEventListener("click",()=>{
            for(let j = 0;j<a.length;j++){
                if(j == i){
                    document.querySelector(`.${a[i]}`).style.display = "flex";
                    document.querySelector(`.${nav_btns[i]}`).setAttribute("id","change");
                }else{
                    document.querySelector(`.${a[j]}`).style.display = "none";
                    document.querySelector(`.${nav_btns[j]}`).removeAttribute("id","change");
                }
            }
            let select = document.querySelector(`.${nav_btns[i]}`);
            if(select.classList.contains("home_btn")){ 
                removeportfolio();
            }else if(select.classList.contains("portfolio_btn")){
                showportfolio(); 
            }else if(select.classList.contains("about_btn")){
                removeportfolio();
                
            }else if(select.classList.contains("resume_btn")){
                removeportfolio();
    
            }else if(select.classList.contains("blog_btn")){
                removeportfolio();
                
            }else{
                removeportfolio();
    
            }

    });
}




function showportfolio(){
    const card = document.querySelectorAll(".card");
    let i =0;
    var id = setInterval(()=>{   
        card[i].style.transform = "scale(1)";
        card[i].style.opacity = "1";
        i++;
    },100);
    setTimeout(()=>{
        clearInterval(id);
    },400);
}
function removeportfolio(){
    const card = document.querySelectorAll(".card");
    let i =0;
    var id = setInterval(()=>{   
        card[i].style.transform = "scale(0)";
        card[i].style.opacity = "0";
        i++;
    },100);
    setTimeout(()=>{
        clearInterval(id);
    },400);


}








menu.addEventListener("click",()=>{
    let i = document.querySelector(".menu>i");
    const list = document.querySelector(".menu_list");
    if(i.classList.contains("fa-bars")){
        list.style.display ="flex";
        i.classList.remove("fa-bars");
        i.classList.add("fa-bars-staggered");
        
    }else{
        list.style.display ="none";
        i.classList.remove("fa-bars-staggered");
        i.classList.add("fa-bars");
    }
})