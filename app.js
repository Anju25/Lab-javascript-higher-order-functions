//-------ARRAY SLICE------//

var modifiedFood=["pizza","burger","fingerChips","donuts","springRoll"];
var food=modifiedFood.slice(1,4);
console.log(food);

//-------ARRAY SPLICE------//

var modifiedFood=["pizza","burger","fingerChips","donuts","springRoll"];
var food=modifiedFood.splice(2, "noodles","icecream");
console.log(modifiedFood);

//-------FILTER---------//

const numberArray=[12,324,213,4,2,3,45,4234];
isEven(numberArray);
 function isEven(numberArray)
 {
let even=numberArray.filter(function(num)
{
return (num%2==0);
});
console.log(even);
 }


 //--------ISPRIME-------//
isPrime(numberArray);
function isPrime(numberArray)
{
    let prime=numberArray.filter(function(num)
    {
       return (num%2!=0);
    });
    console.log(prime);
}

//--------NOT A PRIME------//

nonPrime(numberArray);
function nonPrime(numberArray)
{   let arr=[];
    for(var i=0;i<=numberArray.length;i++)
    {
        if(numberArray[i]%2==0)
        {
           arr.push(numberArray[i]); 
        }
    }
    console.log(arr);
}

//-----LAMBDA------//

let iseven=(numberArray)=>{
    let even=numberArray.filter(function(num)
    {
        return (num%2==0);
    });
    console.log(even);
}
iseven(numberArray);

//-------MAP--------//

const myArray=[11,34,20,5,53,16];

function findSquareOfNumbers(myArray)
{
    let square=myArray.map(function(item)
    {
             return item*item;
    });
console.log(square);
}
findSquareOfNumbers(myArray);

//------MULTIPLY-------//
 
const array=[2,3,5,10];
function multiply(array)
{
  let mul=array.reduce(function(initial,item)
  {
             return initial*item;
  },1);
console.log(mul);
}
multiply(array);