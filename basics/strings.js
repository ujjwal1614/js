const name = "ujjwal"
const repocount = 1

// not recomendable syntax
// console.log(name + repocount + "Value"); 

// recomendable syntax
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String(`ujjwal s bhatia s n `)

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(`w`))

// const newstring = gameName.substring(0,4)
// console.log(newstring);

// const anotherstring = gameName.slice(-12,4)
// console.log(anotherstring);

// const anotherrstring = gameName.slice(-15,6)
// console.log(anotherrstring);

// negative values can only put in slice not in substrings


const newstring1 = "   ujjwal   ";
console.log(newstring1.trim());

const url = "https://ujjwal.com/ujjwal%16bhatia"
console.log(url.replace(`%16`,`-`));

console.log(url.includes(`ujjwal`));
console.log(url.includes(`ujjwall`));

console.log(gameName.split(` `));

