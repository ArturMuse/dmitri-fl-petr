document.addEventListener('DOMContentLoaded', () => {
    const newDate = new Date('May 24 2021 00:00:00');
    let now = new Date();

    const timer = document.querySelector(".js-timer");

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timeCount = () => {
        let leftUntil = newDate - now;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        const daysText = declOfNum(days, ['день', 'дня', 'дней']);
        const hoursText = declOfNum(hours, ['час', 'часа', 'часов']);
        const minutesText = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        const secondsText = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

        timer.textContent = `${days} ${daysText} : ${hours} ${hoursText} : ${minutes} ${minutesText}`
    };

    if (newDate <= now) {
        document.querySelector(".js-before").classList.add("candidat__box-off");
        document.querySelector(".js-after").classList.remove("candidat__box-off");
    } else {
        timeCount();
        setInterval(timeCount, 1000);
    }
});