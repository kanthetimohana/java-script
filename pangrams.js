function ispangram(sentence)
{
    let s=sentence.toLowerCase();
    let a="abcdefghijklmnopqrstuvwxyz"
    for(let i of a)
    {
        if(sentence.indexOf(i)==-1)
        return(false);
    }
    return(true);
}
console.log(ispangram("The quick brown fox jumps over the lazy dog"));
console.log(ispangram("the five boxing wizards jump quickl"));
