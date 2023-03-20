function showNameAndBirthdate(name,date)
{ 
    var today = new Date();
    var birthDate = new Date(date);
    
    if(birthDate.getUTCFullYear() >=2023)
    {
        console.log("this is invalid birthdate");
    }
    else
    {
        var age = today.getFullYear() - birthDate.getFullYear();

        console.log(" Hello "+name +" your age is "+ age );
    }
}

module.exports=showNameAndBirthdate;