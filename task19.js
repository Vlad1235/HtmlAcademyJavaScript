/*
Написать программу для расчёта стоимости проекта. У неё должно быть два параметра:
- время (в часах), которое нужно потратить на проект;
- булево значение, которое указывает на срочность проекта — true для срочного заказа и false для обычного.
Названия параметров могу быть любыми.
Для каждого проекта есть фиксированная ставка — 1500 рублей в час. Расчёт стоимости проектов выглядит так: время * ставка в час.
Есть несколько нюансов. 
Если проект срочный, то часы уменьшаются в два раза, а ставка за час повышается в 2.5 раз.
А если время проекта больше 150 часов, ставка в час уменьшается на 250 рублей.
В первую очередь проверяй срочность. 
Функция должна возвращать стоимость проекта.
*/

var getPrice = function (timeConsumption, importancy) {
    var fixedRate = 1500;
    
    // важностость ДА, время выполненения меньше 150
    // важноость Да время выполнения больше 150
    // важность НЕТ время выполнения меньше 150
    // важность НЕТ время выполнения больше 150
    
    if (importancy === true && timeConsumption <= 150) {
        timeConsumption = timeConsumption / 2;
        fixedRate = fixedRate * 2.5;
    } else if (importancy === true && timeConsumption > 150) {
        timeConsumption = timeConsumption / 2;
        fixedRate = fixedRate * 2.5;
        fixedRate = fixedRate - 250;
    } else if (importancy === false && timeConsumption <= 150) {
        
    } else if (importancy === false && timeConsumption > 150) {
        fixedRate = fixedRate - 250;
    }
    var totalValue = timeConsumption * fixedRate;
    return totalValue;
}