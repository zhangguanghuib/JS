//https://www.acwing.com/problem/content/787/

let buf = '';
let N = NaN;
let arr = [];

process.stdin.on("readable", function () {
    var chunk = process.stdin.read();
    if (chunk) {
        buf += chunk.toString();
    }
});

function quick_sort(l, r) {
    if (l >= r) {
        return;
    }

    let i = l - 1, j = r + 1;
    let x = arr[parseInt((l + r) / 2)];

    while (i < j) {
        do {
            ++i;
        }
        while (arr[i] < x);

        do {
            --j;
        }
        while (arr[j] > x);

        if (i < j) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }

    quick_sort(l, j);
    quick_sort(j + 1, r);

}

process.stdin.on('end', function () {
    let lines = buf.split('\n');
    lines.forEach(function (line, lineIdx) {
        if (isNaN(N)) {
          N = parseInt(line.trim());
            //console.log(N);
        } else if(lineIdx % 2 === 1){
            //arr = getInputArgs(line);
            arr = line.trim().split(' ').filter(x => x != '').map(x => parseInt(x));
            quick_sort(0,N - 1);
            console.log(arr.join(' '));
        }
    });
});


let getInputArgs = line => {
    //输入参数有空字符需要去除
    return line.split(' ').filter(s => s !== '').map(x => parseInt(x));
}

// The below code can not be accepted becaue of missing  if(lineIdx % 2 === 1)
/*
process.stdin.on("end", function () {
    let lines = buf.split('\n');
    lines.forEach(line => {
        if (isNaN(N)) {
            N = parseInt(line.trim());
            //console.log(N);
        } else {
            arr = line.trim().split(' ').filter(x => x != '').map(x => parseInt(x));
            quick_sort(0, N-1);
            console.log(arr.join(' '));
        }
    });
});*/
