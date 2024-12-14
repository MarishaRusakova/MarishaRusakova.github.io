//передаем данные с хранилища
document.getElementById("output").innerText = localStorage.name

//создаем пременную и список слайдов
let x = 1
const spisok = document.getElementsByClassName('slide_def')

//создаем список переменных с type="radio"
let radio = document.querySelectorAll('.radio')

//создаем переменные для результата баллов
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0

//функция для перелистывания
function fun(){    

    //проверяем на величину
    if (x < spisok.length){  
        x++  
    } else {  
        x = 1  
    }  

    //перелистываем
    document.documentElement.style.setProperty("--el", (x - 1) * (-800) + "px")
}  

//функция для проверки первого вопроса
function check_one(){
    let result_one = ''
    let result_one_text = ''

    //проверяем, присваиваем значение и переходим к следующей функции или выводим ошибку
    if(document.getElementById('radio_one').checked) {
        count1 = +16
        result_one_text = "Верно!"
        document.getElementById("output1").innerText = result_one_text
        document.getElementById('radio_one').checked = false
        fun()
        return result_one

    }else if(document.getElementById('radio_two').checked) {
        result_one = Number(0) 
        result_one_text = "Неверно! Правильный ответ: а) Набор цветов в дизайне"
        document.getElementById("output1").innerText = result_one_text
        document.getElementById('radio_two').checked = false
        fun()
        return result_one

    }else if (document.getElementById('radio_three').checked){
        result_one = Number(0)
        result_one_text = "Верно!"
        result_one_text = "Неверно! Правильный ответ: а) Набор цветов испольуемых в дизайне"
        document.getElementById("output1").innerText = result_one_text
        document.getElementById('radio_three').checked = false
        fun()
        return result_one

    }else {
        alert("Выберите вариант ответа!")
    }
}

//функция для проверки второго вопроса
function check_two(){
    let result_two = ''
    let result_two_text = ''

    //проверяем, присваиваем значение и переходим к следующей функции или выводим ошибку
    if(document.getElementById('radio_four').checked) {
        count2 = +16
        result_two_text = "Верно!"
        document.getElementById("output2").innerText = result_two_text
        document.getElementById('radio_four').checked = false
        fun()
        return result_two

    }else if(document.getElementById('radio_five').checked) {
        result_two = Number(0) 
        result_two_text = "Неверно! Правильный ответ: а) Минимализм"
        document.getElementById("output2").innerText = result_two_text
        document.getElementById('radio_five').checked = false
        fun()
        return result_two

    }else if (document.getElementById('radio_six').checked){
        result_two = Number(0)
        result_two_text = "Неверно! Правильный ответ: а) Минимализм"
        document.getElementById("output2").innerText = result_two_text
        document.getElementById('radio_six').checked = false
        fun()
        return result_two

    }else {
        alert("Выберите вариант ответа!")
    }
}

//функция для проверки третьего вопроса
function check_three(){
    let result_three = ''
    let result_three_text = ''

    //проверяем, присваиваем значение и переходим к следующей функции или выводим ошибку
    if(document.getElementById('radio_seven').checked) {
        result_three = Number(0)
        result_three_text = "Неверно! Правильный ответ: б) Стиль письма"
        document.getElementById("output3").innerText = result_three_text
        document.getElementById('radio_seven').checked = false
        fun()
        return result_three

    }else if(document.getElementById('radio_eight').checked) {
        count3 = +16 
        result_three_text = "Верно!"
        document.getElementById("output3").innerText = result_three_text
        document.getElementById('radio_eight').checked = false
        fun()
        return result_three

    }else if (document.getElementById('radio_nine').checked){
        result_three = Number(0)
        result_three_text = "Неверно! Правильный ответ: б) Стиль письма"
        document.getElementById("output3").innerText = result_three_text
        document.getElementById('radio_nine').checked = false
        fun()
        return result_three

    }else {
        alert("Выберите вариант ответа!")
    }
}

