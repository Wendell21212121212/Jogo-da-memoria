const grid = document.querySelector('.grid');
const spawnPlayer = document.querySelector('.player');
const timer = document.querySelector('.time')







const character = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];
const createElement = (tag,className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstcard = '';
let secondcard = '';

const checkendgame = () =>{
    const disabledcard = document.querySelectorAll('.disabled-card');
    const btn = document.querySelector('#refresh');
    if(disabledcard.length == 20){
        clearInterval(this.loop);
        alert(`Parabéns,${spawnPlayer.innerHTML}! seu tempo foi: ${timer.innerHTML} `);
        
        btn.addEventListener("click", () =>{
            location.reload();
        })
    
        }

        
        
    }



const checkCards = () =>{
    const firstCharacter = firstcard.getAttribute('data-character');
    const secondCharacter = secondcard.getAttribute('data-character');

    if(firstCharacter == secondCharacter){

        firstcard.firstChild.classList.add('disabled-card');
        secondcard.firstChild.classList.add('disabled-card');

        firstcard = '';
        secondcard = '';
        
        checkendgame();
    
    }   else{
        setTimeout(() => {
            
          firstcard.classList.remove('reveal-card');
            
          secondcard.classList.remove('reveal-card');

          firstcard = '';
          secondcard = '';
        }, 500);
        
    }
}

const revealCard = ({target}) =>{
    
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstcard == ''){
        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode;
    }else if (secondcard == ''){
        target.parentNode.classList.add('reveal-card') ;
        secondcard = target.parentNode;


        checkCards();
    }
    
}

const creatCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click',revealCard);

    card.setAttribute('data-character',character);

    return card;
}

const loadGame = () =>{

    const duplicateCharacters = [ ...character, ...character ];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    Math.random
    
    shuffledArray.forEach((character) =>{

        const card = creatCard(character);
        grid.appendChild(card);
       

    });
}

const startTimer = () =>{
    this.loop = setInterval(() =>{

        const currenttime = +timer.innerHTML;
        timer.innerHTML = currenttime + 1;


    },1000);
}

window.onload = () =>{

    const playerName = localStorage.getItem('player');

    spawnPlayer.innerHTML = playerName;

    startTimer();
    loadGame();
}

