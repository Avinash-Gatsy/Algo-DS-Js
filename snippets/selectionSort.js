function selectionSort(arr){
    for(let i=0; i< arr.length; i++){
        let min = i;
        for(let j=i+1; j< arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            //SWAP
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
selectionSort([35,22,9,12,87,45]);

//OUTPUT
//[9, 12, 22, 35, 45, 87]