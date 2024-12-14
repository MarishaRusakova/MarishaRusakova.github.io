//предаем данные с хранилища
document.getElementById("output").innerText = localStorage.name

//функция для поиска
function searchServ() {

    //переменные для заголовков
    const services_one = document.getElementById('ser_one')
    const services_two = document.getElementById('ser_two')
    const services_three = document.getElementById('ser_three')
    const services_four = document.getElementById('ser_four')
    const services_five = document.getElementById('ser_five')
    const services_six = document.getElementById('ser_six')
    const items = [services_one, services_two, services_three, services_four, services_five, services_six]
    
    //переменные для карточек
    const services_one_card = document.getElementById('service_one')
    const services_two_card = document.getElementById('service_two')
    const services_three_card = document.getElementById('service_three')
    const services_four_card = document.getElementById('service_four')
    const services_five_card = document.getElementById('service_five')
    const services_six_card = document.getElementById('service_six')
    const items_card = [services_one_card, services_two_card, services_three_card, services_four_card, services_five_card, services_six_card]

    //пременная для поля ввода поиска
    const searchInput = document.getElementById('search-input')

    //функция для поиска
    items.forEach((item, index) => {
        console.log(items_card)
        if (item.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
            items_card[index].classList.remove("none__services")   
            
        } else {
            items_card[index].classList.add("none__services")  
        }
    })
}

//при нажатии выполняется функция searchServ
const btn__search = document.getElementById('services__btn')  
btn__search.addEventListener('click', searchServ)