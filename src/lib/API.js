// MLB Trial v6
const proxy =
const base_URL = 'http://api.sportradar.us/mlb/trial/v6.5/en/games/'

const API_KEY =


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '/' + mm + '/' + dd;
console.log(today);

function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push({
            label: DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear(),
            value: currentDate.getFullYear() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getDate()
        });
    }
    return aryDates;
}

function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
}

function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = GetDates(startDate, 7);


export default {
    async getGames(gameDate = today) {
        const API_URL = `${proxy}http://api.sportradar.us/mlb/trial/v6.5/en/games/${gameDate}/schedule.json?api_key=${api_key}`
        const res = await fetch(API_URL).then(res => res.json())
        return res
    },
    aryDates,
    async getLogos() {
        const API_LOGOS = '/static/logos.json'
        const res = await fetch(API_LOGOS).then(res => res.json())
        return res
    }
}
