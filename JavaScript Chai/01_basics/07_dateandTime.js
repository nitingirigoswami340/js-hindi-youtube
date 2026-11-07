let myDate=new Date()
console.log(myDate.toString());//Thu Nov 05 2026 17:57:36 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//5/11/2026, 5:57:36 pm
console.log(myDate.toTimeString());//17:57:36 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());//5/11/2026, 5:57:36 pm
console.log(myDate.toLocaleDateString());//5/11/2026
console.log(myDate.toLocaleTimeString());//5:57:36 pm
console.log(typeof myDate);//object
let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023
let myCreatedDateTime=new Date(2023,0,23,11,30,25)
console.log(myCreatedDateTime.toTimeString())//11:30:25 GMT+0530 (India Standard Time)
letmyTimestamp=Date.now()
console.log(Math.floor(Date.now()/1000))//1709701056
let newDate=new Date()
console.log(newDate)//Thu Nov 05 2026 17:57:36 GMT+0530 (India Standard Time)
console.log(newDate.getFullYear())//2026
console.log(newDate.getMonth())//10
console.log(newDate.getDate())//5
console.log(newDate.getDay())//4
console.log(newDate.toLocaleString('default', {weekday:'long',month:'long'}))//Thursday, November
