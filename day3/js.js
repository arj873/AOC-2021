fs = require('fs')
arr = fs.readFileSync('in.txt').toString().split("\n");
// console.log(arr)
// is1 =[0,0,0,0,0,0,0,0,0,0,0,0]
// is0 =[0,0,0,0,0,0,0,0,0,0,0,0]
// arr.forEach(i => {
//     for (let x = 0; x < i.length; x++) {
//         if(i[x] == "1"){
//             is1[x]+=1
//         }else[
//             is0[x]+=1
//         ]
//     }
// });
// g = ""
// e = ""
// for (let i = 0; i < is1.length; i++) {
//     if(is1[i] > is0[i]){
//         g+="1"
//         e+="0"
//     }else{
//         g+="0"
//         e+="1"
//     }
// }
// // 15 p1
// dg = parseInt(g,2)
// de = parseInt(e,2)
// console.log(de*dg)

bo = ""
bc = ""
oarr1 = arr
oarr2 = []
carr1 = arr
carr2 = []

for (let x = 0; x < oarr1[0].length; x++) {
    is1 = 0
    is0 = 0
    for (let i = 0; i < oarr1.length; i++) {
        if(oarr1[i][x] == "1"){
            is1++
        }else if(oarr1[i][x] == "0"){
            is0++
        }else{
            console.log("what 1")
        }
    }
    if(is1 == is0){
        tmp = 1
    }else if (is1 > is0){
        tmp = 1
    }else if(is1 < is0){
        tmp =0
    }
    oarr1.forEach(element => {
        if(element[x] == tmp){
            oarr2.push(element)
        }
    });
    oarr1 =[]
    oarr1 = oarr2
    oarr2 =[]
    console.log(oarr1)
}








































// for (let i = 0; i < arr.length; i++) {
    
    
   
//     for (let x = 0; x < arr[i].length; x++) {
//         if(arr[i][x] == 1){            
//             amount1[x]++
//         }else if(arr[i][x] == 0){
//             amount0[x]++
//         }else{
//             console.log("what how")
//         }
//     }
//     to=""
//     if(amount0 == amount1){
//       to="1"
//     }else if(amount0 > amount1){
//         to="1"
//     }else if(amount0 < amount1){
//         to="0"
//     }else {
//         console.log("no shot")
//     }

// }




















// po = []
// pc = []

// mostc = []
// for (let i = 0; i < is1.length; i++) {
//     console.log(is1[i] )
//     console.log(is0[i] )
//     console.log("split")

//     if(is1[i] == is0[i]){
//         mostc[i] = "2"
//     }else if(is1[i] > is0[i]   ){
//         mostc[i] = "1"
//     }else if(is1[i] < is0[i]   ){
//         mostc[i] = "0"
//     }
// }
// console.log(mostc)
// arr.forEach(i => {
//     for (let x = 0; x < i.length; x++) {
//         if(mostc[x] == i[x] ){

//         }else{
//             break;
//         }
//         po[x] = i

//     }
// });

// arr.forEach(i => {
//         for (let x = 0; x < i.length; x++) {
//                if(mostc[x] !== i[x]  ){

//               }else{
//                  break ;
//             }
//                pc[x] = i
//             }
//     });

// console.log(po)
// console.log(pc)

// o =0
// po.forEach(x => {
//     o += parseInt(x,2)
// });
// c =0
// pc.forEach(x => {
//     c += parseInt(x,2)
// });

// console.log(oc)