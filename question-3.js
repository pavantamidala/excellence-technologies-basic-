// Suppose you have an array of 101 integers.This array is already sorted and all numbers in this array are consecutive.Each number only occurs once in the array except one number which occurs twice.Write a js code to find the repeated number.
//     e.g $arr = array(0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10...................);
function question3(question3_array){
    
    for(let i=0;i<=question3_array.length-1;i++){
        if(question3_array[i]===question3_array[i+1]){
           
            return question3_array[i]
        }
    }
}
let question3_array = [0, 1, 2, 3, 4, 5, 5, 3, 5,5]
console.log(question3(question3_array)+" "+ "question 3")
