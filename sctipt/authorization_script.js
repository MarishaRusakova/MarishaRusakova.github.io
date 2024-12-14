
//создаем список переменных с type="radio"
let radio = document.querySelectorAll('.radio')

//Ввод русские букв с большой
let input1 = document.querySelector('input')
    input1.addEventListener('input',()=> {
        input1.value = input1.value.replace(/[^А-Яа-яЁё]/,'')
    })

//функция для проверки ввода имени
function check(){

    //создаем переменную для поля ввода
    let name = document.getElementById('name')
    
    

    //проверяем и выводим ошибку
    if (!name.value){
        alert("Введите имя!")
    } else {
        localStorage.name = name.value
        check_radio()
    }

}


//функция для проверки выбора пола
function check_radio(){

    //создаем переменную
    let radio = ""
    //проверяем, присваиваем переменной значение и переходим к следующей функции или выводим ошибку
    if(document.getElementById('radio').checked){
        radio = 'мужчина'
        check_date(radio)
        localStorage.radio = "муж"
    }else if(document.getElementById('radio2').checked){
        radio = 'девушка'
        check_date(radio)
        localStorage.radio = "жен"
    }else {
        alert("Выберите пол!")
    }

}

//функция для проверки ввода даты
function check_date(radio){

    //создаем переменные и вычисляем возраст
    let date = document.getElementById('date')

    //проверяем и выдаем ошибку
    if(date.value){
        window.location.href = "./pages/main.html"
        let date_result = document.getElementById('date').value
        localStorage.date = date_result

    } else {
        alert("Выберите дату!")
    }
 
}

//переменная для кнопки и выполнение функции при нажатии на кнопку
const btn = document.getElementById('authorization__btn')
btn.addEventListener('click', check) 