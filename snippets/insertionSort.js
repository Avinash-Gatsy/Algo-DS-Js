//https://visualgo.net/en/sorting

function insertionSort(arr){
    for(var i=1; i < arr.length; i++){
        let curr = arr[i];
        for(var j = i-1; j>=0 && arr[j] > curr; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = curr;
    }
    return arr;
}
insertionSort([8,3,15,22,9,1]);
// [1, 3, 8, 9, 15, 22]