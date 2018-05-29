// MLB Trial v6
// Key: ytftjq5txmqg6g7u2zrcruph

API_URL = 'https://api.sportradar.us/mlb-t6/games/`${yyyy}/${mm}/${dd}`/29/schedule.json?api_key=ytftjq5txmqg6g7u2zrcruph'

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
