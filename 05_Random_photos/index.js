const imagecontainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",() => {
    let imageNum = 10;
    addnewImages()
    console.log("clicked");
})

function addnewImages(){
    const newimgEl = document.createElement("img");
    newimgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imagecontainerEl.appendChild(newimgEl);
}