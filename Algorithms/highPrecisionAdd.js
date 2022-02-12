//https://www.acwing.com/problem/content/793/
/* 给定两个正整数（不含前导 0），计算它们的和。

输入格式
共两行，每行包含一个整数。

输出格式
共一行，包含所求的和。

数据范围
1≤整数长度≤100000
输入样例：
12
23
输出样例：
35 */


let buf = '';

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) {
        buf += chunk.toString();
    }
});

process.stdin.on("end", function () {
    let lines = buf.split('\n');
    //if (lines.length === 2) {
        let arr1 = lines[0].split('').map(x => parseInt(x)).reverse();
        let arr2 = lines[1].split('').map(x => parseInt(x)).reverse();

        let ret = add(arr1, arr2);
        console.log(ret);
    //}
});

function add(arr1, arr2) {
    let ret = [];

    let t = 0;
    for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
        if (i < arr1.length) {
            t += arr1[i];
        }
        if (i < arr2.length) {
            t += arr2[i];
        }
        ret.push(t % 10);
        t = t >= 10 ? 1 : 0;
    }

    if (t) {
        ret.push(1);
    }

    ret = ret.reverse().join('');
    //console.log(ret);
    return ret;
}