function dayName(date) {
    const daysOfTheWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    return daysOfTheWeek[now.getDay()];
}

function greeting(date) {
    return `素敵な${dayName(date)}になりますように！`
}