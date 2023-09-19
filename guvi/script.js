//Day 1- codekata

//programming :
      //Machine understandable language,
      //To give instruction to the computer,
      //Reduce human effort.

//Variable:
     //store values

//values = You can store different things

//Strings = double codes kuilaa enna kuduthalum athu strings(alphabets / numbers)
//Numbers=1234

//example:
// var                       fruits          =            "apple";
// (variable/data type)   (variable name)                 (value)

//Task
//variable,                              
//variable name=batch 
//value=nmbr

//example
var name ="pavithra natrayan";
var batch ="B52 wd tamil";
var placed ="i am placed at google";
console.log(name)
console.log(batch)
console.log(placed)


//change nmbr to string :
var age = 24;
var agestring = age.toString();/* its a syntex 
intha nmbr ah string ah maatha use pandrom  */
console.log(agestring);

/*   String Methods
      1.Length 
      2.toUppercase(), toLowercase()  (Camel case)
      3.ChartAt()
      4.Substring()
      5.Split()
      6.indexOf()
      7.replace()
      8.trim()    */


 //Strings Methods:  

 //1. Length- retuns a nmbr of character is a string 

//example 1:
var fruits = "Orange";
console.log(fruits.length);
//example 2: (its also calculate space )
var fruits = " orange " 
console.log(fruits.length)
//example 3: 
var name = "pa vi"
console.log(name.length)
//example 4:
var fruits = "apple is a tasty fruit"
console.log(fruits.length)

//2.toUpperCase(), toLowerCase() - its convert a string to uppercase or lowercase
 
//example 1: (uppercase)
 var name = "pavithra is inteligent girl"
console.log(name.toUpperCase())
//example: (lowercase)
var name = "Natrayan Is A Inteligent Boy"
console.log(name.toLowerCase())

////////////////////////////////////////////////////////////////

//DAY 2 - CODECATTA 

//3.CharAt() - returns the character at a specified index in a string.

/* EX - 1
       "T R A I N S"- position
        0 1 2 3 4 5 */
var fruits = "mango"
console.log(fruits.charAt(3))
//Ex - 2 
var fruits = "ma  ngo"
console.log(fruits.charAt(4))

//4.substring(): extract a position of a string between two specified index

//example: 1
var toys = "train"
console.log(toys.substring(1,5));

 //example: 2
 var toys = "train"
 console.log(toys.substring(0,3));

 //example: 3 
 var toys = "tra in"
 console.log(toys.substring(2,3))


//Array  -(group of element)

//example:
var name = "pavithra"
var age =24;
var hight = 158;
var batch = "52wd tamil"
var person = [name,age,hight,batch]
console.log(person);
console.log(person[2]);


//5. split():split is a string Into an array of substring based on specified separater
        //(including space)

//example:1
var mystring = "hello, world"
var myArray = mystring.split(",");
console.log(myArray);

 //example:2
 var mystring = "hello world "
 var myArray = mystring.split()
console.log(myArray)

//example:3
var mystring = "hello world"
var myArray = mystring.split("")
console.log(myArray)

//example:4
var mystring = "hello wor ld"
var myArray = mystring.split(",")
console.log(myArray)


//6. indexOf():returns the index of the first occurance of the special value in a string 

//example:1
var mystring = "name"
console.log(mystring.indexOf("m"));
 

//7.replace();replace a specified value is a new value.

//example:
var mystring = "nume"
var newstring = mystring.replace("u","a");
console.log(newstring);


//8.trim():removes whitespace from both end of the string.
 
//example:
var name= " pavithra "
console.log(name.trim())


//boolean:true/false

//example:1
var age = 24;
console.log(age>25);

//example:2
var age = 24
console.log(age>21);

/* if:
      syntex:
            if?(condition)()
                  //code to be executed when the condition is true.
                  ) */
                  
//example:1                  
 var x = 4;
 if(x % 2== 0)
      console.log("Even")
 else 
      console.log("Odd")

//example:2
var x=3
if(x % 2==0)
      console.log("Even")
else
      console.log("odd")      

/* 
== - only check values
=== - both values and type */

//example
var x = 0; 
var y = "0" 
console.log(x==y)
console.log(x===y)

 
/////////////////////////////////////////////////////////////////
                
//DAY 3 - CODECATA

var x = 0;
var y = "3-3"
var z = "0"

if(x===y){
      console.log("first condition")
}
else if(x===z){
      console.log("second condition")
}
else if(x==y){
      console.log("third condition")
}
else{
      console.log("game over")
}


//SWITCH CASE: it basically act like a switchboard checks for input against predefined cases

//syntex:
       /* switch (variable to be checked){
       case value1:
             //code to be executed when variable to be checked matches
             value1
             break;
       case value2:
            //code to be executed when variable to be checked matches
            break;
            default:
 */

//example:
var category = "3"
switch(category){
      case"1":
       console.log("Go To Heaven");
      break;
      case "2":
       console.log("Go To World");
      break;
      case"3":
       console.log("Go To School");
      break;
      default:
       console.log("World Close");

}

//example 2:
var category = "pavi IT professional"
switch(category){
      case "natrayan IT professional":
      console.log("work from home");
      break;
      case "pavi IT professional":
      console.log("work from home 2");
      break;
      case "nandhu IT professional":
      console.log("work from home 3");
      break;
      default:
      console.log("all are IT professinal with good salary package and allowances");

}

//example 3:
var category = "nandha"
switch(category){
      case "natrayan":
      console.log("my salary 200000");
      break;
      case "pavithra":
      console.log("my salary 100000");
      break;
      default:
      console.log("both salaries are high");  
}

/* Loops:
      1.For Loop: set of instruction that you follow over & over again until you are done.

example:
      Box

      toys 1......10

syntex:
        toy 1          toy10     t1,t2,t3......t10
for(initialization; condition; updating){      
      }
       */


//example:
var toys = ["ball,car,doll,train,bus,teddy,cycle,puzzle"];
console.log("playing with toys using a for loop");
for(var i=0; i<toys.length; i++){
      console.log("playing with toys", toys[i]);
}
console.log("play time over");

//Visualize code: http://pythontutor.com/render.html#mode=display
//Task: Add Student Names more than 5 & try to print each name using for loop(5 mins)




////////////////////////////////////////////////////////////////////

// Day 4 - Codekata
//while loop: following of instructions until a certain condition met.
                  //(battery iruka varaum than car work aagum)
//syntax:
      //while(condition)
       //body along with statement terminating at same point  

//example:       
            //condition = "battery empty"

var batteryLevel = 5
console.log("playing with a remote control car");
while(batteryLevel > 0){
      console.log("playing with a toy car");
      batteryLevel--;
}
console.log("the toy car battery is empty!!!")