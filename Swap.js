function swap(arr){
   //the code..
  //The values used in the example in question. 
  
  let temp = arr[0]; // temp=1
  arr[0] = arr[arr.length -1]; //arr[0] = -2
  
  arr[arr.length -1] = temp; // here the swap arr[3] cause the length array = 4 and the last argument arr[3] = 1
  console.log(arr);
}
