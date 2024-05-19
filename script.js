'use strict';
//selecting elements 
const score0E1=document.querySelector('#score--0');
const score1E1=document.querySelector('#score--1');
const current0E1=document.querySelector('#current--0');
const current1E1=document.querySelector('#current--1');
const diceE1=document.querySelector('.dice');
const btnRoll=document.querySelector('.btn--roll');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
const player0E1=document.querySelector('.player--0');
const player1E1=document.querySelector('.player--1');

const scores=[0,0];
let activePlayer=0;
let currentScore=0;

score0E1.textContent=scores[0];
score1E1.textContent=scores[1];
console.log(diceE1);
diceE1.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    const dice=Math.trunc(Math.random()*6);
    diceE1.classList.remove('hidden');
    if(dice!=0)
    diceE1.src=`dice-${dice}.png`;

    if(dice!==1)
        {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        
        }
        else{
            document.getElementById(`current--${activePlayer}`).textContent=0;
            currentScore=0;
            

            if(activePlayer)
                {
                    activePlayer=0;
                }
                else{
                    activePlayer=1;
                }

             player0E1.classList.toggle('player--active');
             player1E1.classList.toggle('player--active');

        }


})


btnHold.addEventListener('click',function(){
    //add current score to active player's score
    console.log(activePlayer);
scores[activePlayer]+=currentScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

//checking if the player won the game

if(scores[activePlayer]>=20)
    {
        document.querySelector(`player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
    }
    else {
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        activePlayer=activePlayer===0?1:0;
        player0E1.classList.toggle('player--active');
        player1E1.classList.toggle('player--active');


    }


})






