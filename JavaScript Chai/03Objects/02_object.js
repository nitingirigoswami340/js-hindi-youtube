const tinderUser=new Object();
//const tinderUser={} //object literal
tinderUser.id="123abc"
tinderUser.name="Nitin"
tinderUser.isLoggedIn=false
console.log(tinderUser)
const regularUser={
    email:"some@example.com",
    fullname:{
        userfullname:{
            firstname:"Nitin",
            lastname:"Kumar",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2} //this is not a valid way to merge two objects
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1==obj2)//false
console.log(obj1===obj2)//false
const obj4={...obj1,...obj2}
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//array of objects
const users=[
    {id:1,email:"user1@example.com"},
    {id:2,email:"user2@example.com"}
]
console.log(users)
console.log(users[0].email)//user1@example.com
//finding the keys of an object
console.log(Object.keys(obj1))//[ '1', '2' ]
console.log(Object.values(obj1))//[ 'a', 'b' ]
console.log(Object.entries(obj1))//[ [ '1', 'a' ], [ '2', 'b' ] ]
console.log(obj1.hasOwnProperty(1))//true
//object destructuring
const course={
    coursename:"JavaScript",
    price:999,
    courseInstructor:"Nitin"
}
const {courseInstructor}=course
console.log(courseInstructor)//Nitin
const{courseInstructor:instructor}=course
console.log(instructor)//Nitin
//object methods
const navbar=({company})=>{
    return company;
}   
navbar(company="Nitin")//Nitin
//APIs
//json
/*{
    "name":"Nitin",
    "age":"22",
    "isLoggedIn":"false"
}
[
    {},
    {},
    {}
]*/