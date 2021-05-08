// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output : 3[Max num of consecutive 1's is 3]
// b) 1000010001 - Output : 1[Max num of consecutive 1's is 1]
let question2_array = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]
function consecutiveNum(array){
    let maxCount = 0;
    var count = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]===1){
            count = count+1
        }else if(array[i]===0){
            count = 0
        }
        if(count>maxCount){
            maxCount = count
        }
    }
    return maxCount;
}
console.log(consecutiveNum(question2_array)+ " "+"question 2")