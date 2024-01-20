// Async Await 

// function api() {
//     return new Promise ( (resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("weather data")
//             resolve(200)
//         },3000)
       
//     })
// }
// async function getWeatherData(){
//     await api();
//     await api();
//     await api();
// }

function getData(dataId){
        return new Promise((resolve, reject) => {
            console.log(`getting data : ${dataId}`)
            setTimeout(()=>{
                console.log('data', dataId)
                resolve('success')
            },2000)
        })
    }

async function Data(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
}
 

// Promise chaining / Promise chain
// function data1 (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data 1')
//             resolve('fulfilled data 1')
//             // reject('network error')
//         }, 4000)
//     })
// }

// function data2 (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data 2')
//             // resolve('fulfilled')
//             resolve('fulfilled data 2')
//         }, 4000)
//     })
// }

// function data3 (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data 3 error')
//             // resolve('fulfilled')
//             reject('network error data 3')
//         }, 4000)
//     })
// }

// console.log('fetching data 1')
// const p1 = data1()
// p1.then(res=>{
//     console.log(res);
//     console.log('fetching data 2')
//     const p2 = data2();
//     p2.then(res => console.log(res))
// } 

// )
// console.log('fetching data 1')
// data1().then((res) =>{
//     console.log(res)
//     console.log('fetching data 2')
//      data2().then(res =>{
//         console.log(res)
//         console.log('fetching data 3')
//                data3().catch(err =>{
//                 console.log(err)
//             })
//      })
// })



// CallBack hell / Pyramid of Doom

// function getData(dataId, getNewData){
//     return new Promise((resolve, reject) => {
//         console.log(`getting data : ${dataId}`)
//         setTimeout(()=>{
//             console.log('data', dataId)
//             resolve('success')
            
//             if(getNewData){
//                 getNewData()
//             }
//         },2000)
//     })
// }

// getData(1).then( res =>{
//     return getData(2)
//     .then( res => {
//         return getData(3)
//         .then(()=>{
//             console.log(res)
//         })
//     })
// })


// const data1 = getData(1)
// data1.then(res=>{
//     console.log(res)
// })




// 

// function getdata (dataId ,getNextData){
//     console.log('fetching data', dataId)
//     setTimeout(()=>{
//         console.log('dataId',dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },3000)
// }

// getdata(1,()=>{
//     getdata(2, ()=>{
//         getdata(3, ()=>{
//             getdata(4)
//         })
//     }) 
// })


