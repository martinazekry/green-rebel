const hdr = document.getElementById("hdr");
const hdrr = document.getElementById("hdrr");
const parallax = document.querySelectorAll(".parallax");
const searchToggle = document.getElementById("searchToggle");
const searchOverlay = document.getElementById("searchOverlay");
const searchBackdrop = document.getElementById("searchBackdrop");
const zoom = document.getElementById("zoom");
const map = document.getElementById("map");


window.addEventListener("scroll" , function(){
    if(window.scrollY > 40){
        hdr.classList.add("scroll")
    }
    else{
        hdr.classList.remove("scroll")
    }
});
window.addEventListener("scroll",function(){
    if(window.scrollY>40){
        hdrr?.classList.add("scroll1")
    }
    else{
        hdrr?.classList.remove("scroll1")
    }
});

window.addEventListener("scroll" , () =>{
   const scrolled= window.scrollY;
//    parallax.style.transform = `translateY(-${scrolled * 0.2}px)`;
parallax.forEach(el => {
    el.style.transform =`translateY(${scrolled * el.dataset.speed}px)`
});
});

searchToggle?.addEventListener("click" , (e) =>{
    searchOverlay?.classList.toggle('active')
    searchBackdrop?.classList.toggle("active")

});
window.addEventListener("click" , (e)=>{
    const isClickInside = searchOverlay?.contains(e.target)||
    searchToggle?.contains(e.target);
    if(!isClickInside){
        searchOverlay?.classList.remove("active");
        searchBackdrop?.classList.remove("active");
    }
});


zoom?.addEventListener("click" ,()=>{
    map.classList.toggle("fullscreen")
    document.body.classList.toggle("no-scroll")
    zoom.classList.toggle("fa-expand")
    zoom.classList.toggle("fa-compress")
} );