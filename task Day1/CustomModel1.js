function sum(num1,num2)
{
    if(isNaN(num1)==true || isNaN(num2)==true)
    {
        console.log("the input in not a number");
    }
    else
    {
        console.log("the result of sum is "+(num1+num2));
    }
}

function multi(num1,num2)
{
    if(isNaN(num1)==true || isNaN(num2)==true)
    {
        console.log("the input in not a number");
    }
    else
    {
        console.log("the result of multi is "+(num1*num2));
    }
}

function sub(num1,num2)
{
    if(isNaN(num1)==true || isNaN(num2)==true)
    {
        console.log("the input in not a number");
    }
    else
    {
        console.log("the result of sub is "+(num1-num2));
    }
}

module.exports={
    sum:sum,
    sub:sub,
    multi:multi
}