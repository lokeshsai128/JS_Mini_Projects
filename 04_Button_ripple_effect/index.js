const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover",() => {
    console.log(event.pageX - btnEl.offsetTop);
})