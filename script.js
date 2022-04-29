const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousDates;
setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    if (previousDates !== timeBetweenDates) {
        flipAllCards(timeBetweenDates);
    }
    previousDates = timeBetweenDates
}, 250);

function flipAllCards(time) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    console.log(hours, minutes, seconds);
    console.log(Math.floor(hours / 10), Math.floor(minutes / 10), Math.floor(seconds / 10));
    console.log(hours % 10, minutes % 10, seconds %10);
    
    const hoursTens = document.querySelector('[data-hours-tens]');
    const hoursOnes = document.querySelector('[data-hours-ones]');
    const minutesTens = document.querySelector('[data-minutes-tens]');
    const minutesOnes = document.querySelector('[data-minutes-ones]');
    const secondsTens = document.querySelector('[data-seconds-tens]');
    const secondsOnes = document.querySelector('[data-seconds-ones]');

    flip(hoursTens, Math.floor(hours / 10));
    flip(hoursOnes, hours % 10);
    flip(minutesTens, Math.floor(minutes / 10));
    flip(minutesOnes, minutes % 10);
    flip(secondsTens, Math.floor(seconds / 10));
    flip(secondsOnes, seconds % 10);
}

function flip(flipCard, newNumber) {
    const startNumber = parseInt(flipCard.querySelector('.top').innerText);

    if (startNumber == newNumber) return;

    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.innerText = startNumber;

    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.innerText = newNumber;

    const topHalf = flipCard.querySelector('.top');
    const bottomHalf = flipCard.querySelector('.bottom');

    topFlip.addEventListener('animationstart', () => {
        topHalf.innerText = newNumber;
    });

    topFlip.addEventListener('animationend', () => {
        topFlip.remove();
    })

    bottomFlip.addEventListener('animationend', () => {
        bottomHalf.innerText = newNumber
        setTimeout(() => {
            bottomFlip.remove();
        }, 250);
    });

    flipCard.append(topFlip, bottomFlip);
}


