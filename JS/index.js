let text = document.querySelectorAll(".text_line");
text.forEach((e)=>{
    e.addEventListener("click",()=>{
        var child = e.children;
        for (let index = 2; index < child.length; index++) {
            const element = child[index];
            if(element.style.display == "block"){
                    element.style.display= "none";
            }
            else {
                element.style.display= "block";
            }

        }
    })
})

let search_fiald = document.getElementById("search_fiald")
search_fiald.addEventListener("keydown",(e)=>{
    if(e.keyCode == 13){
        var str = String(search_fiald.value);
        if(str.includes("برمجة")){
            document.location.assign("programming.html")
        }else if(str.includes("هندسة")){
            document.location.assign("login(ltr).html")
        }
        search.parentElement.parentElement.children[0].style.display = "block"
        search.parentElement.parentElement.children[2].style.display = "block"
        search.parentElement.parentElement.children[3].style.display = "none"
        search_fiald.value = ""
        
    }
})
let search = document.getElementById("search");
search.addEventListener("click",()=>{
    if(search.parentElement.parentElement.children[0].style.display == "none" || search.parentElement.parentElement.children[2].style.display == "none"){
        search.parentElement.parentElement.children[0].style.display = "block"
        search.parentElement.parentElement.children[2].style.display = "block"
        search.parentElement.parentElement.children[3].style.display = "none"
    }
    else{
        search.parentElement.parentElement.children[2].style.display = "none"
        search.parentElement.parentElement.children[0].style.display = "none"
        search.parentElement.parentElement.children[3].style.display = "block"
        search_fiald.focus()
        
    }
})
var imgs = document.querySelectorAll(".books-container img");
imgs.forEach(e =>{
    e.addEventListener("mouseenter",()=>{
        // console.log(e.src)
        // console.log(e.parentNode)
        e.style.boxShadow = "0px 0px 20px 0px black"
        e.attributes.item(2).value = 123
        e.attributes.item(3).value = 203
        // console.log(e.attributes.item(2))
        // console.log(e.attributes)        
        console.log()
        
    })
    e.addEventListener("mouseout",()=>{
        
        e.style.boxShadow = "0px 0px 0px 0px black"
        e.attributes.item(2).value = 125
        e.attributes.item(3).value = 200
        // console.log(e.attributes.item(2))
    })
})
