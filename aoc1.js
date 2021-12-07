"use strict";
exports.__esModule = true;
var fs = require("fs");
var read = function (file) { return fs.readFileSync(file, 'utf8').split('\n'); };
//Day 1 - **
var i1 = read("input1.txt").map(Number);
var r = function (a, x, i, xs) { return a + (x > xs[i - 1] ? 1 : 0); };
var s = i1.map(function (x, i, xs) { return x + xs[i + 1] + xs[i + 2]; });
// console.log(i1.reduce(r, 0)) //1715
// console.log(s.reduce(r, 0)) //1739
//Day 2 - *
var i2 = read("input2.txt").map(function (x) { return x.trim(); });
var r2 = function (a, x) {
    var c = x.slice(0, 1);
    var n = Number(x.slice(-1));
    if (c == 'f')
        return [a[0] + n, a[1]];
    if (c == 'd')
        return [a[0], a[1] + n];
    if (c == 'u')
        return [a[0], a[1] - n];
};
var re = i2.reduce(r2, [0, 0]);
// console.log(re[0] * re[1]) //
//Day 3 - *
var i3 = read("input3.txt").map(function (x) { return x.trim().split(''); });
var a = i3.reduce(function (a, xs) { return xs.map(function (x, i) { return a[i] += Number(x); }); }, Array(i3[0].length).fill(0));
var g = a.reduce(function (a, x) { return (a + (x <= i3.length / 2 ? '0' : '1')); }, '');
console.log(a, g, parseInt(g, 2) * (Math.pow(2, g.length) - parseInt(g, 2) - 1));
