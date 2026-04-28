// 26-misol tarmoqlanuvchi 16

let a = Number(prompt('a:'))
let y = 0

if (a < 0){
    y = -1 / a ** 2
}
else if(a < 2){
    y = a ** 2
}
else{
    y = a
}
console.log(`${y.toFixed(2)}`)
