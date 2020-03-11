let minusButton = document.getElementById('-')
let plusButton = document.getElementById('+')
let likeButton = document.getElementById('<3')
let pauseButton = document.getElementById('pause')
let submitButton = document.getElementById('submit')

let counterH1 = document.getElementById('counter')
let commentDiv = document.getElementById('list')

let commentForm = document.getElementById('comment-form')
let likesUl = document.getElementsByClassName('likes')[0]


document.addEventListener("DOMContentLoaded", function(){
    let intervalCounter = window.setInterval(increment, 1000)
    function increment(){
        parseInt(counterH1.innerText++)
    }
    
    let isPaused = false
    document.addEventListener("click", function(event){
        if (event.target === pauseButton){
            if (isPaused) {
                intervalCounter = window.setInterval(increment, 1000)
                pauseButton.innerText = 'pause'
                minusButton.disabled = false
                plusButton.disabled = false
                likeButton.disabled = false
                submitButton.disabled = false
                
                isPaused = false
            } else {
                clearInterval(intervalCounter)
                pauseButton.innerText = 'resume'
                minusButton.disabled = true
                plusButton.disabled = true
                likeButton.disabled = true
                submitButton.disabled = true
                
                isPaused = true
            }
        }
        if (event.target === minusButton){
            counterH1.innerText--
        }
        if (event.target === plusButton){
            counterH1.innerText++
        }
        if (event.target === likeButton){
            let nodes = Array.from(likesUl.childNodes)
            let likeCounter = nodes.filter(node => node.innerText.split(" ")[0] === counterH1.innerText)
            if (likeCounter.length > 0) {
                likeCounter[0].innerText = `${counterH1.innerText} has been liked ${parseInt(likeCounter[0].innerText.split(" ")[4]) + 1} times`
            } else {
                let li = document.createElement('li')
                li.innerText = `${counterH1.innerText} has been liked 1 time`
                likesUl.append(li)
            }
        }
    })
})

commentForm.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event.target.elements[0].value)
})

