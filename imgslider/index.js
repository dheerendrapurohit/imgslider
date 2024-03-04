let dispImg = document.getElementById("img")

let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")


let images = [
    "https://cdn.pixabay.com/photo/2023/11/26/10/26/piano-8413277_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/02/15/34/auto-8360912_640.jpg"
]

let currentIndex = 0;


nextBtn.addEventListener('click', ()=>{
    if(currentIndex == images.length-1){
        currentIndex = 0
        console.log(' current Index > images.length',currentIndex)
    } else {
        currentIndex ++
        console.log(' current Index ++',currentIndex)
    }
    dispImg.src = images[currentIndex]
})



prevBtn.addEventListener("click",()=>{
    if(currentIndex <= 0){
        currentIndex = images.length -1
    } else {
        currentIndex --
    }
    dispImg.src = images[currentIndex]
})

console.log(images.length-1)