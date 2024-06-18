const allUsers = ["Abhinav","Vaishali","Manas","Anushk","Achal","Suyash","Animesh","Mithun"];


function isUserPresent(user){
    if(allUsers.includes(user)){
        console.log(`Yes, ${user} is a valid user.`)
        return true;
    }
    else {
        console.log(`No, ${user} is not a valid user.`)
        return true
    }
}



 isUserPresent("Mithun");
isUserPresent("Akash");
