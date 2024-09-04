//not yet working
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover",() => {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;
    btnEl.style.setProperty("--xPos", x+"px");
    btnE1.style.setProperty("-yPos", y + "px");  
})