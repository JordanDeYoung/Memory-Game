const gameContainer = document.getElementById("game");
 
const COLORS = [
 "red",
 "blue",
 "green",
 "orange",
 "purple",
 "red",
 "blue",
 "green",
 "orange",
 "purple"
];
 
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
 let counter = array.length;
 
 // While there are elements in the array
 while (counter > 0) {
   // Pick a random index
   let index = Math.floor(Math.random() * counter);
 
   // Decrease counter by 1
   counter--;
 
   // And swap the last element with it
   let temp = array[counter];
   array[counter] = array[index];
   array[index] = temp;
 }
 
 return array;
}
 
let shuffledColors = shuffle(COLORS);
 
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
 for (let color of colorArray) {
   // create a new div
   const newDiv = document.createElement("div");
 
   // give it a class attribute for the value we are looping over
   newDiv.classList.add(color);
 
   // call a function handleCardClick when a div is clicked on
   newDiv.addEventListener("click", handleCardClick);
 
   // append the div to the element with an id of game
   gameContainer.append(newDiv);
 }
}
document.querySelector('#nextWave').addEventListener('click', function(e){
location.reload()
})
document.querySelector('#newGame').addEventListener('click', function(e){
 localStorage.setItem('score', 0)
 location.reload()
 })
 document.querySelector('#reset').addEventListener('click', function(e){
   localStorage.setItem('highScore', 0)
   localStorage.setItem('score', 0)
   location.reload()
   })
 
 
 
 
 
 
