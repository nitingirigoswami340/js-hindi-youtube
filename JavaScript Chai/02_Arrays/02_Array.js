const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","batman","flash"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)//["thor", "ironman", "spiderman", Array(3)]
console.log(marvel_heroes[3])//["superman", "batman", "flash"]
console.log(marvel_heroes[3][0])//superman
const aar1=[1,2,3,4]
const aar2=[5,6,7,8]
const aar3=[9,10,11,12]
const newArray=aar1.concat(aar2,aar3)
console.log(newArray)//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//spread operator
const newArray2=[...aar1,...aar2,...aar3]
console.log(newArray2)//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//flattening an array
const arr=[1,2,[3,4],[5,6]]
const flatArr=arr.flat()
console.log(flatArr)//[1, 2, 3, 4, 5, 6]
//convert into array
const myName="hitesh"
const myNameArr=Array.from(myName)
console.log(myNameArr)//['h', 'i', 't', 'e', 's', 'h']








