const express = require("express");
const app = express();
const path = require("path");
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let i = 2;
let lists = [
    {
        id:0,
        title:"cook",
        des:"cook dal bhat",
    },
    {
        id:1,
        title:"Eat",
        des:"eat dal bhat",
    }
]

app.get("/",(req,res)=>{
    res.render("index",{lists});
});
app.post("/addtask",(req,res)=>{
    let task = {
        id:i,
        title:req.body.title,
        des:req.body.des,
    }
    i++;
    lists.push(task);
    res.redirect("/");
});
app.get("/edit/:id",(req,res)=>{
    let t = req.params;
    for(let list of lists){
        if(list.id == t.id){
            res.render("edit",{list});
        }
    }
});
app.post("/update/:id",(req,res)=>{
    lists[req.params.id].title = req.body.title;
    lists[req.params.id].des = req.body.des;
    res.redirect("/");
})
app.get("/add",(req,res)=>{
    res.render("add");
});



app.get("/delete/:id",(req,res)=>{
    console.log(req.params.id);
    lists.splice(req.params.id,1);
    i = 0;
    for(let list of lists){
        list.id = i;
        i++;
    }
    res.redirect("/")
})
app.listen("3000",()=>{
    console.log("server is running");
    
});
