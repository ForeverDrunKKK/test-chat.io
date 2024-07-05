let count = 0;

function incrementCounter() {
    count++;
    let formattedCount = pad(count, 6); // Форматирование счетчика до шести знаков
    document.getElementById("counter").innerText = formattedCount;
}

// Функция для добавления ведущих нулей до нужной длины
function pad(num, size) {
    let s = "000000" + num;
    return s.substr(s.length - size);
}
