import {
    textNodes
} from './text.js';

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const mapIcon = document.getElementById('map')

let attemptCounter = 0

function startGame() {
    showTextNode(0);
};

function landingPage() {
    showTextNode(100);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerHTML = textNode.text
    textElement.classList.remove('fadeIn', 'text')
    mapIcon.classList.remove('fadeIn')
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            if (option.oldChoice === true && option.wrongPath === true) {
                button.classList.add('text-btn','oldChoice', 'fadeIn')
                textElement.classList.add('fadeIn')
                mapIcon.classList.add('fadeIn')
            } else {
                button.classList.add('text-btn', 'fadeIn')
                textElement.classList.add('fadeIn')
                mapIcon.classList.add('fadeIn')
            }
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
};

/*function changeImage (imgName) {
    img.src = img.src.replace("images/forest_quest_start.png", "images/bridge.png"); 
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerHTML = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            if (option.oldChoice === true && option.wrongPath === true) {
                button.classList.add('text-btn','oldChoice')
            } else {
                button.classList.add('text-btn')
            }
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
};*/

function showOption() {
    return true
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    /*
    So, here's the issue: 
    Right now, the code is working as it's supposed to. If you choose the wrong option, the next time you come to that choice, it will be grayed out for you.
    But some wrong choices have other choices farther down the line that then won't be clicked. For example, if they choose Ridge as their first choice, then
    the game sets the ridge button to gray because all the paths in the ridge option are wrong choices, so the ridge path is a wrong path. But, they might 
    have only been to the clearing, not the hut in the ridge path, meaning that they now have eliminated a path without clicking on it. I think the solution
    will involve creating a counter and if statement that basically checks to see how many wrong choices are available from that choice, and then when the
    player has clicked through all of them, the counter reaches a specific number the if statement is watching for, and it sets the color of the larger choice
    to gray.
    */
    option.oldChoice = true;
    if (nextTextNodeId <= 0) {
        if (nextTextNodeId <=-10) {
            if (attemptCounter === 1) {
                console.log(`You escaped in ${attemptCounter} cycle!`)
            } else {
                console.log(`You escaped in ${attemptCounter} cycles!`)
            }
        } else {
            attemptCounter++; 
        }
        console.log(attemptCounter);
        return startGame()
    }
    showTextNode(nextTextNodeId)
};

startGame();
console.log(attemptCounter);
//changeImage("test");