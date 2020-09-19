//maxSubarrSum([1,2,4,5,8,9,2,3,5,6],3) //22

//NAIVE approach
function maxSubarrSum(inputArr, n){
    let max = -Infinity;
    for(let i = 0;i < inputArr.length - n;i++){
        let temp;
        for(let j=0; j<n; j++){
            temp += inputArr[i+j];
        }
        max = Math.max(temp, max)
    }
    return max;
}

let t1 = performance.now()
maxSubarrSum([1,2,4,5,8,9,2,3,5,6],3)
let t2=performance.now()
console.log((t2-t1)) //0.065ms

//Sliding Window Pattern
function maxSubarrSum2(inputArr, n){
    let maxSum = 0;
    for(let i=0;i<n;i++){
        maxSum+=inputArr[i]
    }
    let tempSum = maxSum;
    for(let j=n; j<inputArr.length; j++){
        tempSum = tempSum - inputArr[j-n] + inputArr[j];
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum;
}

let t3 = performance.now()
maxSubarrSum2([1,2,4,5,8,9,2,3,5,6],3)
let t4=performance.now()
console.log((t4-t3)) //0.050ms