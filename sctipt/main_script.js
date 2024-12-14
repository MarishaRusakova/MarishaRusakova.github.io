
//передаем данные из хранилища
document.getElementById("output").innerText = localStorage.name

//создаем переменные для работы со слайдером
let x = 1
const spisok = document.getElementsByClassName('def')
const circle_one = document.getElementsByClassName('one')
const circle_two = document.getElementsByClassName('two')
const circle_three = document.getElementsByClassName('three')
const circle_four = document.getElementsByClassName('four')
const circle_five = document.getElementsByClassName('five')
const circle_six = document.getElementsByClassName('six')

//функция для перелистывания и покраски деталий
function fun(){  

    //проверяем
    if (x < 2){  
        circle_one[1].style.backgroundColor = '#FFF3E8'
        circle_two[1].style.backgroundColor = '#AA9DFA'
        x++  
    }else if (x < 3){  
        circle_two[1].style.backgroundColor = '#FFF3E8'
        circle_three[1].style.backgroundColor = '#AA9DFA'
        x++  
    }else if (x < 4){  
        circle_three[1].style.backgroundColor = '#FFF3E8'
        circle_four[1].style.backgroundColor = '#AA9DFA'
        x++  
    }else if (x < 5){  
        circle_four[1].style.backgroundColor = '#FFF3E8'
        circle_five[1].style.backgroundColor = '#AA9DFA'
        x++  
    }else if (x < 6){  
        circle_five[1].style.backgroundColor = '#FFF3E8'
        circle_six[1].style.backgroundColor = '#AA9DFA'
        x++  
    }else {
        x = 6  
    }  

    //перелистываем и очищаем поле вывода и ввода
    document.documentElement.style.setProperty("--el", (x - 1) * (-190) + "px")
}  

//функция для перелистывания и покраски деталей
function fun2(){

    //проверяем
    if (x === 2){ 
        circle_two[1].style.backgroundColor = '#FFF3E8'
        circle_one[1].style.backgroundColor = '#AA9DFA'
        x--  
    }else if (x === 6){ 
        circle_six[1].style.backgroundColor = '#FFF3E8'
        circle_five[1].style.backgroundColor = '#AA9DFA'
        x--  
    }else if (x === 5){
        circle_five[1].style.backgroundColor = '#FFF3E8'
        circle_four[1].style.backgroundColor = '#AA9DFA'
        x--  
    }else if (x === 4){  
        circle_four[1].style.backgroundColor = '#FFF3E8'
        circle_three[1].style.backgroundColor = '#AA9DFA'
        x--  
    }else if (x === 3){  
        circle_three[1].style.backgroundColor = '#FFF3E8'
        circle_two[1].style.backgroundColor = '#AA9DFA'
        x--  
    }else {
        x = 1
    }    

    //перелистываем и очищаем поле вывода и вводы
    document.documentElement.style.setProperty("--el", (x - 1) * (-190) + "px")
} 

//функция для проверки обращения
function sms(){

    //переменная с полем ввода смс
    const all_sms = document.getElementById('sms')

    //проверяем и выводим ошибку
    if (!all_sms.value){
        alert('Введите обращение!')
    }else {
        alert ('Благодарим за обращение! Ожидайте ответа в течении суток')
        document.getElementById("sms").value = ""
    }

}


//при клике используем функцию fun
const btn1 = document.getElementById('right')  
btn1.addEventListener('click', fun) 

//при клике используем функцию fun2
const btn2 = document.getElementById('left')  
btn2.addEventListener('click', fun2)

//при клике используем функцию sms
const button_sms = document.getElementById('button__for-sms')
button_sms.addEventListener('click', sms)