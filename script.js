// Lightning Exercise
// Hello, world

//In your index.html file, add an h1 element with an id of #hello-container.
//In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
//Use document.querySelector to target your #hello-container
//User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.


var greeting = document.querySelector("#hello-container");
greeting.innerHTML = "Hello, world!";

// Lightning Exercise
// Keeping track of chores

//In your index.html file, create an empty <ul> element and give it an id of #chores-container
//In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
//Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
//You should end up with a bulleted list of all your regular chores.

var choresArray = ["take out trash", "mow yard", "wash dishes", "walk dog", "laundry"];

for(i = 0; i < choresArray.length; i++){
    document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
}
