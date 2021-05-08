// Question 5
// Assume there is a object of this format
// var obj = {
// “id” : 4, “name” : “abc”,
// “id” : 10, “name” : “ab2”,
// “id” : 5, “name” : “abc3”,
// “id” : 6, “name” : “abc5”
// }
// It can be a dictionary or java object, as per your language of choice.But its key / value pair dictionary simply.

// Write a code to sort the object by id
// I.e final output should have objected sort by id’s





// note:- the input object was changed from 
// var obj = {                                      
//     id: 4, name: "abc",
//     id: 10, name: "ab2",     
//     id: 5, name: "bc3",
//     id: 6, name: "bc5"
// }
//  to this

// var obj =[
//     { id: 4, name: "abc" },
//     { id: 10, name: "ab2"},
//     { id: 5, name: "bc3"},
//     { id: 6, name: "bc5"}
// ]
// because duplicates keys are not valid in javascript



function objSorting(arr) {
    
let ans =arr.sort((obj1,obj2)=>{
    return obj1.id -obj2.id
})    
return ans
}
var question5_array = [
    { id: 4, name: "abc" },
    { id: 10, name: "ab2" },
    { id: 5, name: "bc3" },
    { id: 6, name: "bc5" }
]
 console.log(objSorting(question5_array))
