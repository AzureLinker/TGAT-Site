const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) =>{
    let header = item.querySelector("header");
    header.addEventListener("click", ()=> {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `calc(${description.scrollHeight}px + 1em)`;
            item.querySelector("i").classList.replace("bx-plus", "bx-minus");
        } else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
    })
    
});