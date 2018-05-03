// prints all substrings of a string
function substrings(str){
  let arr = [];
  // pick a starting point
  for(let i = 0; i<str.length; i++){
    // pick an end point
    for(let j = str.length; j>i; j--){
        substr= str.substring(i, j);
        arr.push(substr);
    };
  };
  return arr;
};
console.log(substrings('abcd'));


// prints all subsequence of a string
/*
  input: abc
  output: a, b, c, ab, bc, ac, abc

  input: aaa,
  output: a, aa, aaa

  pseudocode:
    1. Iterate over entire string
        2. Iterate from the end of the string to generate different substring
        3. Add substring to the list
            4. Drop the kth character in the substring obtained from above to generate different subsequence
            5. If the subsequence is not in the list then recur.
*/
