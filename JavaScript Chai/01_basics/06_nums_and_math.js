const score=400
console.log(score)//400
const balance=new Number(100)
console.log(balance)//[Number:100]
console.log(balance.toString())//100
console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//100.00
const otherNumber=42.56789
console.log(otherNumber.toPrecision(3))//42.6
const hundreds=1000000
console.log(hundreds.toLocaleString())//10,00,000
//++++++++++++ Maths +++++++++++++++++++
console.log(Math)
console.log(Math.abs(4))//4
console.log(Math.abs(-4))//4
console.log(Math.round(4.5))//5 
console.log(Math.ceil(4.2))//5;
console.log(Math.floor(4.9))//4
console.log(Math.min(0,150,30,20,-8,-200))//-200
console.log(Math.max(0,150,30,20,-8,-200))//150
console.log(Math.random())//0.123456789
console.log(Math.random()*10 + 1)//0.
const mmin=10
const mmax=20
console.log(Math.floor(Math.random() * (mmax - mmin + 1)) + mmin)//10-20










