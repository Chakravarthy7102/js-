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
function reset(){
       document.getElementById("ageInDayss").remove();
}