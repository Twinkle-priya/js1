// FOR EACH ARRAY METHODS 

/*const numbers = [1,2,3,4,5];
numbers.forEach(consoleItem);
function consoleItem(item ,index,arr){
    console.log('a['+index + ']='+item);

}*/

// COUNT OF LETTERS 
/*const letters = ['a', 'b', 'a','b', 'c', 'd','d'];
let count= {};
letters.forEach(item => {
if(count[item]) {
    count[item]++;

} 
else{
    count[item]=1;
}
    
});
console.log(count);
*/
//MAP ARRAY METHOD

/*const numbers=[1,2,3,4,5];
const numbersDouble = numbers.map(double);
function double(value , index, arr){
    return value*2;

}
console.log(numbersDouble);
*/
//  ANOTHER METHOD -----

 /*const numbers = [1,2,3,4,5,];
 const numbersDouble= numbers.map(multiply);
    function multiply(value , index , arr){
     return value * index ;
    }
    console.log(numbersDouble);
    */
   //FILTER ARRAY 
    /*const numbers= [1,3,2,4,6,8,5,7];
    const even = numbers.filter(isEven);
    function isEven(value){
        return value %2== 0;
    
}
console.log(even);
*/
// SLICE ARRAY METHOD-----
/*const numbers = [1,2,3,4,5,6,7];
const numbers2 = numbers.slice(0,4);
console.log(numbers2);
*/
//SPLICE ARRAY----
 const numbers =[1,2,3,4,56,8];
  const deleted = numbers.splice(1,4,5);
 console.log(deleted);
 console.log(numbers);
 