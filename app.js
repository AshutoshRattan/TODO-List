let input = document.querySelector('#input')
let button = document.querySelector('button')
let p = document.querySelector('#todo')

button.addEventListener('click', function (e) {
    if (input.value === "") return;

    let text = input.value;

    let todoText = document.createElement('p')
    todoText.innerText = text
    todoText.className = 'a'
    todoText.id = "text"

    let X = document.createElement('p')
    X.innerText = "X"
    X.className = 'a'
    X.id = "delete"

    let up = document.createElement('p')
    up.innerText = "^"
    up.className = 'a'
    up.id = "up"

    let down = document.createElement('p')
    down.innerText = "!^"
    down.className = 'a'
    down.id = "down"

    let ele = document.createElement('div')
    ele.className = 'ele'
    ele.appendChild(todoText)
    ele.appendChild(X)
    ele.appendChild(up)
    ele.appendChild(down)
    p.appendChild(ele)
    
    input.value = ""

    X.addEventListener('click', function (e){
        p.removeChild(ele)
    })

    up.addEventListener('click', function(e){
        let prevSib = ele.previousElementSibling
        console.log(prevSib)
        if(prevSib){
            let temp = todoText.innerText
            ele.children[0].innerText = prevSib.children[0].innerText
            prevSib.children[0].innerText = temp
        }
    })

    down.addEventListener('click', function (e) {
        let nextSib = ele.nextElementSibling
        console.log(nextSib)
        if (nextSib) {
            let temp = todoText.innerText
            ele.children[0].innerText = nextSib.children[0].innerText
            nextSib.children[0].innerText = temp
        }
    })

})