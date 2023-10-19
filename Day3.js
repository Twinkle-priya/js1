//TO STRING METHOD 
 let num =[ 1,2,3,4,5,];
 let b = num.toString(num); //b is now a string-----------
 //console.log(b)

 //JOIN METHOD
 let a = [2,3,4,5,6];
 let b1 = a.join("_"); // ADD OR JOIN ANYTHING WRITTEN IN DOUBLE QOUTES------
 //console.log(b1);

 //POP METHOD

 let arr=[ 12,32,41,20,71];
 let arr1 = arr.pop(arr); // REMOVES THE LAST ELEMENT FROM THE GIVEN ARRAY------
 //console.log(arr1 ,arr);

 //PUSH METHOD---
 let arr2=[ 12,32,41,20,71];
 let arr3 = arr2.push(23); //PUSH METHOD ADDS AN ELEMNT IN THE ARRAY OR RETURNS THE NEW ARRAY LENGTH-------
 //console.log(arr3,arr2)

 //SHIFT METHOD-------
 let num1 =[ 1,2,3,4,5];
 let d = num1.shift() // REMOVES THE  FIRST ELEMENT OF THE ARRAY------------
 //console.log(d, num1)

 //UNSHIFT METHOD-------

let num2 =[ 1,2,3,4,5];
 let d1 = num2.unshift(91) // ADDS AN ELEMENT TO THE BEGINING OF AN  ARRAY-------
 //console.log(d1, num2) 

 //DELETE METHOD--------
 let num3 = [1,3,4,56,6,7,2];
 console.log(num3.length, num3)
  delete num[0]
// console.log(num3.length)

//CONCAT METHOD-------
let n1= [1,2,3,4,5,6]
let n2= [12,23,43,56,10,61]
let n3 = [1,5,87,9,43,56,22]
let n4 = n1.concat(n2,n3) // CONCAT MORE THAN 2 ARRAYS--------
//console.log(n4)

//SORT METHOD------------
let num4 =[12, 34,76,90,45,23,11];
num4.sort() // SORT THE ARRAY ALPHABETICALLY IT MEANS IT WILL SORT THE ARRAY A/C TO THE NUMBERS POSITION LIKE ALL THE NO'S STARTING WITH 1  COME 1ST ,THEN STRATING WITH 2 AND SO ON.
//console.log(num4)

//SPLICE AND SLICE METHOD-------------
let num5 =[12,34,78,90,24,55,76];
num5.splice(1,4,120,234,675,989)// SPLICE CAN BE USED TO ADD NEW ELEMENTS TO THE ARRAY .....
console.log(num5);

c//onst numbers = [1,2,3,4,5,];
 const numbersDouble= numbers.map(multiply);
 function multiply(value , index , arr){
  return value * index ;
 }
 console.log(numbersDouble);

//FILTER ARRAY 
 const numbers= [1,3,2,4,6,8,5,7];
 const even = numbers.filter(isEven);
 function isEven(value){
     return value %2== 0;
 
}
console.log(even);



