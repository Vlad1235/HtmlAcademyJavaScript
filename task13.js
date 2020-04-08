/* Техническое задание
Пройдена ли квалификация?
Есть длины прыжков в массиве attempts.Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.Квалификационное значение хранится в переменной qualificationDistance.
Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.
*/
var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;

for (var i = 0; i < attempts.length - 1; i++) {
    var maxValue = attempts[i];
    for (var z = i + 1; z < attempts.length; z++) {
        if (attempts[z] > maxValue) {
            maxValue = attempts[z];
            var swap = attempts[i];
            attempts[i] = attempts[z];
            attempts[z] = swap;
        }
    }
}

averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;
if (averageBest > qualificationDistance) {
    qualified = true;
} else {
    qualified=false;
}
