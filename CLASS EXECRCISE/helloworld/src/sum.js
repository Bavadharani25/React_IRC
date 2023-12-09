function sum(...args){
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}
console.log(sum(2,3,4,5))
console.log(sum(20,30,40))