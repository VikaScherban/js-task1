// Find determinant of matrix
let matrix = [[3,2,3], [1,5,3], [1,2,3]];

function Determinant(arr){
  const n = arr.length;
  let resArr = [];
  let denom = 1;
  let exchanges = 0;

  // Copy arr to resArr
  for (let i = 0; i < n; i++) {
      resArr[i] = [];
      for (let j = 0; j < n; j++){
          resArr[i][j] = arr[i][j];
      }
  }

  // Bareiss algorithm
  for (let i = 0; i < n - 1; i++){
      let maxN = i;
      let maxValue = Math.abs(resArr[i][i]);

      // Find maximum value in column
      for(let j = i + 1; j < n; j++){
          let value = Math.abs(resArr[j][i]);

          if(value > maxValue){
              maxN = j;
              maxValue = value;
          }
      }
      if (maxN > i){
          let temp = resArr[i];
          resArr[i] = resArr[maxN];
          resArr[maxN] = temp;
          ++exchanges;
      } else if (maxValue === 0) return maxValue;

      let value1 = resArr[i][i];
      for (let j = i+1; j < n; j++){
          let value2 = resArr[j][i];

          resArr[j][i] = 0;
          for(let k = i+1; k < n; k++){
              resArr[j][k] = (resArr[j][k]*value1 - resArr[i][k]*value2) / denom;
          }
      }
      denom = value1;
  }
  if (exchanges%2 && resArr[n-1][n-1] !== 0) return -resArr[n-1][n-1];

  return resArr[n-1][n-1];
}

console.log(Determinant(matrix));
