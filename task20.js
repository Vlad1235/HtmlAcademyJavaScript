/* Техническое задание
Написать программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.
Функция принимает на вход два параметра:
- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.
Названия параметров могут быть любыми.
Внутри функции надо сравнить два проекта: срочный и обычный.
Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.
Функция getProfitableProject должна возвращать строку:
- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.
*/
function getProfitableProject(timePerProject, urgentTimeProfit) {
    var standardTimePrice = getPrice(timePerProject, false);
    var urgentTimePrice = getPrice(timePerProject, true) - urgentTimeProfit;
    if (standardTimePrice > urgentTimePrice) {
        return "Выгодней срочный проект. Потратишь на него " + urgentTimePrice;
    } else {
        return 'Выгодней обычный проект. Потратишь на него ' + standardTimePrice;
    }
}


var getPrice = function (timeConsumption, importancy) {
    var fixedRate = 1500;
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