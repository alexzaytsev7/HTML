// 1. Создать страницу, которая спрашивает имя у пользователя и выводит приветствие его с помощью функции. 
// Нарпимер "Привет Вася". Можно через promt а можно и прямо на страницу.
// 2* Сделайте страницу с чатом, чтобы сообщение выводилось и в консоль. 
// И добавьте поле с вводом имени пользователя и вывод имени рядом с сообщением.



//ввод данных
let x = prompt("Введите имя человека");
alert ("Hello " + x)

// логика
// вызов функций app()
// x = x + 2
// $(function() {
//     alert('Ok');
// });
//вывод данных
// alert("Привет, ");


console.log
document.getElementById("message1").innerText = message;

function app() {
    var message = document.getElementById("text").value
    document.getElementById("message1").innerText = message
    document.getElementById("text").value = ''
    //console.log(message)
}

// function hello() {
//     var age = parseInt(document.getElementById("age").value)
    
//     var str = "Низяяя"
    
//     switch (true) {
//         case age >= 18 && age < 40: 
//             str =  "Все можно";
//             break;
//         case age >= 40 && age < 60:
//             str = 2;
//             break;

//     }

//     if (age >= 18 && age < 40) {
//         str = "Все можно"
//     } 

//     if (age >= 40 && age < 60) {
//         str = "Все можно но с трудом"
//     }

//     if (age >= 60 && age < 100) {
//         str = "Еле еле"
//     }
 
//     document.getElementById("result").innerText = str;
// }