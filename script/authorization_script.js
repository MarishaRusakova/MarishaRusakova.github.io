function check_name() {
    let name = document.getElementById('name');
    let nameError = document.getElementById('authorization_name-error');
    let value = name.value;

    // Автоматически делаем первую букву заглавной
    if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    // Удаляем пробелы
    value = value.replace(/\s/g, '');

    // Проверка на ошибки и вывод сообщений
    if (!value) {
        nameError.textContent = "Введите корректное имя!";
        nameError.style.color = '#F8F3F0';
        nameError.style.fontFamily = 'Montserrat';
        nameError.style.border = '1px solid #D3F056';
        nameError.style.borderRadius = '40px';
        nameError.style.padding = '10px 10px';
        nameError.style.width = '220px'; // увеличено для вмещения текста ошибки
        nameError.style.position = 'absolute';
        nameError.style.left = '192px';
        nameError.style.top = '270px';
    } else if (/[^а-яА-ЯёЁ]/g.test(value)) {
        nameError.textContent = "Введите корректное имя!";
        nameError.style.color = '#F8F3F0';
        nameError.style.fontFamily = 'Montserrat';
        nameError.style.border = '1px solid #D3F056';
        nameError.style.borderRadius = '40px';
        nameError.style.padding = '10px 10px';
        nameError.style.width = '220px'; // увеличено для вмещения текста ошибки
        nameError.style.position = 'absolute';
        nameError.style.left = '192px';
        nameError.style.top = '270px';
        name.value = value.slice(0, -1); // Удаляем последний введенный символ
        return;
    } else {
        localStorage.name = value; // Сохраняем уже обработанное значение
        nameError.textContent = "";
        nameError.style.color = '';
        nameError.style.fontFamily = '';
        nameError.style.border = '';
        nameError.style.borderRadius = '';
        nameError.style.padding = '';
        nameError.style.width = '';
        nameError.style.position = '';
        nameError.style.left = '';
        nameError.style.top = '';
        check_telephone()
        return; // Важно: выходим из функции, чтобы избежать дальнейшего кода
    }

    // Если была ошибка, обновляем значение поля ввода
    name.value = value; // Обновляем поле ввода
}

function check_telephone() {

    let telephone = document.getElementById('tel');
    let error_telephone = document.getElementById('authorization_telephone-error');

    // Добавляем + при фокусе, если поле пустое
    telephone.addEventListener('focus', function() {
        if (telephone.value === "") {
            telephone.value = "+";
        }
    });

    // Валидация при каждом вводе
    telephone.addEventListener('input', function() {
        // Удаляем все символы, кроме цифр и +
        telephone.value = telephone.value.replace(/[^0-9+]/g, '');

        // Ограничиваем длину строки до 13 символов (включая +)
        if (telephone.value.length > 13) {
            telephone.value = telephone.value.slice(0, 13);
        }
    });

    // Проверка и вывод ошибки (вызывается при отправке формы или потере фокуса)
    if (!telephone.value) {
        error_telephone.textContent = "Введите корректный телефон!";
        error_telephone.style.color = '#F8F3F0';
        error_telephone.style.fontFamily = 'Montserrat';
        error_telephone.style.border = '1px solid #D3F056';
        error_telephone.style.borderRadius = '40px';
        error_telephone.style.padding = '10px 10px';
        error_telephone.style.width = '260px';  //увеличено поле
        error_telephone.style.position = 'absolute';
        error_telephone.style.left = '190px';
        error_telephone.style.top = '320px';
    } else if (telephone.value.length < 13) {
        error_telephone.textContent = "Введите корректный телефон!";
        error_telephone.style.color = '#F8F3F0';
        error_telephone.style.fontFamily = 'Montserrat';
        error_telephone.style.border = '1px solid #D3F056';
        error_telephone.style.borderRadius = '40px';
        error_telephone.style.padding = '10px 10px';
        error_telephone.style.width = '260px';  //увеличено поле
        error_telephone.style.position = 'absolute';
        error_telephone.style.left = '190px';
        error_telephone.style.top = '320px';
    } else if (telephone.value[0] !== '+') {
        error_telephone.textContent = "Введите корректный телефон!";
        error_telephone.style.color = '#F8F3F0';
        error_telephone.style.fontFamily = 'Montserrat';
        error_telephone.style.border = '1px solid #D3F056';
        error_telephone.style.borderRadius = '40px';
        error_telephone.style.padding = '10px 10px';
        error_telephone.style.width = '260px';  //увеличено поле
        error_telephone.style.position = 'absolute';
        error_telephone.style.left = '190px';
        error_telephone.style.top = '320px';
    } else {
        localStorage.telephone = telephone.value;
        error_telephone.textContent = "";
        error_telephone.style.color = '';
        error_telephone.style.fontFamily = '';
        error_telephone.style.border = '';
        error_telephone.style.borderRadius = '';
        error_telephone.style.padding = '';
        error_telephone.style.width = '';
        error_telephone.style.position = '';
        error_telephone.style.left = '';
        error_telephone.style.top = '';
        check_email()
    }

}

//функция для проверки выбора пола
function check_email(){

    let email = document.getElementById('email')
    let error_email = document.getElementById('authorization_email-error')

    //проверяем, присваиваем переменной значение и переходим к следующей функции или выводим ошибку
    if(!email.value){
        error_email.textContent = "Введите почту!"
        error_email.style.color = '#F8F3F0'
        error_email.style.fontFamily = 'Montserrat'
        error_email.style.border = '1px solid #D3F056'
        error_email.style.borderRadius = '40px'
        error_email.style.padding = '10px 10px'
        error_email.style.width = '154px'
        error_email.style.position = 'absolute'
        error_email.style.left = '287px'
        error_email.style.top = '370px'
    }else{
        localStorage.email = email.value
        error_email.textContent = ""
        error_email.style.color = ''
        error_email.style.fontFamily = ''
        error_email.style.border = ''
        error_email.style.borderRadius = ''
        error_email.style.padding = ''
        error_email.style.width = ''
        error_email.style.position = ''
        window.location.href = '../pages/on_index.html'
    }

}


//переменная для кнопки и выполнение функции при нажатии на кнопку
const btn = document.getElementById('authorization__btn')
btn.addEventListener('click', check_name) 