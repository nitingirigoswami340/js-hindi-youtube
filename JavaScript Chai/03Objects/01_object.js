//singleton

//object literals
const mysym=Symbol("my Value")
const myobj={
    [mysym]:"value1",
    name:"Nitin"
}
const myUser={
    name:"Nitin",
    "full name":"Nitin Kumar",
    age:22,
    email:"nitin@example.com",
    age:18,
    islogged_in:false,
    lastLogin: ["2023-01-01","2023-01-02"]
}
console.log(myUser);
console.log(myUser.email);
console.log(myUser.age);
console.log(myUser["full name"]);
//console.log(myUser.full name)
//You can not use dot notation if the key has space in it, you have to use bracket notation instead
console.log(myobj[mysym]);//value1
myUser.email="nitin@gmail.com"
console.log(myUser.email);//nitin@gmail.com
//Object.freeze(myUser)
myUser.email="nitin@outlook.com"
console.log(myUser.email);//nitin@gmail.com
//After freezing the object, you cannot change the properties of the object. The email property remains unchanged.
myUser.greeting=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(myUser.greeting())//Hello JS user, Nitin