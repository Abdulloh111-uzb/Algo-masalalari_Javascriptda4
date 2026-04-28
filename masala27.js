// 27-misol tarmoqlanuvchi 17

let x = Number(prompt('x:'))
let f = 0

if (x <= 0) {
    f = 0
}
else if (0 < x <= 1) {
    f = x
}
else if (1 < x <= 2) {
    f = 1
}
else {
    f = -2 * x + 5
}
console.log(`${f.toFixed(2)}`)
