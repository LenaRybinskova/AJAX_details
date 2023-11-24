// сервис умеет делать запросы, в нее все приходит параметрами
// уровень DAL, посредник между UI и сервером

function makeRequest(pageNumber,successCallback) {
    $.ajax(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`, {
        success: successCallback
    });
}