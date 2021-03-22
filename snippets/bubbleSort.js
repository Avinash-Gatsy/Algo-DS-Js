//swapping functionality
//ES5
function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES6
function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function BubbleSort(arr){
    for(let i=arr.length;i>0;i--){
        for (let j=0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

BubbleSort([34,56,8,19,22]);