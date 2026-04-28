// 24-misol tarmoqlanuvchi 14

let x = Number(prompt('x:'))
let y = Number(prompt('y:'))
let z = Number(prompt('z:'))

if (x + y > z && x + z > y && y + z > x){
    console.log("Yes")
}
else {
    console.log("No")
}
