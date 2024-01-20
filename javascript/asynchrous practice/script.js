// let wada = new Promise ((resolve, reject) => {
//     console.log('this is a promise')
//     setTimeout(()=>{
//         console.log('data')
//         resolve('success')
//     },7000)
// })




// CallBack hell // Pyramid of Doom

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


