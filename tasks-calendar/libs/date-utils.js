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

function getISODate(date) {
    const d = new Date(date)
    d.setMinutes(d.getUTCMilliseconds() - d.getTimezoneOffset())
    return d.toISOString().split('T')[0]
    // toISOString() считает по Гринвичу; в дату не передаётся время, поэтому оно 00:00:00.
    // для toISOString() вычитается 3 часа разницы между Москвой и Гринвичем, поэтому будет разница в 1 день, если её не установить вручную
}

assertEquals(getISODate(new Date(2020, 1, 29)), '2020-02-29')
assertEquals(getISODate(new Date(2024, 7, 18)), '2024-08-18')

function what(date) {
    return date.toLocaleTimeString('ru-RU')
}

assertEquals(what(new Date(2020, 0, 1)), '00:00:00')
assertEquals(what(new Date(2020, 0, 1, 1)), '01:00:00')
assertEquals(what(new Date(2020, 0, 1, 1, 33)), '01:33:00')
assertEquals(what(new Date(2020, 0, 1, 22, 33, 44)), '22:33:44')