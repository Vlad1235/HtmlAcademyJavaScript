/* 
Задача. Написать функцию, которая проверяет на валидность переданный ей телефонный номер.
*/
var telNumber = '123-4567';

function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
    return false;
    }
    var first = phoneNumber.substring(0,3);
    var second = phoneNumber.substring(4);
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
    return false;
    }
    return true;
}

var NumberIsCorrect = phoneNumber(telNumber);
