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
//cat generator function
function genrateCat(){
     let image=document.createElement("img");
     //setting the src property
     image.src="http://img3.wikia.nocookie.net/__cb20110711012106/sonicmovie/images/4/48/Tsunade.jpg";
     //accesing the element by the id
     let div=document.getElementById('flex-cat-gen');
     div.appendChild(image);
     
}

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
function finalMessage([yourChoice,botChoice]){
     if(yourChoice===0){
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