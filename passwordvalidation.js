function isvalidPassword(password,username)
{
    let a=false;
    if(password.length>=8 && (password.includes(username)==false) && (password.includes(" ")==false))
    {
        a=true;
    }
    return(a);
    
}
console.log(isvalidPassword('dogluvr123','dogluvr'));
console.log(isvalidPassword('$67huG9huuygt','suga'));
console.log(isvalidPassword('chicken1234','chicken'));
