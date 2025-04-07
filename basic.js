var randomNumber;
function betoltes(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
}

var probalkozas = 0
var osszprobalkozas = 5
function guessTheNumber() {
    var button = document.getElementById('guessBtn');
    
    var userNumber = document.getElementById('userNumber').value;

    var display = document.getElementById('eredmenyJelzo');
    var displayer = document.getElementById('display');

    var mode = document.getElementById('mode').value;
    
    if(mode == "hard" && ((userNumber < randomNumber) || (userNumber > randomNumber))){
        osszprobalkozas--;
    }

    if(userNumber == randomNumber){
            alert(`Nyert!!\n${probalkozas + 1} próbálozás`);
            document.documentElement.style.setProperty('--clr-neon', ' hsl(94, 98%, 51%)'); // red

            refresh();

    } else if (userNumber > randomNumber) {
        display.innerHTML = `X < ${userNumber}<br>`;
        probalkozas++;

        badTryColor();

        if (mode == 'hard') {
            display.innerHTML += `You can try ${osszprobalkozas} more time`;
        }
    } else if (userNumber < randomNumber) {
        display.innerHTML = `X > ${userNumber}<br>`;
        probalkozas++;

        badTryColor();

        if (mode == 'hard') {
            display.innerHTML += `You can try ${osszprobalkozas} more time`;
        }
    }
    

    if(mode == "hard" && osszprobalkozas === 0){
        display.innerHTML = `No more quess!`;
        button.setAttribute('value','RESTART');
        button.setAttribute('onclick','refresh()');
    }

    if(!(display.innerHTML === '')){
        displayer.style.border = 'currentColor 0.125em solid';
        displayer.style.borderRadius = '0.25em';
        displayer.style.marginBottom = '10px'
        displayer.style.marginRight = '10px'
        displayer.style.marginLeft = '10px'
       
    }
    
}
console.log(userNumber)

function refresh(){
    window.location.reload();
}

function badTryColor(tempColor = 'hsl(0, 100%, 50%)', duration = 1000, thenColor = 'hsl(94, 98%, 51%)') {
    document.documentElement.style.setProperty('--clr-neon', tempColor);
    setTimeout(() => {
        document.documentElement.style.setProperty('--clr-neon', thenColor);
    }, duration);
}




