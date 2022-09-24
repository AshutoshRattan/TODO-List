let input = document.querySelector('#input')
let button = document.querySelector('button')
let p = document.querySelector('#todo')


function ad(){
    
}

try {
    let arr = JSON.parse(localStorage.getItem('text'))
    arr.forEach(text => {
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

        X.addEventListener('click', function (e) {
            let arr = JSON.parse(localStorage.getItem('text'))
            arr = arr.filter(e => e !== text)

            localStorage.setItem('text', JSON.stringify(arr))
            p.removeChild(ele)
        })

        up.addEventListener('click', function (e) {
            let prevSib = ele.previousElementSibling
            console.log(prevSib)
            if (prevSib) {
                let arr = JSON.parse(localStorage.getItem('text'))
                let indexOne = arr.indexof(text)
                let indexTwo = arr.indexof(prevSib.children[0])
                let temp2 = arr[indexTwo]
                arr[indexTwo] = arr[indexOne]
                arr[indexOne] = temp
                localStorage.setItem('text', JSON.stringify(arr))
                console.log(arr)

                let temp = todoText.innerText
                ele.children[0].innerText = prevSib.children[0].innerText
                prevSib.children[0].innerText = temp
            }
        })

        down.addEventListener('click', function (e) {
            let nextSib = ele.nextElementSibling
            console.log(nextSib)
            if (nextSib) {
                let arr = JSON.parse(localStorage.getItem('text'))
                let indexOne = arr.indexof(text)
                let indexTwo = arr.indexof(nextSib.children[0])
                let temp2 = arr[indexTwo]
                arr[indexTwo] = arr[indexOne]
                arr[indexOne] = temp2
                console.log(arr)
                localStorage.setItem('text', JSON.stringify(arr))

                let temp = todoText.innerText
                ele.children[0].innerText = nextSib.children[0].innerText
                nextSib.children[0].innerText = temp
            }
        })
    });
    
} catch (error) {
    
}

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
    let arr = JSON.parse(localStorage.getItem('text'))
    console.log(arr)
    if (arr) {
        arr.push(text)
        localStorage.setItem('text', JSON.stringify(arr))
    }
    else{
        localStorage.setItem('text', JSON.stringify([text]))
    }

    X.addEventListener('click', function (e){
        let arr = JSON.parse(localStorage.getItem('text'))
        arr = arr.filter(e => e !== text)

        localStorage.setItem('text', JSON.stringify(arr))
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