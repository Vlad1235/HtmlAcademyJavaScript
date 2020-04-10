/* 
Вы уже знаете, что добавление методов в прототип позволяет включить новую функциональность 
во все экземпляры этого прототипа. 
Это относится не только к вашим собственным, но и к встроенным объектам.
Для примера возьмем объект String — мы уже использовали в коде методы String (substring). 
Но что если вы захотите добавить собственный метод, чтобы он мог использоваться любым экземпляром String? 
Прием расширения объектов через прототип можно использовать и для String.

Допустим, мы хотим расширить прототип String методом cliche, который 
возвращает true, если строка содержит выражения из заранее известного списка.
*/
String.prototype.cliche = function() {
    var cliche = ["lock and load","touch base", "open the kimono"];
    for (var i = 0; i < cliche.length; i++) {
        var index = this.indexOf(cliche[i]);
            if (index >= 0) {
                return true;
        }
    }
    return false;
};

var sentences = [   "I'll send my car around to pick you up.",
                    "Let's touch base in the morning and see where we are",
                    "We don't want to open the kimono, we just want to inform them."
                ];
for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT: " + phrase);
    }
}