'use strict'

export function countHours(year, holidays) {
    let numMissingDays = 0

    holidays.forEach(holidayDay => {
        let [month, day] = holidayDay.split('/')
        const date = new Date(`${year}/${month}/${day}`)
        const dayOfWeak = date.getDay()

        if (dayOfWeak !== 0 && dayOfWeak !== 6) {
            numMissingDays++
        }
    });

    return numMissingDays * 2
}
