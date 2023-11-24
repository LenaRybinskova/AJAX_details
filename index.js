const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")

const clickMeButton = document.querySelector("#click-me")
clickMeButton.addEventListener("click", () => {
    makeRequest(pageNumberEl.value, onDataReceived)
})

const onDataReceived = (data) => {
    data.forEach(el => {
        const img = document.createElement("img")
        img.src = el.thumbnailUrl;
        document.querySelector("#result").append(img)
    })

}

