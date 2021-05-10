//Showing and Hiding DOM Elements

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById ('review');

    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
})

//Detecting Button Clicks

//const button = document.getElementById('see-review');
//
//button.addEventListener('click', function(e) {
//    console.log('click', e);
//})
//Styling DOM Elements

//const header = document.getElementById('message');
//
//header.style.fontSize = '40px';
//header.style.fontWeight = '800';
//header.style.color = 'blue';
//header.style.lineHeight = '200px';

//Standard Built-in Objects

//let s ='Hello';
//showMessage( s.charAt(0) );

//showMessage(Math.abs(-42) );

//let now = new Date();
//showMessage( now.toDateString() );

//Passing Objects to Functions

//let person = {
//    name: 'Luiza',
//    age: 30,
//    partTime: false,
//};
//
//function incrementAge(person){
//    person.age++;
//}
//
//incrementAge( person );
//
//showMessage(person.age);

//let message = 'Hello';
//
//function changeMessage(message) {
//    message = 'Hi!';
//}
//
//changeMessage(message);
//
//showMessage(message);//the result is 'Hello'


//Objects Method

//let person = {
//    name: 'Luiza',
//    age: 30,
//    partTime: false,
//    showInfo: function() {
//        showMessage(this.name + ' is ' + this.age);
//    }
//};
//showMessage( typeof person.showInfo );

////Objects Properties
//
//let mySymbol = Symbol();
//
//let person = {
//    name: 'Luiza',
//    age: 30,
//    partTime: false,
//    [mySymbol]: 'secretInformation'
//};
//person['age'] = 29;
//showMessage(person.age);
