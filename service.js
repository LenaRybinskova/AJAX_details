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

function getTodos() {
    const myPromise =axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return myPromise.then(data =>{return data.data})
}

function createPost(id,title, body, userId) {
    console.log("createPost зашла")
    const myPromise =axios.post(`https://jsonplaceholder.typicode.com/posts`,{
        id: userId,
        title: title,
        body: body,
        userId: userId
    });
/*    return myPromise.then(data =>{return data.data})*/
}

console.log(createPost(111, "LenaLenaLenaLenaLena", "Lena", 11))