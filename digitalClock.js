const clock = document.querySelector('.clock');

const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getUTCSeconds();
// console.log(hours, min, sec);
const tick = () => {
    const html = `
        <span>${hours}</span>:
        <span>${min}</span>:
        <span>${sec}</span>
    `;
    clock.innerHTML = html;
};
setInterval(tick, 1000);


//console.log(dateFns.isToday(now));
//formatting options
console.log(dateFns.format(now, 'yyyy'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, yyyy'));

const before = new Date('February 1 2024 12:00:00');
console.log(dateFns.Distance(now, before, {addSuffix: true}));