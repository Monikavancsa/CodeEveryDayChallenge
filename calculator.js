var snowflakes=document.querySelectorAll(".snowflake")


var container=document.querySelector('.container')
var submitButton =document.getElementById("submit")
var selectedValues=document.getElementById("list")

submitButton.addEventListener("click", function(){
  var user =document.getElementById("name").value;
var message= document.querySelector("h3");
var messageImage=document.querySelector("#messageImage")
for(var i=0; i<snowflakes.length; i++){
  snowflakes[i].style.display="block";
  container.style.display="none"
}
  messageImage.style.display="block";
  console.log(user)

if (listLenght<3){

message.innerText=`That's it? ${user}, you were quite disciplined ...
I'd recommend 2 hours of skating with your friends! You will burn around 700 ckal.
Alternatively, dancing in a club couple hours will bring you similar benefits. Have fun!`;
messageImage.src="skateing.jpg"
}
else if (listLenght>=3 && listLenght<=6){
  message.innerText=` That's something ${user}! You were not on a diet during the Holidays for sure...
  Walking 10000 steps burns around 500 kcal.
   If you take one of your friend, you'll have fun and won't notice the effort!
  Burn the rest of the calories do Burpees 5X2 minutes with 30 seconds break.
  `;
  messageImage.src="walk.jpg"
}

else if (listLenght>6) {
  message.innerText=` ${user}, I consider you absolutely guilty!
  Were drinking and eating your main activities?
   To make it up I  recommend you to do 2 hours of housework.
   5 days in a raw. It not only burns all the calories, but it will improve
   your mood as well. Don't forget to put some music on!
  `
    messageImage.src="cleaning.jpg"
}

//var weight=document.getElementById("weight").value;

})
