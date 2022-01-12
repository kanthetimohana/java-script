function average(number)
{
    let sum=0;
    for(let num of number)
    {
        sum+=num;
    }
    return(sum/(number.length));
}
console.log(average([0,50]));
console.log(average([75,76,80,95,100]));