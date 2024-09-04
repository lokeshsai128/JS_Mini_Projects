const imagecontainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",() => {
    imageNum = 10;
    addnewImages()
    console.log("clicked");
})

function addnewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newimgEl = document.createElement("img");
        newimgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*9000)}`;
        imagecontainerEl.appendChild(newimgEl);
    }
}
    