import * as fs from 'fs';

const read = (file: string) => fs.readFileSync(file, 'utf8').split('\n')

//Day 1 - **
const i1 = read("input1.txt").map(Number)
const r = (a, x, i, xs) => a + (x > xs[i - 1] ? 1 : 0)
const s = i1.map((x, i, xs) => x + xs[i + 1] + xs[i + 2])

// console.log(i1.reduce(r, 0)) //1715
// console.log(s.reduce(r, 0)) //1739

//Day 2 - *
const i2 = read("input2.txt").map(x => x.trim())
const r2 = (a, x) => {
  const c = x.slice(0, 1)
  const n = Number(x.slice(-1))
  if (c == 'f') return [a[0] + n, a[1]]
  if (c == 'd') return [a[0], a[1] + n]
  if (c == 'u') return [a[0], a[1] - n]
}
const re = i2.reduce(r2, [0, 0])

// console.log(re[0] * re[1]) //1636725

//Day 3 - *
const i3 = read("input3.txt").map((x: String) => x.trim().split(''))
const a = i3.reduce((a, xs) => xs.map((x, i) => a[i] += Number(x)), Array(i3[0].length).fill(0))
const g = a.map(x => x > i3.length / 2 ? 0 : 1).join('')

console.log(parseInt(g, 2) * (Math.pow(2, g.length) - parseInt(g, 2) - 1)) //3687446

