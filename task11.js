//Сортировка
var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

// Сортировка с первого элемента
for (var currentIndex = 0; currentIndex < usersByDay.length - 1; currentIndex++) {
var minValue = usersByDay[currentIndex];
    for (var j = currentIndex + 1; j < usersByDay.length; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            var swap = usersByDay[currentIndex];
            usersByDay[currentIndex] = usersByDay[j];
            usersByDay[j] = swap;
            console.log('Меняю местами ' + swap + ' и ' + minValue);
        }
    }
console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);
}
