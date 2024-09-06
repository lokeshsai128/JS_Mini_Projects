const testimonials = [
    {
        name : "Julia Rodriguez",
        photoUrl : "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
        text : "Apple truly delivers top-notch quality with their innovative phone technology. I am impressed by the sleek design and powerful performance of their products. Apple has definitely set the bar high in the tech industry."
    },
    {
        name : "Emily Reynolds",
        photoUrl : "https://media.istockphoto.com/id/1337224508/photo/young-hispanic-girl-wearing-casual-clothes-happy-face-smiling-with-crossed-arms-looking-at.jpg?s=1024x1024&w=is&k=20&c=RSN-UqDXN6ZQwI6U4aBy3H5X7Xu7qsDCtl4vWhTFupI=",
        text : "I couldn't be happier with my new phone from Apple. The sleek design and impressive features make it a must-have device for anyone on the go. Apple truly delivers on innovation and quality."
    },
    {
        name : "Sarah Johnson",
        photoUrl : "https://media.istockphoto.com/id/811400362/photo/young-coquette-posing-on-pink.webp?s=1024x1024&w=is&k=20&c=lTEIY8stKEZrEuEd08ZEq4ZJMMeQTaMI0e11dzlPLls=",
        text : "I am extremely satisfied with Apple's innovative phone. The sleek design, advanced features, and user-friendly interface make it a must-have device for anyone looking for a top-of-the-line mobile experience."
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let index = 0;

function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[index];
    imgEl.src=photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++
    setTimeout(() => {
        updateTestimonial();
    }, 2000);
}