const flipCardContainer = document.querySelector('.flip-card');
const topHalf = document.querySelector('.top');
const bottomHalf = document.querySelector('.bottom');

let startNumber = 9;

function flip(startNumber) {
    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.innerText = startNumber;

    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.innerText = startNumber - 1;


    topFlip.addEventListener('animationstart', () => {
        topHalf.innerText = startNumber - 1;
    });

    topFlip.addEventListener('animationend', () => {
        topFlip.remove();
    })

    bottomFlip.addEventListener('animationend', () => {
        bottomHalf.innerText = startNumber - 1
        setTimeout(() => {
            bottomFlip.remove();
        }, 250);
    });

    flipCardContainer.append(topFlip, bottomFlip);
}

flip(startNumber);


