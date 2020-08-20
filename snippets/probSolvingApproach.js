function charCount(str){
    //create empty obj to store char keys and count
    let result = {}
    //loop over the string
    for(let char of str){
       //check for char and numbers, convert uppercase to lowercase
       char = char.toLowerCase();
       //ignore special chars like space, >, /
       if(/[a-z0-9]/.test(char)){
            //add to obj
           result[char] = ++result[char] || 1
       } 
    }   
    //return obj
    return result;
}
var t1=performance.now();
charCount('It is working !!!')
var t2=performance.now();
console.log((t2-t1)/1000);

function isAlphanumeric(char){
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && //numeric(0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123)){ //lower alpha (a-z)
      return false;
   }
  return true;
}

function charCount2(str){
    //create empty obj to store char keys and count
    let result = {}
    //loop over the string
    for(let char of str){
       //ignore special chars like space, >, /
       if(isAlphanumeric(char)){
           //check for char and numbers, convert uppercase to lowercase
           char = char.toLowerCase();
           //add to obj
           result[char] = ++result[char] || 1
       } 
    }   
    //return obj
    return result;
}
var t3=performance.now();
charCount('It is working !!!')
var t4=performance.now();
console.log((t4-t3)/1000);