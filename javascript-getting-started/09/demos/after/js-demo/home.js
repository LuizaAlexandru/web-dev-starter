//Arrays in the DOM

//const containers = document.getElementsByClassName('container');
//containers[3].classList.add('d-none');
//console.log(containers);

//// Array Searching and Looping

//const values = ['a', 'bla', 'c', 'd', 'e', 'f']; //apply forEach()
//
//values.forEach(function(item){
//    console.log( item ); //a, bla, c, d, e, f
//
//});

 const values = ['a', 'bla', 'c', 'def', 'e', 'find']; //apply filter()

 const found = values.filter(function(item){
     console.log( 'item', item);
     return item.length > 2;

 });
 console.log( found ); //bla


//const values = ['a', 'bla', 'c', 'd', 'e', 'f']; //apply find()
//
//const found = values.find(function(item){
//    return item.length > 2;
//
//});
//console.log( found ); //bla


//const values = ['a', 'b', 'c', 'd', 'e', 'f']; //apply filter()
//const set = values.filter(function(item){
//    console.log('item', item );
//    return item > 'b';
//});
//console.log( set ); //[ "c", "d", "e", "f" ]

//const values = ['a', 'b', 'c', 'd', 'e', 'f'];
//console.log( values.indexOf('c')); //2
//console.log( values.indexOf('d')); //3

//slice() and splice()

//const values = ['a', 'b', 'c', 'd', 'e', 'f'];
//values.splice(2, 1, 'Hello');
//console.log( values ); // ["a", "b", "Hello", "c", "d", "e", "f"]

//const values = ['a', 'b', 'c', 'd', 'e', 'f'];
//const newValues = values.splice(1, 0,  'A', 'N', 'A' );
//console.log( newValues ); //"a","A", "N", "A", "b", "c", "d", "e", "f"
//console.log( values ); // "a", "c", "d", "e", "f"

//const newValues = values.splice(1,4);
//console.log( newValues );
//console.log( values );

//const values = ['a', 'b', 'c', 'd', 'e', 'f'];
//const newValues = values.slice(1,4);
//console.log( newValues );
//console.log( values );

//Manipulating Arrays

//const values = ['a', 'b', 'c'];
//values.push('d'); //.push() add the value 'd' in the array
//console.log( values ); //["a", "b", "c", "d"]
//const last = values.pop(); //.pop() shows the last value in the array and push she in the variable last
//console.log( values, last); //["a", "b"] c
//const first = values.shift(); //.shift()shows the first value in the array and push she in the variable first
//console.log( values, first); //["b", "c"] a
//const values = ['b', 'c'];
//values.unshift('a'); //.unshift() adds the value 'a' to the  beginning of the array
//console.log( values ); //["a", "b", "c"]

////Creating and initializing Arrays
//
//const values = ['a', 'b', 'c'];
//values[0] = 'aaaa';
//// console.log(Array.isArray(values)); //check if the variable is array
////console.log(values); //Array(3) ["a", "b", "c"]
//console.log(values[2]);
//console.log(values[0]);