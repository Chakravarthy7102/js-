
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BYIND
function clickme(){
     let birthYear=prompt(`Whats your birth year....My good friend??`);
     //getting the cuurent year from inbuilt object
     let currentYear =new Date().getFullYear();
     //cal age in days
     let ageInYear=(currentYear-birthYear)*365;//flex-box-result
    //creating a element or tag h1
     let h1=document.createElement('h1');
     //forming the text that will appear as a result and appending it to h1 tag
     let textAnswer=document.createTextNode('your age is '+ageInYear+'in days.');
     h1.setAttribute('id','ageInDayss');//setting the attributes on fly and dynamic. 
     h1.appendChild(textAnswer);
     //getting the parent display place with there id's
    document.getElementById('flex-box-result').appendChild(h1);
    
     //alert(ageInYear+" "+age);
}
//resets the h1 tag to null by removing it
function reset(){
       document.getElementById("ageInDayss").remove();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//cat generator function
function genrateCat(){
     let image=document.createElement("img");
     //setting the src property
     image.src="http://img3.wikia.nocookie.net/__cb20110711012106/sonicmovie/images/4/48/Tsunade.jpg";
     //accesing the element by the id
     let div=document.getElementById('flex-cat-gen');
     div.appendChild(image);
     
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//rock paper scissors...
function rpsgame(yourChoice){
     console.log(yourChoice.src);
     let humanChoice,botChoice;
     humanChoice=yourChoice.id;
     botChoice=numberToChoice(randToRpsInt());//picks a random btw 0-2 and traslates into a actual choice.
     result=decideWinner(humanChoice,botChoice);
     console.log(result);
     message=finalMessage(result);
     console.log(message);
     rpsFrontEnd(humanChoice,botChoice,message);//yourChoice if error happens.
}

function randToRpsInt(){
     return Math.floor(Math.random()*3);
}

function numberToChoice(number){
     return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice,botChoice){//rock ,paper
     //json formatted data that determines values for the game
     var rpsDatabase={
          'rock':{'scissors':1,'rock':0.5,'paper':0},
          'paper':{'rock':1,'paper':0.5,'scissors':0},
         'scissors':{'paper':1,'scissors':0.5,'rock':0} 
     };
     var yourScore=rpsDatabase[humanChoice][botChoice];
     var botScore=rpsDatabase[botChoice][humanChoice];
     return [yourScore,botScore];
}
//let ooo=new Audio('sounds/cash.mp3')
function finalMessage([yourChoice,botChoice]){
     if(yourChoice===0){
         // ooo.play();
          return {'message':'You Lost!','color':'red'};
     }else if(yourChoice===0.5){
          return {'message':'Match tied','color':'yellow'};
     }else{
          return {'message':'You won!!','color':'green'};
     }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){//your choice!!s
     var imagesDataBase={
          'rock':document.getElementById('rock').src,
          'paper':document.getElementById('paper').src,
          'scissors':document.getElementById('scissors').src,
     };
     //lets remove alll the elements from the frontend;
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();

     //creating three divs for three elements
      var humanDiv=document.createElement('div');
      var botDiv=document.createElement('div');
      var messagediv=document.createElement('div');
      //attaching the img to respective div 
      //appending the player selected image to div
      humanDiv.innerHTML="<img src='"+imagesDataBase[humanImageChoice]+"'height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'/>";
      document.getElementById('felx-box-rps-div').appendChild(humanDiv);

      //appending the result text
      messagediv.innerHTML="<h1 style='color:"+finalMessage['color']+";padding:40px'>" + finalMessage['message'] + "</h1>";
      document.getElementById('felx-box-rps-div').appendChild(messagediv);
      
      //appending the bot selected image to the div
      botDiv.innerHTML="<img src='"+imagesDataBase[botImageChoice]+"'height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(243,38,24,1);'/>";
      document.getElementById('felx-box-rps-div').appendChild(botDiv);

}

//change all the buttons colors
var all_buttons=document.getElementsByTagName('button');
//var copyAllButtons=all_buttons;


function buttonColorChange(buttonThingy){
     if(buttonThingy.value==='red'){
          buttonRed();
     }else if(buttonThingy.value==='green'){
          buttonGreen();
     }else if(buttonThingy.value==='reset'){
          buttonReset();
     }else if(buttonThingy.value==='random'){
          randomColors();
     }
}
function buttonRed(){
     for(let i=0;i<all_buttons.length;i++){
          all_buttons[i].classList.remove(all_buttons[i].classList[1]);
          all_buttons[i].classList.add('btn-danger');
     }
}
function buttonGreen(){
     for(let i=0;i<all_buttons.length;i++){
          all_buttons[i].classList.remove(all_buttons[i].classList[1]);
          all_buttons[i].classList.add('btn-success')
     }
}
function buttonReset(){
     location.reload();
}
function randomColors(){
     let collections=['btn-success','btn-primary','btn-danger','btn-warning'];
     for(let i=0;i<all_buttons.length;i++){
          let num=Math.floor(Math.random()*4);
          all_buttons[i].classList.remove(all_buttons[i].classList[1]);
          all_buttons[i].classList.add(collections[num]);

     }
    
     
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//black jack card game

let blackjackGame={
     'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
     'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
     'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
     'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
     'isStand':false ,  
     'hit':false,
     'deal':false,

}
//const is similar to the final var in Java

const YOU=blackjackGame['you'];
const DEALER=blackjackGame['dealer'];
const HIT_SOUND=new Audio('sounds/swish.m4a')
const CARDS=blackjackGame['cards'];
const CARD_MAP=blackjackGame['cardMap'];

    document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
    document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
    document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackStand);

function blackjackHit(){
     blackjackGame['hit']=true;
     if(blackjackGame['isStand']===false){
          let randomScore=theGenerator();
          let score=CARDS[randomScore];
          showCard(YOU);
          updateScore(score,YOU);
          showScore(YOU);
     }
}
    

function showCard(activePlayer){
     //if cards total excceds 21  stop showing cards
     if(activePlayer['score']<=21){
          let imageQueen=document.createElement('img');
          imageQueen.src=randomCard();
          document.querySelector(activePlayer['div']).appendChild(imageQueen);
          HIT_SOUND.play();
     }   
}
function blackjackDeal(){
     if(blackjackGame['deal']===true){

          blackjackGame['isStand']=false;
          let allImages=document.querySelector('#your-box').querySelectorAll('img');
          for(let i=0;i<allImages.length;i++){
               allImages[i].remove();
          }
          let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
          for(let i=0;i<dealerImages.length;i++){
               dealerImages[i].remove(); 
          }
          YOU['score']=0;
          DEALER['score']=0;
          //dealing with color and final texts
          document.querySelector(YOU['scoreSpan']).textContent=0;
          document.querySelector(DEALER['scoreSpan']).textContent=0;
          document.querySelector(YOU['scoreSpan']).style.color='white';
          document.querySelector(DEALER['scoreSpan']).style.color='white';
          //returning the intial state for the game heading
          document.querySelector('#blackjack-result').textContent="Let's Play!";
          document.querySelector('#blackjack-result').style.color='black';
    
     }
            
}
function theGenerator(){
     return Math.floor(Math.random()*13);
}
function randomCard(){
     let randomIndex=theGenerator();
     let randomCardNumber=CARDS[randomIndex];
     let blackjackCards={
          '2':'images/2.png',
          '3':'images/3.png',
          '4':'images/4.png',
          '5':'images/5.png',
          '6':'images/6.png',
          '7':'images/7.png',
          '8':'images/8.png',
          '9':'images/9.png',
          '10':'images/10.png',
          'A':'images/A.png',
          'J':'images/J.png',
          'K':'images/K.png',
          'Q':'images/Q.png',
     };
     return blackjackCards[randomCardNumber];
}
function updateScore(card,activePlayer){
     if(card==='A'){
          if(activePlayer['score']+=CARD_MAP[card][1]<=21){
               activePlayer['score']+=CARD_MAP[card][1];
          }else{
               activePlayer['score']+=CARD_MAP[card][0];
          }
     }else{
     activePlayer['score']+=CARD_MAP[card];
     }
}
function showScore(activePlayer){
         if(activePlayer['score']>21){
          document.querySelector(activePlayer['scoreSpan']).textContent='BUST!!';
          document.querySelector(activePlayer['scoreSpan']).style.color='red';

         }else{
          document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
         }
          
     
}
//to create a asynchronus background task
//make that particular function async and await for required time
function sleep(ms){
     return new Promise(resolve =>setTimeout(resolve,ms));
}
async function blackjackStand(){
     if(blackjackGame['hit']===true){
          blackjackGame['isStand']=true;
          blackjackGame['deal']=true;
         function innerFunction(){
               let randomScore=theGenerator();
               let score=CARDS[randomScore];
               showCard(DEALER);
               updateScore(score,DEALER);
               showScore(DEALER);  
               
          }
          while(DEALER['score']<15){
               innerFunction();
               await sleep(1000);
          }
          let winner= computeWinner();
          displayResult(winner); 
     }
           
}

function computeWinner(){
     let winner;

     if(YOU['score']<=21){
         if(YOU['score']>DEALER['score'] || (DEALER['score']>21)){
              winner=YOU;
              console.log('You Win!');
         }else if(YOU['score']<DEALER['score']){
              winner=DEALER;
              console.log('You Lose!');
         }else if(YOU['score']===DEALER['score']){
              console.log('You drew!');
         }
     }else if(YOU['score']>21 && DEALER['score']<=21){
          winner=DEALER;
          console.log('You lose!')
     }else if(YOU['score']>21&&(DEALER['score'])>21){
          console.log('You drew!');
     }
     return winner;
}
let win=0,loss=0,drew=0;
let yeahhh=new Audio('sounds/cash.mp3');
let ohhhh=new Audio('sounds/aww.mp3');
function displayResult(winner){
     
     
     if(winner===YOU){
          document.querySelector('#blackjack-result').textContent='You Won!';
          document.querySelector('#blackjack-result').style.color='green';
          win++;
          yeahhh.play();
     }else if(winner===DEALER){
          document.querySelector('#blackjack-result').textContent='You Lost!';
          document.querySelector('#blackjack-result').style.color='red';
          loss++;
          ohhhh.play();
     }else{
          document.querySelector('#blackjack-result').textContent='You Drew!';
          document.querySelector('#blackjack-result').style.color='yellow';
          drew++;
     }
     //updating the table after the display results
     document.querySelector('#wins').textContent=win;
     document.querySelector('#loses').textContent=loss;
     document.querySelector('#draws').textContent=drew;

}