//функция для проверки четвертого вопроса
function check_four(){
    let result_four = ''
    let result_four_text = ''

    //проверяем, присваиваем значение и переходим к следующей функции или выводим ошибку
    if(document.getElementById('radio_ten').checked) {
        count4 = +16
        result_four_text = "Верно!"
        document.getElementById("output4").innerText = result_four_text
        document.getElementById('radio_ten').checked = false
        fun()
        return result_four

    }else if(document.getElementById('radio_eleven').checked) {
        result_four = Number(0) 
        result_four_text = "Неверно! Правильный ответ: а) Способ расположения элементов"
        document.getElementById("output4").innerText = result_four_text
        document.getElementById('radio_eleven').checked = false
        fun()
        return result_four

    }else if (document.getElementById('radio_twelve').checked){
        result_four = Number(0)
        result_four_text = "Неверно! Правильный ответ: а) Способ расположения элементов"
        document.getElementById("output4").innerText = result_four_text
        document.getElementById('radio_twelve').checked = false
        fun()
        return result_four

    }else {
        alert("Выберите вариант ответа!")    
    }
}

//функция для проверки пятого вопроса
function check_five(){
    let result_five = ''
    let result_five_text = ''
    let answer_one = document.getElementById('text_one')

    //проверяем, присваиваем значение и переходим к следующей функции
    if(!answer_one.value) {
        alert("Напишите ответ!")
        

    }else if(answer_one.value === "Желтый" || answer_one.value === "Жёлтый" || answer_one.value === "жёлтый" || answer_one.value === "желтый") {
        count5 = +16
        result_five_text = "Верно!"
        document.getElementById("output5").innerText = result_five_text
        document.getElementById("text_one").value = ""
        fun()
        return result_five
        
    }else {
        result_five = Number(0) 
         result_five_text = "Неверно! Правильный ответ: желтый"
         document.getElementById("output5").innerText = result_five_text
         document.getElementById("text_one").value = ""
        fun()
        return result_five

        
    }
}

//функция для проверки шестого вопроса
function check_six(){
    let result_six = ''
    let result_six_text = ''
    let answer_two = document.getElementById('text_two')

    //проверяем, присваиваем значение и переходим к следующей функции
    if(!answer_two.value) {
        alert("Напишите ответ!")

    }else if(answer_two.value === "Типографика" | answer_two.value === "типографика") {
        count6 = +20
        result_six_text = "Верно!"
        document.getElementById("output6").innerText = result_six_text
        const count = count1 + count2 + count3 +count4 + count5 + count6 
        document.getElementById("output_all").innerText = count + "балла(-ов)"
        localStorage.score = count
        document.getElementById("text_two").value = ""
        fun()
    }else{
        result_six = Number(0) 
        result_six_text = "Неверно! Правильный ответ: типографика"
        document.getElementById("output6").innerText = result_six_text
        const count = count1 + count2 + count3 +count4 + count5 + count6 
        document.getElementById("output_all").innerText = count + "балла(-ов)"
        localStorage.score = count        
        document.getElementById("text_two").value = ""
        fun()
    }
}

//кнопка для перелистывания первого слайда
const btn__start = document.getElementById('start')  
btn__start.addEventListener('click', fun) 

//кнопка для проверки первого вопроса
const btn__next__one = document.getElementById('next_one')  
btn__next__one.addEventListener('click', check_one) 

//кнопка для проверки второго вопроса
const btn__next__two = document.getElementById('next_two')  
btn__next__two.addEventListener('click', check_two) 

//кнопка для проверки третьего вопроса
const btn__next__three = document.getElementById('next_three')  
btn__next__three.addEventListener('click', check_three) 

//кнопка для проверки четвертого вопроса
const btn__next__four = document.getElementById('next_four')  
btn__next__four.addEventListener('click', check_four) 

//кнопка для проверки пятого вопроса
const btn__next__five = document.getElementById('next_five')  
btn__next__five.addEventListener('click', check_five) 

//кнопка для проверки шестого вопроса
const btn__next__six = document.getElementById('next_six')  
btn__next__six.addEventListener('click', check_six) 

//кнопка для перелистывания последнего слайда
const btn__start_new = document.getElementById('start_new')  
btn__start_new.addEventListener('click', fun) 
