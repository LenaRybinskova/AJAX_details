const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")
const clickMeButton = document.querySelector("#click-me")

clickMeButton.addEventListener("click", () => {
// то что вернула функ makeRequest сохр в promise
  const promise =  makeRequestAxios(pageNumberEl.value)
    // когда получишь ответ, запусти onDataReceived
    promise.then(onDataReceived)
})

const onDataReceived = (data) => {
    data.forEach(el => {
        const img = document.createElement("img")
        img.src = el.thumbnailUrl;
        document.querySelector("#result").append(img)
    })

}

