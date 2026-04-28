// 25-misol tarmoqlanuvchi 15

let a = Number(prompt('a:'))
let b = Number(prompt('b:'))
let c = Number(prompt('c:'))
let D  = b ** 2 - 4 * a * c
let x1 = 0
let x2 = 0
if (D < 0) {
    console.log('No')
}
else {
    x1 = -b + Math.sqrt(D) / 2 * a
    x2 = -b - Math.sqrt(D) / 2 * a
    console.log(`${x1.toFixed(2)}`)
    console.log(`${x2.toFixed(2)}`)
}
