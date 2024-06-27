//Check Whether Enter Number Positive or not

var positiveOrNegtive=Number(prompt("Enter Number To check number is Positive or Negitive"));

if(positiveOrNegtive>=0)
{
    alert("Number is positive:"+positiveOrNegtive);
}
else
{
    alert("Enter Number is Negitive number");
}

// Write a Program to check whether the entered number is odd or even.

var oddOrEven=Number(prompt("Enter Number To check number is odd or even"));
if(oddOrEven%2==0)
{
        alert("Number is Even:"+oddOrEven);
}
else
{
        alert("Number is Odd");
}

//Write a Program to perform mathematical calculations addition, division and multiplication on two numbers using Switch statement.
action=prompt("action should Enter in +,-,*,/");
let number1=parseInt(prompt("Enter Number1 To Perform action"));
let number2=parseInt(prompt("Enter Number2 To Perform action"));
switch(action)
{
    case '+':
    {
        sum=number1+number2;
        alert("Addition of two numbers is:"+sum);
        break;
    }
    case '-':
    {
        sub=number1-number2;
        alert("Addition of two numbers is:"+sub);
        break;
    }
    case '/':
    {
        div=number1/number2;
        alert("Addition of two numbers is:"+div);
        break;
    }
    case '*':
    {
        mult=number1*number2;
        alert("Addition of two numbers is:"+mult);
        break;
    }
    default:
    {
        alert("Enter action is Invalid");
    }
}

//Write a Program to enter an age of user and check if he is eligible to vote or not.

var age=Number(prompt("Enter the age To check  eligible for vote or not"));

if(age>=18)
{
   alert("congrats your are eligible for vote")
}
else
{
    alert("sorry to say your not eligible for vote")
}


//Write a Program to check whether the entered number is divisible by 7.

var num=Number(prompt("Enter the number to check which divided by 7 or not"));
if(num%7==0)
{
    alert("Enter Number is divisible by 7: ");
}
else
{
    alert("Enter Number is not divisible by 7: ");
}