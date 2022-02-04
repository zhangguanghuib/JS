//https://www.acwing.com/problem/content/description/1/
/*
输入两个整数，求这两个整数的和是多少。

输入格式
输入两个整数 A,B ，用空格隔开

输出格式
输出一个整数，表示这两个数的和

数据范围
0≤A,B≤108
样例输入：
3 4
样例输出：
7
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
    console.log(line);
    if (line) {
        let list = line.split(' ').filter(s => s != '').map(x => parseInt(x));
        console.log(list);
        let ret = list[0] + list[1];
        console.log(ret);
    }
});