let buf = ''
process.stdin.on('readable',function(){
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString(); 
});

process.stdin.on('end',function(){
    let split = buf.split('\n');
    //console.log(split);
    let arr = split[0].trim().split(" ").map(x=>parseInt(x));
    let sum = arr[0] + arr[1];
    console.log(sum);
});