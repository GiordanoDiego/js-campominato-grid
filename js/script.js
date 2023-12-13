/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/

/*
Consegna:
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata
*/

const boxContainer = document.querySelector('.box-container');
console.log('boxContainer', boxContainer, typeof boxContainer);

const playButton = document.getElementById("play_button");
console.log('playButton', playButton, typeof playButton);



for(let i=1; i<=100; i++ ){
    const newDiv = document.createElement('div');
    newDiv.classList.add("box");
    newDiv.append(i);
    boxContainer.append(newDiv);
}