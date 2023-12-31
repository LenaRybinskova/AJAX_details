const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")
const clickMeButton = document.querySelector("#click-me")
const getTodosButton = document.querySelector("#get-todos")

clickMeButton.addEventListener("click", () => {
// то что вернула функ makeRequest сохр в promise
    const promise = makeRequestAxios(pageNumberEl.value)
    // когда получишь ответ, запусти onDataReceived
    promise.then(onDataReceived)
})

getTodosButton.addEventListener("click", () => {
    const promise = getTodos()
    promise.then(onTodosReceived)
})

/*createPost(111, "learn JS", "bar", 111).then((data) => {
    console.log(data)
})*/


// показ картинок
function onDataReceived(data) {
    data.forEach(el => {
        const img = document.createElement("img")
        img.src = el.thumbnailUrl;
        document.querySelector("#result").append(img)
    })
}

// показ заголовки ТД
function onTodosReceived(todos) {
    todos.forEach(todo => {
        const li = document.createElement("li")
        li.innerHTML = todo.title
        document.querySelector("#task-result").append(li)
    })
}