score = parseInt(localStorage.getItem('score'))
highScore = parseInt(localStorage.getItem('highScore'))
clicksRed = []
clicksBlue = []
clicksGreen = []
clicksOrange = []
clicksPurple = []
clicks = []
document.getElementById('highScore').innerText = highScore
document.getElementById('score').innerText = score
function removeItemOnce(arr, value) {
 var index = arr.indexOf(value);
 if (index > -1) {
   arr.splice(index, 1);
 }
 return arr;
}
// TODO: Implement this function!
function handleCardClick(event) {
 // you can use event.target to see which element was clicked
 console.log("you just clicked", event.target);
 console.log(event.target.nodeName)
 //red
 if (event.target.classList.contains('red') === true){
   if (event.target.id === 'red0'){
     console.log(`That's the same one you big meatball!`)
   }
   else if(event.target.id === 'red1'){
     console.log(`THAT'S THE SAME YOU NOODLE!!!`)
   }
   else if(event.target.id !== 'red0'){
   event.target.setAttribute('id', `red${clicksRed.length}`)
 
   clicksRed.push(`${event.target.id}`)
   clicks.push(event.target.id)
  
 
     if(clicks[0] === 'red0' && clicks[clicks.length-1] === 'red1'){
     console.log('add point')
     //scoring
     score += 1
     document.getElementById('score').innerText = score
     localStorage.setItem('score', score)
     if(score > highScore){
       highScore = score;
       document.getElementById('highScore').innerText = highScore;
       localStorage.setItem('highScore', highScore)
     }
       if (clicks.length === 2){
       for(let i = 0; i < 2; i++){
       clicks.pop()
       }}
   }
     else if(clicks[0] !== 'red0' || clicks[clicks.length-1] !== 'red1'){
       //remove id's and clear clicks array
       if(clicks.length === 2){     
       for(i = 0; i < 2; i++){
         let ids = document.getElementById(clicks[i])
         setTimeout(function(){ids.setAttribute('id','')},1000)}
       for(let i = 0; i < 2; i++){
        removeItemOnce(clicksRed, 'red0');
        removeItemOnce(clicksBlue, 'blue0');
        removeItemOnce(clicksGreen, 'green0');
        removeItemOnce(clicksOrange, 'orange0');
        removeItemOnce(clicksPurple, 'purple0')
         }
         for(let i = 0; i < 2; i++){
         clicks.pop();}
         }
     }
   }
  
   }
 //blue
 else if (event.target.classList.contains('blue') === true){
   if (event.target.id === 'blue0'){
     console.log(`That's the same one you big meatball!`)
   }
   else if(event.target.id === 'blue1'){
     console.log(`THAT'S THE SAME YOU NOODLE!!!`)
   }
   else if(event.target.id !== 'blue0'){
   event.target.setAttribute('id', `blue${clicksBlue.length}`)
 
   clicksBlue.push(`${event.target.id}`)
   clicks.push(event.target.id)
 
   if(clicks[0] === 'blue0' && clicks[clicks.length-1] === 'blue1'){
     console.log('add point')
     //scoring
     score += 1
     document.getElementById('score').innerText = score
     localStorage.setItem('score', score)
     if(score > highScore){
       highScore = score;
       document.getElementById('highScore').innerText = highScore;
       localStorage.setItem('highScore', highScore)
     }
     if (clicks.length === 2){
       for(let i = 0; i < 2; i++){
       clicks.pop()
       }}
   }
     else if(clicks[0] !== 'blue0' || clicks[clicks.length-1] !== 'blue1'){
       //remove id's and clear clicks array
       if(clicks.length === 2){
       for(i = 0; i < 2; i++){
         let ids = document.getElementById(clicks[i])
         setTimeout(function(){ids.setAttribute('id','')},1000)}
       for(let i = 0; i < 2; i++){
        removeItemOnce(clicksRed, 'red0');
        removeItemOnce(clicksBlue, 'blue0');
        removeItemOnce(clicksGreen, 'green0');
        removeItemOnce(clicksOrange, 'orange0');
        removeItemOnce(clicksPurple, 'purple0')
         }
         for(let i = 0; i < 2; i++){
         clicks.pop();}
       }}
   }
  
 
  
   else if(clicksBlue[0] !== clicksBlue[clicksBlue.length-1]){
     console.log('not equal')
   }}
 //green
 else if (event.target.classList.contains('green') === true){
   if (event.target.id === 'green0'){
     console.log(`That's the same one you big meatball!`)
   }
   else if(event.target.id === 'green1'){
     console.log(`THAT'S THE SAME YOU NOODLE!!!`)
   }
   else if(event.target.id !== 'green0'){
   event.target.setAttribute('id', `green${clicksGreen.length}`)
 
   clicksGreen.push(`${event.target.id}`)
   clicks.push(event.target.id)
  
 
     if(clicks[0] === 'green0' && clicks[clicks.length-1] === 'green1'){
     console.log('add point')
     //scoring
     score += 1
     document.getElementById('score').innerText = score
     localStorage.setItem('score', score)
     if(score > highScore){
       highScore = score;
       document.getElementById('highScore').innerText = highScore;
       localStorage.setItem('highScore', highScore)
     }
       if (clicks.length === 2){
       for(let i = 0; i < 2; i++){
       clicks.pop()
       }}
   }
     else if(clicks[0] !== 'green0' || clicks[clicks.length-1] !== 'green1'){
       //remove id's and clear clicks array
       if(clicks.length === 2){
       for(i = 0; i < 2; i++){
         let ids = document.getElementById(clicks[i])
         setTimeout(function(){ids.setAttribute('id','')},1000)}
       for(let i = 0; i < 2; i++){
        removeItemOnce(clicksRed, 'red0');
        removeItemOnce(clicksBlue, 'blue0');
        removeItemOnce(clicksGreen, 'green0');
        removeItemOnce(clicksOrange, 'orange0');
        removeItemOnce(clicksPurple, 'purple0')
         }
         for(let i = 0; i < 2; i++){
         clicks.pop();}
         }
     }
   }
  
   }
   //orange
 else if (event.target.classList.contains('orange') === true){
   if (event.target.id === 'orange0'){
     console.log(`That's the same one you big meatball!`)
   }
   else if(event.target.id === 'orange1'){
     console.log(`THAT'S THE SAME YOU NOODLE!!!`)
   }
   else if(event.target.id !== 'orange0'){
   event.target.setAttribute('id', `orange${clicksOrange.length}`)
 
   clicksOrange.push(`${event.target.id}`)
   clicks.push(event.target.id)
  
 
     if(clicks[0] === 'orange0' && clicks[clicks.length-1] === 'orange1'){
     console.log('add point')
     //scoring
     score += 1
     document.getElementById('score').innerText = score
     localStorage.setItem('score', score)
     if(score > highScore){
       highScore = score;
       document.getElementById('highScore').innerText = highScore;
       localStorage.setItem('highScore', highScore)
     }
       if (clicks.length === 2){
       for(let i = 0; i < 2; i++){
       clicks.pop()
       }}
   }
     else if(clicks[0] !== 'orange0' || clicks[clicks.length-1] !== 'orange1'){
       //remove id's and clear clicks array
       if(clicks.length === 2){
       for(i = 0; i < 2; i++){
         let ids = document.getElementById(clicks[i])
         setTimeout(function(){ids.setAttribute('id','')},1000)}
       for(let i = 0; i < 2; i++){
        removeItemOnce(clicksRed, 'red0');
        removeItemOnce(clicksBlue, 'blue0');
        removeItemOnce(clicksGreen, 'green0');
        removeItemOnce(clicksOrange, 'orange0');
        removeItemOnce(clicksPurple, 'purple0')
         }
         for(let i = 0; i < 2; i++){
         clicks.pop();}
         }
     }
   }
  
   }
 
   //purple
 else if (event.target.classList.contains('purple') === true){
   if (event.target.id === 'purple0'){
     console.log(`That's the same one you big meatball!`)
   }
   else if(event.target.id === 'purple1'){
     console.log(`THAT'S THE SAME YOU NOODLE!!!`)
   }
   else if(event.target.id !== 'purple0'){
   event.target.setAttribute('id', `purple${clicksPurple.length}`)
 
   clicksPurple.push(`${event.target.id}`)
   clicks.push(event.target.id)
  
 
     if(clicks[0] === 'purple0' && clicks[clicks.length-1] === 'purple1'){
     console.log('add point')
     //scoring
     score += 1
     document.getElementById('score').innerText = score
     localStorage.setItem('score', score)
     if(score > highScore){
       highScore = score;
       document.getElementById('highScore').innerText = highScore;
       localStorage.setItem('highScore', highScore)
     }
       if (clicks.length === 2){
       for(let i = 0; i < 2; i++){
       clicks.pop()
       }}
   }
     else if(clicks[0] !== 'purple0' || clicks[clicks.length-1] !== 'purple1'){
       //remove id's and clear clicks array
       if(clicks.length === 2){
       for(i = 0; i < 2; i++){
         let ids = document.getElementById(clicks[i])
         setTimeout(function(){ids.setAttribute('id','')},1000)}
       for(let i = 0; i < 2; i++){
        removeItemOnce(clicksRed, 'red0');
        removeItemOnce(clicksBlue, 'blue0');
        removeItemOnce(clicksGreen, 'green0');
        removeItemOnce(clicksOrange, 'orange0');
        removeItemOnce(clicksPurple, 'purple0')
         }
         for(let i = 0; i < 2; i++){
         clicks.pop();}
         }
     }
   }
  
   }
 
 }
  time = 0
 setInterval(function(){time += 1;
 document.getElementById('time').innerText = time;},1000)
 // when the DOM loads
createDivsForColors(shuffledColors);

