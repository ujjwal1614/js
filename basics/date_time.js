// date 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);


// to display date and day in string format
let mydatee = new Date(2023, 0, 23)
// console.log(mydatee.toDateString()); 


// to display date and time in (dd/mm/yy)
let mydaate = new Date(2024, 8, 10, 18, 9)
// console.log(mydaate.toLocaleString());

// to display date and time in (mm/dd/yy)
let mydatte = new Date("10-09-2024")
// console.log(mydatte.toLocaleString());



// time stamps

let myTimestamp = Date.now()

// console.log(myTimestamp);
// in milliseconds
// console.log(mydaate.getTime()); 

//in seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))








