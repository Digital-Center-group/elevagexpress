hamburger.onclick = ()=>{
    hamburger.classList.toggle("open"); //toggle va permettre au click si l'element n'a pas la class open il l'ajoute et si il a il la retir
    nav_ul.classList.toggle("slide");
    document.body.classList.toggle("noscrol")
}
onscroll = ()=>{
    const page = document.documentElement;
    let totalHeight = page.scrollHeight;
    let visibleHeight = page.clientHeight;
    let scrolling = page.scrollTop;
    let max = page.scrollHeight-page.clientHeight;
    progressBar.style.width = Math.floor(scrolling/max*100)+"%";

    if(progressBar.style.width=="100%"){
        progressBar.style.backgroundColor = "green";
    }
    else{
        progressBar.style.backgroundColor = "rgb(192, 127, 6)";
    }
}
