// сервис умеет делать запросы, в нее все приходит параметрами
// уровень DAL, посредник между UI и сервером
// data access layer - слой доступа к данным

/*function makeRequest(pageNumber) {
    const myPromise =$.ajax(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`);
    return myPromise
}*/

function makeRequestAxios(pageNumber) {
    const myPromise =axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`);

    return myPromise.then(data =>{return data.data})
}