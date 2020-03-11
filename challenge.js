let minusButton = document.getElementById('-')
let plusButton = document.getElementById('+')
let likeButton = document.getElementById('<3')
let pauseButton = document.getElementById('pause')

let counterH1 = document.getElementById('counter')
let commentDiv = document.getElementById('list')

let commentForm = document.getElementById('comment-form')
let likesUl = document.getElementsByClassName('likes')[0]

document.addEventListener("DOMContentLoaded", function(){
    let intervalCounter = window.setInterval(increment, 1000)
    function increment(){
        parseInt(counterH1.innerText++)
    }

    document.addEventListener("click", function(event){
        if (event.target === minusButton){
            console.log("minus")
        }
        if (event.target === plusButton){
            console.log("plus")
        }
        if (event.target === likeButton){
            console.log("like")
        }
        if (event.target === pauseButton){
            clearInterval(intervalCounter)
        }
    })
})

commentForm.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event.target.elements[0].value)
})

