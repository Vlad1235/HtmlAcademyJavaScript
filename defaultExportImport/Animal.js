// можем создать модуль из целого класса как одного целого. Его потом экспортируем
export default class Animal {
    constructor() {
        console.log('I am an animal')
    }
    getClassType() { // какой-нибудь метод
        return 'Animal'
    }
}