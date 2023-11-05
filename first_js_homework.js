/******************************** */
//Section 1
/******************************** */
/*
1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

DRY stands for Don't Repeat Yourself. It's a way of programming that reduces code repitition. We have talked about using functions that we can call to perform specific actions so that we are not telling the computer to perform something on or change every single variable individually.

2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources

const means that the variable is constant/can't be changed. var means the variable can be changed and it can be function scoped or globally scoped. let can be changed and it is block scoped.

*/
/****************************************** */
//Section 2
/***************************************** */

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

function lessThan(var1, var2){
    if (var1 < var2){
        console.log(var1 + " is less than " + var2)
    }
}

function greaterThan(var1, var2){
    if (var1 > var2){
        console.log(var1 + " is greater than " + var2)
    }
}

function equals(var1, var2){
    if (var1 == var2){
        console.log(var1 + " is the same as " + var2)
    }
}

function theGreatest(var1, var2, var3){
    if (a < b < c){
        console.log(var1 + " is less than " + var2+ " which is less than " + var3)
    }
}

function multiply(var1, var2, var3){
    if(var1*var2 === var3){
        console.log(var1 + " times "+ var2 + " equals " + var3)
    }
}

function notEquals(var1, var2){
    if(var1 !== var2){
        console.log(var1 + " does not equal " +  var2)
    }
}

lessThan(a, b);
greaterThan(c,d);
equals(e,e);
theGreatest(a,b,c);
multiply(a,a,d);
notEquals(e, 'Kevin');
notEquals(48,'48');
notEquals(f,e);

let g = 0;
console.log("g equals " +  g);

g = b+c;
console.log("g equals " + g);

/*
Did you use const, let or var? Why did you choose the one you chose?
I used let because I knew that the variable was going to change.

What happens if you don't use const , let or var? Do you get an error? If so what does it say?
I didn't get an error if I don't use const, let or var.

what happens if you write 10 = g?
I get an error saying "Syntax Error: Invalid left-hand sid in assignment"
*/

/****************************************** */
//Section 3
/****************************************** */
/*
Is the code below an infinite loop? Why or why not?
while (true) {
	console.log('Do not run this loop');
}
Yes, it's an infinite loop because the value will always be true. It is never changed to false to stop the loop.

is this loop and infinite loop? Why or why not?
const runProgram = true;
while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
it's infinite, you can't change a const variable.

Infinite or not infinite? What is the expected output?
the variable runProgram is declared as a const which means it cannot be changed. I think the code will probably generate an error when it gets to the line of code that tries to change a const varable.

The following while loop uses a comound asignment operator. Without running this loop, what is the expected output?
*/
//declare a changeable variable called letters and assign it the value "A"
let letters = "A";
//declare a changeable variable calle i and assign it the value 0
let i = 0;
//while the value of i is less than 20, perform the following task
while (i < 20) {
    //add an "A" character onto the variable letters
	letters += "A";
    //increase the value of i by one
	i++;
   //closes the while loop which stops running when i = 20 
}
//prints the final value of letters once the loop has finished running
console.log(letters);
//The code is what I expected.

/*************************************** */
//Section Four
/************************************** */
/*
A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
For loops are useful when you know how many times you would like the loop to run through. While loops will run until a particular condition is met and can take various kinds of variables.

What are the three components of the control panel? Each component is separated by a semicolon ;.

The first part of the control panel is: initializates a loop counter
The second part of the control panel is: the condition expression, if the condition is true the loop continues
The third part of the control panel is:increases or decreases the value of the variable initalized in control panel 1
*/

//WRITE A FOR LOOP THAT WILL CONSOLE.LOG THE NUMBERS 0 TO 999
for(i = 0; i < 1000; i++){
    console.log(i);
}

//USING A POSTFIX OPERATOR i-- INSTEAD OF i++ WRITE A FOR LOOP THAT ITERATES IN REVERSE
for(i = 999; i >=0; i--){
    console.log(i);
}

//WRITE A FOR LOOP THAT USES STRING CONCATENATION TO SEND A MESSAGE TO THE CONSOLE AS WELL AS THE CURRENT VALUE OF i

for(i = 1; i <= 10; i++){
    console.log("The value of i is "+ i);
}