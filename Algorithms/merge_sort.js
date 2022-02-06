//Problem link: https://www.acwing.com/problem/content/789/

const N = 100010;
let buf = '';
let temp = new Array(N);

//Here chunk.toString()  can't be changed to chunk.toString().
//Otherwise the result will be incorrect.
process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk) {
        buf += chunk.toString();
    }
});

let getLineInputArgs = line => {
    return line.split(' ').filter(x => x != '').map(x => parseInt(x));
}

process.stdin.on('end', function () {
    var lines = buf.split('\n');
    lines.forEach((line, lineIdx) => {
        if (lineIdx === 0) {
            n = parseInt(line);
            //console.log(n);
        } else if (lineIdx === 1) {
            let arr = getLineInputArgs(line);
            mergeSort(arr, 0, n-1);
            console.log(arr.join(' '));
        }
    });
});

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let mid = parseInt((l + r) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    //let temp = new Array(r - l + 1);
    let k = 0;
    let  i = l;
    let  j = mid + 1;
    while (i <= mid && j <= r) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= r) {
        temp[k++] = arr[j++];
    }
    for (i = l, t = 0; i <= r; i++, t++) {
        arr[i] = temp[t];
    }
}
