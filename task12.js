var expectedUsers = 1000;
var usersPerDay = [817, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741, 1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261, 2805, 1201];


// Суммируем посещаемость
var totalUsers = 0;
for (var i = 0; i < usersPerDay.length; i++) {
  totalUsers += usersPerDay[i];
}

// Рассчитываем среднее значение посещаемости
var averageUsers = totalUsers / usersPerDay.length;
document.write('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  document.write('Посещаемость хорошая');
} else {
  document.write('Посещаемость не очень');
}

// Сортируем массив
for (var i = 0; i <= usersPerDay.length - 2; i++) {
  var minValue = usersPerDay[i];

  for (var j = i + 1; j <= usersPerDay.length - 1; j++) {
    if (usersPerDay[j] < minValue) {
      minValue = usersPerDay[j];
      var swap = usersPerDay[i];
      usersPerDay[i] = minValue;
      usersPerDay[j] = swap;
    }
  }
}

// Рассчитываем медиану
if (usersPerDay.length % 2 !== 0) {
  var medianIndex = (usersPerDay.length - 1) / 2;
  var median = usersPerDay[medianIndex];
} else {
  var leftIndex = usersPerDay.length / 2 - 1;
  var rightIndex = usersPerDay.length / 2;
  var median = (usersPerDay[leftIndex] + usersPerDay[rightIndex]) / 2;
}
document.write('Медианная посещаемость: ' + median);