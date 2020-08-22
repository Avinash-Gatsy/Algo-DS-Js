function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let lookup = {};
    for(let char of str1){
        // if char exist increment or set it to 1
        lookup[char] = (lookup[char] || 0) + 1;
    }
    for(let i = 0; i < str2.length; i++){
        //can't find char for char count is 0 in lookup obj
        if(!lookup[str2[i]]){
            return false;
        }else{
            lookup[str2[i]] -= 1;
        }
    }
     return true;
  }
  
  //validAnagram('cinema','iceman');
  validAnagram('rat','car');
  //validAnagram('texttwisttime','timetwisttext');