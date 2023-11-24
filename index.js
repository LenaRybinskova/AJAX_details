

const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")

const clickMeButton = document.querySelector("#click-me")
clickMeButton.addEventListener("click", makeRequest)

function makeRequest() {
    // из инпута взяли номер и указали его номером albumId
    $.ajax(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumberEl.value}`, {
        success: (data) => {
            data.forEach(el => {
                const img = document.createElement("img")
                img.src = el.thumbnailUrl;
                document.querySelector("#result").append(img)
            })
        }
    });
    console.log(pageNumberEl.value)
}
