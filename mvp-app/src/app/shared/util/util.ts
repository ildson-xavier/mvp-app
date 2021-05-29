export class Util {

    date: string

    getConvertDateToString(dat: Date): string {
        let day = dat.getDate()
        let month = dat.getMonth() + 1
        let year = dat.getFullYear()

        let dayString = day.toString()
        let monthString = month.toString()
        if (dayString.length == 1) {
            dayString = '0' + dayString
        }

        if (monthString.length == 1) {
            monthString = '0' + monthString
        }

        console.log([dayString, monthString, year].join('/'))
        return [dayString, monthString, year].join('/');
    }

    getDateTime(): string {
        let dat = new Date()
        let day = dat.getDate()
        let month = dat.getMonth() + 1
        let year = dat.getFullYear()
        let hors = dat.getHours()
        let minus = dat.getMinutes()
        let secunds = dat.getSeconds()

        console.log([year,month,day,hors,minus,secunds].join(''))
        return [year,month,day,hors,minus,secunds].join('')

    }
}