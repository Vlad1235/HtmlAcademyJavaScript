var now = new Date();

var dateString = now.toString();
var theYear = now.getFullYear();
var theDayOfWeek = now.getDay();

// передаем в конструктор наше свойство
var birthday = new Date("May 1, 1983");
console.log(birthday);