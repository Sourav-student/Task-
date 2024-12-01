const shows  = document.querySelectorAll("#show");
console.log(shows);

shows.forEach((show)=>{
    show.addEventListener("mouseover",()=>{
        show.style.opacity = '1'
        show.style.top = '0'

    })
})