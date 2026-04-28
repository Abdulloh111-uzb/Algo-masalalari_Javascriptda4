// 28-misol tarmoqlanuvchi 18

let a = Number(prompt('a:'))
let y = 0
let z = -a
if (a < 0) {
    y = z
}
else if (a < 2) {
    y = 0
}
else {
    y = z ** 2
}
console.log(`${y.toFixed(2)}`)
