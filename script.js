const menu = document.querySelector(".menu");
let nav_btns = ["home_btn","portfolio_btn","about_btn","resume_btn","blog_btn","contact_btn"]
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
    });
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