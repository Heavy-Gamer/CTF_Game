document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Предотвращаем вызов контекстного меню
        window.location.href = 'second_notwork/second_not_work.html'; // Замените на адрес другой страницы или файла
    });
});
