function getCard()
{
    let numbers=['A','2','3','4','5','6','7','8','9','J','Q','K']
    let symbols=['clubs','hearts','spades','diamonds'];
    let a=numbers[Math.floor(Math.random()*numbers.length)];
    let b=symbols[Math.floor(Math.random()*symbols.length)];
    d={number: a,symbol:b};
    return(d);

}
console.log(getCard());