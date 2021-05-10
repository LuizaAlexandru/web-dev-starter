// Scope and Hoisting

//Undeclared Variables and Strict Mode

'use strict';

const productId = 1234;

console.log(productId); //1234

//'use strict';
//
//productId = 1234;
//
//console.log(productId); //assignment to undeclared variable productId

//productId = 1234;
//
//console.log(productId); //1234

//var and Hoisting

//showProductId();
//
//function showProductId() {
//    console.log(123) //123
//}


//productId = 456;
//
//console.log(productId); // can't access lexical declaration 'productId' before initialization
//
//let productId = 123;


//productId = 456;
//
//console.log(productId); // productId 456
//
//var productId = 123;


//console.log(productId); //undefined
//
//var productId = 123;

//Function Scope

//let productId = 12345; //global scope variable
//
//function showProductId() {
//
//    function fix (){
//
//        console.log('in fix: ', productId);// in fix: 12345
//    }
//
//    fix();
//
//console.log('in showProductId: ', productId); // in showProductId: 12345
//}
//showProductId();

//function showProductId() {
//    let productId = 12345;
//
//    function fix (){
//        let productId = 45678;
//        console.log('in fix: ', productId);// in fix: 45678
//    }
//
//    fix();
//
//console.log('in showProductId: ', productId); // in showProductId: 12345
//}
//showProductId();

//function showProductId() {
//    let productId = 12345;
//
//}
// console.log(productId); //  productId is not defined because the variable it is declared in function
//
//showProductId();

//function showProductId() {
//    let productId = 12345;
//    //console.log(productId);
//}
//
//showProductId();


//Global Scope

//const app = {
//    productId: 12345,
//    userName: 'Luiza',
//    orderNumber: 789
//};
//
//function showProductId() {
//    console.log(app.productId);
//}
//
//showProductId();

//let productId = 12345;
//
//function showProductId() {
//    console.log(productId);
//}
//
//ShowProductId();