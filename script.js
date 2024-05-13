// function addRecommendation() {
//     // Get the message of the new recommendation
//     let recommendation = document.getElementById("new_recommendation");
//     // If the user has left a recommendation, display a pop-up
//     if (recommendation.value != null && recommendation.value.trim() != "") {
//       console.log("New recommendation added");
//       //Call showPopup here
  
//       // Create a new 'recommendation' element and set it's value to the user's message
//       var element = document.createElement("div");
//       element.setAttribute("class","recommendation");
//       element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
//       // Add this element to the end of the list of recommendations
//       document.getElementById("all_recommendations").appendChild(element); 
      
//       // Reset the value of the textarea
//       recommendation.value = "";
//     }
//   }
  
//   function showPopup(bool) {
//     if (bool) {
//       document.getElementById('popup').style.visibility = 'visible'
//     } else {
//       document.getElementById('popup').style.visibility = 'hidden'
//     }
//   }
  
// function acTion(name, age){
//   this.name = name;
//   this.age = age;
// }
// let olaMide = new acTion('ada', 78)
// acTion.prototype.position = function(){
//   this.name + ' is a Nigrian aged ' + this.age
// }


// console.log(olaMide.position())

// class acTion {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   position(){
//     return this.name * this.age
//   }
// }

// let olaMide = new acTion(20, 20)

// console.log(olaMide.position())

// let camelCase = 'Wale'
// let dogCase = 'is not'
// let henCase = 'Walex' + 'Twi'
// camelCase += dogCase + henCase

// let birdCase = [['hen','goat'],[86,'cat', 26],[['hen','goat', 82], 21, 1],[86, 26],]

// birdCase.shift()
// console.log(birdCase)
let vv = 5;
function htmlClass(a, m){
  a * m + vv
}
console.log(htmlClass(2,7))
