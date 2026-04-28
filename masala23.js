// 23-misol tarmoqlanuvchi 13

let x = Number(prompt('x:'))
let y = Number(prompt('y:'))

if (0 > x && 0 > y) {
    x = Math.fabs(x)
    y = Math.fabs(y)
    console.log(x, y)
}
if (0 > x || 0 > y) {
    console.log(x + 0.5)
    console.log(y + 0.5)
}
if (x > 0 && y > 0) {
    console.log(x, y)
}
