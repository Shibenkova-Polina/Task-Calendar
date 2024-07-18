function assertEquals(actual, expected) {
    console.assert(actual === expected, 'Ошибка проверки: значения не равны ' + actual + ' != ' + expected)
}

function getDaysOfMonth(month, year) {
    return new Date(year, month + 1, 0).getDate()
    // месяцы нумеруются с 0 в Date
    // 0 в дате возвращает к последнему дню предыдущего от указанного месяца, поэтому month + 1 (т.е. в Date передаётся month - 1 + 1)
    // getDate() возвращает день месяца (число) у заданной даты
}

assertEquals(getDaysOfMonth(0, 2024), 31)
assertEquals(getDaysOfMonth(1, 2024), 29) // февраль
assertEquals(getDaysOfMonth(1, 2023), 28)
assertEquals(getDaysOfMonth(2, 2024), 31) // март
assertEquals(getDaysOfMonth(3, 2024), 30)
assertEquals(getDaysOfMonth(11, 1990), 31)

function getFirstWeekday(month, year) {
    return new Date(year, month, 1).getUTCDay()
    // getUTCDay возвращает целое число, соответствующее дню недели: 0 - пн, 1 - вт и т.д.
}

assertEquals(getFirstWeekday(4, 2021), 5) //май
assertEquals(getFirstWeekday(6, 2024), 0) // июль
assertEquals(getFirstWeekday(7, 2024), 3)
assertEquals(getFirstWeekday(8, 2024), 6)

function getWeekdayName(index) {
    const d = new Date('2024-07-15') // это понедельник
    d.setDate(d.getDate() + index)
    return d.toLocaleDateString('ru-Ru', {weekday: 'long'})
    // возвращает строку с зависящим от языка представлением части даты этой даты в местном часовом поясе
}

assertEquals(getWeekdayName(0), 'понедельник')
assertEquals(getWeekdayName(2), 'среда')
assertEquals(getWeekdayName(6), 'воскресенье')

function getMonthsName(index) {
    const d = new Date(2024, index, 1)
    return d.toLocaleDateString('ru-Ru', {month: 'long'})
}

assertEquals(getMonthsName(0), 'январь')
assertEquals(getMonthsName(2), 'март')
assertEquals(getMonthsName(11), 'декабрь')

// function n(str, char) {
//     return [...str].filter(ch => char === ch).length
//     // [...str] делает из строки массив символов (). Расширение элементов из массивов и их распространение в новый контекст / структуру
//     // filter() создает мелкую копию части данного массива, отфильтрованную только до элементов из данного массива, которые проходят тест, реализованный предоставленной функцией
// }

// assertEquals(n('hello', 'l'), 2)
// assertEquals(n('foo', 'n'), 0)
// assertEquals(n('world', 'r'), 1)
// assertEquals(n('voodoo', 'o'), 4)