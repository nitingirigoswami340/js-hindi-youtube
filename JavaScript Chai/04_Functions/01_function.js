function sayHello(name){//parameters
    console.log(`Hello ${name}`)
}
sayHello("Nitin")//arguments
function addNumbers(num1,num2){
    return num1+num2
}
const result=addNumbers(5,10)
console.log("Result:",result);
function logInUser(username,password){
    if (!username || !password) {
        return "Username and password are required";
    }

    
    return `User ${username} logged in with password ${password}`
}
//console.log(logInUser("nitin", "password123"));
console.log(logInUser())//User undefined logged in with password undefined
//function with default parameters
function logInUserWithDefault(username="Guest",password="1234"){
    return `User ${username} logged in with password ${password}`
}
console.log(logInUserWithDefault())//User Guest logged in with password 1234  
//rest parameters
function sumAll(...numbers){
    let sum=0;  
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}
console.log(sumAll(1,2,3,4,5))//15
const user={
    name:"Nitin",
    age:22,
    
}
function handleObject(anyobject){
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}`)
}
handleObject(user)//Name: Nitin, Age: 22
handleObject({
    name:"John",
    age:30
})//Name: John, Age: 30
//passing array as parameter
function handleArray(arr){
    console.log(`First Element: ${arr[0]}, Second Element: ${arr[1]}`)
}
handleArray([1,2,3,4])//First Element: 1, Second Element: 2