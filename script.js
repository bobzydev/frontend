function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return daysOfWeek[today.getUTCDay()];
}

function getCurrentUTCTime() {
    return Date.now();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day of the Week: ${getCurrentDayOfWeek()}`;
    document.querySelector('[data-testid="currentUTCTime"] span').textContent = getCurrentUTCTime();
});
