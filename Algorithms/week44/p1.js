// https://www.acwing.com/problem/content/4320/

let buf = '';

process.stdin.on('readable', function(){
    let chunk = process.stdin.read();
    if(chunk){
        buf += chunk.toString();
    }
});

process.stdin.on('end', function(){
    let split = buf.split('\n');
/*     
    for(let i=0; i<split.length; ++i){
        console.log(split[i]);
    } */

    let n = parseInt(split[0]);
    let arr = split[1].trim().split(" ").map(x=>parseInt(x));
    
    // console.log(n);
    // console.log(arr);

    let set = new Set();

    arr.forEach((x, i)=>{
        if(x>0){
            set.add(x);
        }
    });

    console.log(set.size());
});