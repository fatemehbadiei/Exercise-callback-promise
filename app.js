//asynchronous

// console.log(1);
//
// setTimeout(() =>{
//     console.log(2);
// },2000);
//
// console.log(3);

//callback

// let basket = ["macbook" , "iphone" , "apple watch"];
//
// function showBasket() {
//     setTimeout(() =>{
//         basket.forEach(product =>{
//             console.log(product);
//         });
//     },1000);
// }
//
// function addNewProduct(newProduct , callback) {
//    setTimeout(() =>{
//        basket.push(newProduct);
//        callback();
//    },3000)
// }
// addNewProduct("airpod" , showBasket)
// showBasket();


//promise

let getDataFromApi = new Promise((resolve, reject)=>{
    let getDataSuccessfully = true ;
    if (getDataSuccessfully){
        resolve("get data successfully");
    }else
    {
        reject("not found");
    }
})
console.log(getDataFromApi);
getDataFromApi.then((result)=>{
    console.log(result);
}).catch((reason)=>{
    console.log(reason);
})
