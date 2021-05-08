// Question 1
// Define an array of numbers(use any random numbers).Write a program to print only the even numbers of the array.Do not use any library functions, need to do via for loops only
function question1(){
let array = [100,2323,3387,8,9377,2834]
for(let i=0;i<=array.length;i++){
    if(array[i]%2===0){
        console.log(array[i])
    }
}
}

question1()