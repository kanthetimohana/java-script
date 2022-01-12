let studentNames=['RM','JIN','SUGA','J-HOPE','JIMIN','V','JUNGKOOK'];
let rollNumbers=[1,2,3,4];
let projectNames=['m',4,'me'];
let artists=['BTS','EXO','BLACKPINK','EVANLIN','JUSTIN'];
console.log(artists);
//push operation on arrays: add the element at end of the arrays
let btsSongs=['NO MORE DREAMS','LIFE GOES ON','BOY WITH LUV','BOY IN LUV'];
btsSongs.push("BABY");
console.log(btsSongs);
//pop operation on arrays: remove the element from the end.
btsSongs.pop();
console.log(btsSongs);
//unshift operation on arrays: add the element at front of array and returns the length of array
a=btsSongs.unshift("BABY");
console.log(a);
console.log(btsSongs);
//shift operation on arrays: remeove the first element from array and returns removed element
b=btsSongs.shift();
console.log(b);
console.log(btsSongs);

//concat opeartion on arrys: it combines two or more arrays
//syntax array1.concat(array2,array3,......)
//output: [array1 elements,array2 elements, array3 elements]
let exoSongs=['love shot','growl','monster','ko bo pop'];
let ateezSongs=['wave','wonderland','answer','illusion'];
let kpopSongs=btsSongs.concat(exoSongs,ateezSongs);
console.log(kpopSongs);


//includes operation on arrays: this method check whether element present in array or not and 
//returns true or false
//syntax  array1.include(elements)
c=kpopSongs.includes("illusion");
console.log(c);
c=kpopSongs.includes("answer",'illusion');
console.log(c);
c=kpopSongs.includes("wonderland",'illusion');
console.log(c);
c=kpopSongs.includes("baby");
console.log(c);

//indexOf operation on arrays: return the index of given element if not returns -1
//syntax array1.indexOf(element);
c=kpopSongs.indexOf('NO MORE DREAMS');
console.log(c);
c=kpopSongs.indexOf("baby");
console.log(c);

//reverse: it just in place the reverse array 
//syntax array1.reverse()
kpopSongs.reverse();
console.log(kpopSongs);
kpopSongs.reverse();
console.log(kpopSongs);

//join: it returns the string by joining the all elements of array
//syntax array1.join(arug)
a=[1,2,3,4,5];
b=a.join();
console.log(b);
b=a.join("->");
console.log(b);

