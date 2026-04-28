// 22-misol tarmoqlanuvchi 12
let a = Number(prompt('a:'))
let b = Number(prompt('b:'))
let c = Number(prompt('c:'))
let d = Number(prompt('d:'))
let maxx = 0
let minn = 0
if (a <= b && b <= c && c <= d) {
    maxx = Math.max(a, b, c, d)
    if (maxx == a) {
        a = b + c + d
        console.log(b, c, d)
    }
    if (maxx == b) {
        b = a,c,d
        console.log(a,c,d)
    }
    if (maxx == c) {
        c = a + b + d
        console.log(a, b, d)
    }
    if (maxx == d) {
        d = a + b + c
        console.log(a, b, c)
    }
}
else {
    minn = Math.min(a,b,c,d)
    if (minn == a) {
        a = b + c + d
        console.log(b, c, d)
    }
        console.log(b,c,d)
    if (minn == b) {
        b = a + c + d
        console.log(a, c, d)
    }
    if (minn == c) {
        c = a + b + d
        console.log(a, b, d)
    }
    if (minn == d) {
        d = a + b + c
        console.log(b, c, a)
    }
}
