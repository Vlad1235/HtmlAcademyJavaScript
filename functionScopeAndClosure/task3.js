/*
Еще пример замыкания
*/
function makePassword(password){
    var storedPassword="abcd";
    return function checkPassword(password){
        return storedPassword===password;
    };
};

var getPassword = makePassword();
if(getPassword("abcd")){
    console.log("Password correct, you can come in");
} else {
    console.log("get out");
};