//передаем данные с хранилища
document.getElementById("output").innerText = localStorage.name

//функия для проверки выбора услуг
function check__order(){
    
    //проверяем и выводим ошибку
    if(document.getElementById('order_one').checked ){
        check__price()
    } else if(document.getElementById('order_two').checked){
        check__price()
    }else if(document.getElementById('order_three').checked){
        check__price()
    }else if(document.getElementById('order_four').checked){
        check__price()
    }else if(document.getElementById('order_five').checked){
        check__price()
    }else if(document.getElementById('order_six').checked){
        check__price()
    }else {
        alert("Выберите одну или несколько услуг!")
    }
}

//функция для проверки ввода бюджета
function check__price(){
    
    //переменная для поля ввода бюджета
    let price = document.getElementById('price_inp')

    //проверяем и выводим ошибку
    if (price.value <= 0){
        alert('Введите сумму больше 0!')
    } else{
        alert('Спасибо за заказ! Мы свяжемся с Вами в ближ время!')
        document.getElementById('price_inp').value = ""
        document.getElementById('input_comm').value = ""
        document.getElementById('order_one').checked = false
        document.getElementById('order_two').checked = false
        document.getElementById('order_three').checked = false
        document.getElementById('order_four').checked = false
        document.getElementById('order_five').checked = false
        document.getElementById('order_six').checked = false
    }
}

//кнопка, при нажатии на которую выполняеся функция
const button = document.getElementById('order__button')  
button.addEventListener('click', check__order) 