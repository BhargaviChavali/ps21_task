const prompt =require("prompt-sync")();
// 1 : input: HelloWorld

// output:
// d - 1
// e - 1
// H - 1
// l - 3
// o - 2
// r - 1
// W - 1

// Code :

let str= prompt("Enter a string : ").replaceAll(" ","");
let upper="";
let arr=[];
let emp=[];
for(i of str)
{
  if(i == i.toUpperCase())
  upper+=i;
if(!emp.includes(i.toLowerCase()))
  emp.push(i.toLowerCase());
}
str=str.toLowerCase();
emp.sort();
for(i of emp)
    {
        c=0;
        for(j of str){
            if(i==j)
                c++;
        }
        if(upper.includes(i.toUpperCase()))
            console.log(i.toUpperCase()+"->"+c);
        else
        console.log(i+"->"+c);
    }


// 2 : input: HelloWorld

// output:
// d - 1
// e - 1
// l - 3
// o - 2
// r - 1
// H - 1
// W - 1

// Code :

let str1 = prompt("Enter a string: ").replaceAll(" ", "");
let upper1="";
let emp1=[];

for (let i of str1) {
    if (i==i.toUpperCase()) {
        upper1 += i;
    }
    if (!emp1.includes(i.toLowerCase())) {
        emp1.push(i.toLowerCase());
    }
}

str1 = str1.toLowerCase();
emp1.sort();

let combinedList=emp1.concat(upper1.split(""));
let uniqueChars=[];

for (let char of combinedList) {
    if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
    }
}

for (let i of uniqueChars) {
    let c1=0;
    for (let j of str1) {
        if (i.toLowerCase()==j) {
            c1++;
        }
    }
    if (upper1.includes(i)) {
        console.log(i+"->"+c1);
    } else {
        console.log(i.toLowerCase()+"->"+c1);
    }
}

