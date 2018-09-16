
const arr = [-5,6,7,1,4,-8,16];

function findMaxSum(arr){
  let currentMaxSum = 0;
  let nextMaxSum = 0;
  for(let i = 0; i<arr.length; i++){
    nextMaxSum = 0;
    for(let j = i; j<arr.length; j++){
      nextMaxSum += arr[j];
      if(nextMaxSum>currentMaxSum){
        currentMaxSum = nextMaxSum;
      }
    };
  };
  return currentMaxSum;
};

function findMaxSumDynamic(arr){
  let currentMaxSum;
  let globalMaxSum;
  currentMaxSum = globalMaxSum = arr[0];
  for(let i = 1; i<arr.length; i++){
    currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
  };
  if(currentMaxSum > globalMaxSum){
    globalMaxSum = currentMaxSum;
  };
  return globalMaxSum;
};

