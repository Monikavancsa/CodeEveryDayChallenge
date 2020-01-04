var addButton=document.querySelector(".addFood")

var foodList= document.getElementById('foodList')

var prnt= document.querySelector('.consumedFoods')
var listLenght=1

addButton.addEventListener("click", function(){
   event.preventDefault();
   listLenght++;
    var cln=foodList.cloneNode(true);
    console.log(cln)
    console.log(prnt)
  prnt.appendChild(cln)
  var removeButton=document.querySelectorAll(".removeFood")
  console.log(removeButton)
  for(i=0; i<removeButton.length; i++){
  removeButton[i].addEventListener("click", function(element){
    listLenght--;
  this.parentNode.remove();
    console.log(event)
  console.log(this.parentNode)
  })
  }
  return listLenght;
})
