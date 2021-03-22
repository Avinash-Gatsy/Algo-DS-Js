// PURE RECURSION
function identifyOdds(arr){
    let result = [];
    if(arr.length === 0){
      return result;
    }
    if(arr[0] % 2 !== 0){
      result.push(arr[0]);
    }
    result = result.concat(identifyOdds(arr.slice(1)));
    return result;
  }
  
  console.log(identifyOdds([1,2,3,4,5,6,7]))
  
  // arr = [11,12,13,14,15,16,17]
  //output -> [11,13,15,17]
  
  //HELPER RECURSION
  function identifyOddsHelper(arr){
    let outputArr = [];
    function helper(input){
      if(input.length === 0){
        return;
      } if(input[0]%2 !== 0){
        outputArr.push(input[0])
      }
      helper(input.slice(1));
    }
    helper(arr);
    return outputArr;
  }
  
  console.log(identifyOddsHelper([11,12,13,14,15,16,17]))