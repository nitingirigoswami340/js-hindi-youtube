const name="Nitin giri"
const count=26
console.log(name+count+"age")
console.log(`Hello my name is ${name} and my repo count is ${count}`)
const gameName=new String('hiteshhc')
console.log(gameName[0])//h
console.log(gameName.__proto__)//{}
console.log(gameName.length);//8
console.log(gameName.charAt(2))//t
console.log(gameName.indexOf('t'));//2
const newString=gameName.substring(0,4)
console.log(newString)//hite
const anotherString=gameName.slice(-8,4)
console.log(anotherString)//hite
const newStringOne=" hitesh   "
console.log(newStringOne.trim())//hitesh
const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace("%20"," "))//https://hitesh.com/hitesh chaudhary
console.log(url.includes("hitesh"))//true
console.log("hitesh".toUpperCase())//HITESH
console.log(gameName.split('-'))

