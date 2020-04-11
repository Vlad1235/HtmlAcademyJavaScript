// использование const. Чтобы пресечь возможность менять тип переменной.(чтоб было как в Java)

let name = "Maria"
name = {}
name = 2
log(name) // 2

// применение const. Можно применять для функции, класса, объекта, перменной и тд
const name2 = 'Maria'
name2 = []
name2 = 2
log(name2) // будет ошибка SyntaxError: "name2" is read-only

// Тут сработает так как мы не меняем структуру
const person = {}
person['name'] = 'Maria'
log(person.name) // Maria

// Тут сработает так как мы не меняем структуру
const array = []
array.push('Maria from Array')
log(array[0]) // Maria from Array