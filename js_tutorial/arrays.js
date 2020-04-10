var numbers=[51,61,71,81,91];
var mynumber=numbers[0];
console.log(mynumber);  // displays the element at the 0th position
numbers[1]=71;
console.log(numbers);        // replaces the element at the 1th position of the array 'nunbers' with new element 71
var nestednumberarray=[[51,45,31],[34,56,71]];
nestednumberarray[0]=[87,98.12];
console.log(nestednumberarray);    // replaces element of the nested array with a new array element
var bigarray=[[0,1,2],[6,7,8],[17,18,19],[54,67,78]];
bigarray[1][1]=71;
console.log(bigarray);    // replace elements in a nested array
var newarray=["dog",1];
newarray.push=["cat",1];       // push new array to the array 'newarray'.
console.log(newarray);
newarray.unshift(["mouse",1]);  //The similar thing can be done using unshift function. It adds an element to the beginning of the array
console.log(newarray);
newnumbersarray=numbers.pop();     //removed 91 (last element) from the array 'numbers'. To remove the first element we use numbers.shift()
console.log(numbers);             // displays the current elements of the array 'numbers'






