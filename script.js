//notes
// function darkMode(){
//     document.body.style.background = "gray";
//   }
//   function lightMode(){
//       document.body.style.background = "white";
//   }


// Lightning Exercise
// Hello, world

//In your index.html file, add an h1 element with an id of #hello-container.
//In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
//Use document.querySelector to target your #hello-container
//User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.

var greeting= "Hello, world!";
document.querySelector("#hello-container").innerHTML = greeting;


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

// Be sure to add boilerplate HTML to your index.html file and link it to script.js.
// 1. Movie Poster

//     Copy and paste the following code between the <body> tags of your HTML document:

// <section id="movie-poster">
//   <h1 id="title"></h1>
//   <h2 id="genre"></h2>
//   <h3 id="release-date"></h3>
// </section>

//     In your JavaScript file, copy and paste the following object:

// var movieObject = {
//   title: "Star Wars: A New Hope",
//   genre: "Science Fiction",
//   releaseDate: "May 25, 1977"
// }

//     Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

var movieObject = {
   title: "Star Wars: A New Hope",
   genre: "Science Fiction",
   releaseDate: "May 25, 1977"
}

var movieTitle = document.querySelector("#title");
movieTitle.innerHTML = movieObject.title; 

var movieGenre = document.querySelector("#genre");
movieGenre.innerHTML = movieObject.genre;

var movieReleaseDate = document.querySelector("#release-date");
movieReleaseDate.innerHTML = movieObject.releaseDate;


// 2. Downtown Restaurants

//     Copy and paste the following array into your JavaScript file:

// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

//     Copy and paste the following code into your index.html file:

// <ul id="restaurants-list"></ul>

//     Loop over the downtownRestaurants array.
//     Use the loop to create an <li> element for each item in the array.
//     Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
//     You should see a bulleted list of restaurants in the DOM.

var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

for(i = 0; i < downtownRestaurants.length; i++){
    document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
}


// 3. Sandwich Toppings

//     Copy and paste the following array into your JavaScript file:

// var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

//     Copy and paste the following code into your index.html file:

// <ul id="sandwich-container"></ul>

//     Write a function that does the following things:
//         Loop through sandwichToppings
//         Build an <li> element for each item in the array.
//         Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
//     Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

for(i = 0; i < sandwichToppings.length; i++){
    document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
}


// Challenges
// 4. Movie Schedule

// You've been hired to build an app for a movie theater. You need to list all of the movies that are currently playing.

// Start with some basic HTML:

// <body>
//   <div id="movie-schedule"></div>
// </body>

// In your JavaScript file, copy and paste the following array of objects:

//     Use a for loop to loop through the movies, build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.
//     You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
]
 
// for(i = 0; i < movieSchedule.length; i++){
//         document.querySelector("#movie-schedule").innerHTML += `<div><p><strong>Title:</strong> ${movieSchedule[i].title}</p> <p><strong>Rated:</strong>${movieSchedule[i].rating}</strong></p> <p>${movieSchedule.currentlyPlaying}</p> <img src=${movieSchedule[i].poster}></div>`
// }

  


// More Challenges:
// 5. Movie Schedule Take Two

//     Revisit your movie schedule exercise from above.
//     Add a conditional so that you only print movies where the currentlyPlaying property is equal to true.
//     Use flexbox to arrange your movie schedule side by side on your web page.
//     If a movie does not have a poster property, give it a placeholder image like this
//     Give all G-rated movies a dotted green border that's 2px wide.
//     Give all PG-rated movies a dotted yellow border that's 2px wide.
//     Give all PG-13 movies a dotted orange border that's 2px wide.
//     Give all R-rated movies a dotted red border that's 2px wide.


for(i = 0; i < movieSchedule.length; i++){
    if(movieSchedule[i].currentlyPlaying === true){
        if(movieSchedule[i].poster != null){
             document.querySelector("#movie-schedule").innerHTML += `<div class="movieContainer" id="${movieSchedule[i].rating}"><h3>${movieSchedule[i].title}</h3> <h3>Rated:${movieSchedule[i].rating}</h3> <img src=${movieSchedule[i].poster} width="409" height="606"></div>`
        }
        else
        {
            document.querySelector("#movie-schedule").innerHTML += `<div class="movieContainer" id="${movieSchedule[i].rating}"><h3>${movieSchedule[i].title}</h3> <h3>Rated:${movieSchedule[i].rating}</h3> <img src=https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png}></div>`
        }
    }
}

// 6. Cohort Website

//     Copy and paste the following code inside the body tags of your HTML file:

// <div id = "cohort-one-container">
// </div>
// <div id = "cohort-two-container">
// </div>
// <div id = "cohort-three-container">
// </div>

//     Copy and paste the following code in your JavaScript file:

var cohort1 = {
  name: "Cohort One",
  startDate: "January 15, 2018",
  endDate: "July 12, 2019",
  instructors: ["Kim", "Josh", "Jordan"],
  techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

var cohort2 = {
 name: "Cohort Two",
 startDate: "August 15, 2019",
 endDate: "Feb 10, 2020",
 instructors: ["Tommy", "Jordan"],
 techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

var cohort3 = {
 name: "Cohort Three",
 startDate: "April 6, 2020",
 endDate: "August 20, 2020",
 instructors: ["Tommy", "Jordan"],
 techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

// function buildHtmlString(cohortObjectParameter){
//   // YOUR CODE GOES HERE
// }

// function printHtmlString(htmlStringParameter, elementIdParameter){
//   // YOUR CODE GOES HERE
// }

//     The buildHtmlString function should take an cohort object as a parameter and return a HTML string with the following elements:
//         An h1 of the cohort's name
//         An h3 for the start date
//         An h3 for the end date
//         An unordered list of instructors
//         An unordered list of technologies learned
//     The printHtmlString function should take two parameters:
//         An HTML string
//         The id of the element into which you want to print your HTML string
//     The printHtmlString function should do the following things:
//         Use document.querySelector to get a reference to the element in the DOM with whatever id you passed in.
//         Use innerHTML to print the HTML string you passed in to the DOM.
//     Call the buildHTMLString function and pass in cohort1 as an example.
//     Store the returned value in a new variable called cohort1HTML.
//     Call the printHtmlString function and pass in your cohort1HTML variable and the id of the element you want to print to ("cohort-one-container").
//     Repeat steps 6-8 for cohort2 and cohort3

function buildHtmlString(cohortObjectParameter){
  var cohortString = `<h1>${cohortObjectParameter.name}</h1><h3>${cohortObjectParameter.startDate}</h3><h3>${cohortObjectParameter.endDate}</h3><ul><h3>Instructors</h3>`
  for(i = 0; i < cohortObjectParameter.instructors.length; i++){
    cohortString += `<li>${cohortObjectParameter.instructors[i]}</li>` 
  }
  cohortString += `</ul><ul><h3>Tech Stack</h3>`
  for(i = 0; i < cohortObjectParameter.techStack.length; i++){
    cohortString += `<li>${cohortObjectParameter.techStack[i]}</li>` 
  }
  cohortString += `</ul>`
  return cohortString

}

function printHtmlString(htmlString, idContainer){
  document.querySelector(`#${idContainer}`).innerHTML = htmlString
}

var cohort1HTML = buildHtmlString(cohort1);
var cohort2HTML = buildHtmlString(cohort2);
var cohort3HTML = buildHtmlString(cohort3);

printHtmlString(cohort1HTML, "cohort-one-container")
printHtmlString(cohort2HTML, "cohort-two-container")
printHtmlString(cohort3HTML, "cohort-three-container")



// 7. Weather Data

//     Copy and paste the data from the Yahoo Weather API into your JS file. You can find it at the bottom of the variables and data types chapter.

//     Copy and paste the following HTML anywhere between the <body> tags of your index.html file.

//<header id="current-weather">
//</header>
//<div id="weather-forecast">
//</div>

//     In your JavaScript file, use the weather data to create an HTML string representing the current weather conditions. Your HTML string should include the following elements:
//         An h1 representing location (city, country, and region)
//         An h2 representing current conditions weather conditions including temperature ("28 degrees F and blowing snow" is fine)
//     Use document.querySelector to grab a reference to the element with an id of "current-weather"
//     Use .innerHTML to insert your HTML string into the "current-weather" element.
//     Create another HTML string representing a three day forecast. Each day should have its own div with a class of forecast-day. Each div should have the following child elements:
//         An h3 element with the day of the week and the date (Example: "Thu, 06 Dec 2018")
//         A p element with the high temperature
//         A p element with the low temperature
//         A p element with the text (i.e. "snow")
//     Use document.querySelector to grab a reference to the element with an id of "weather-forecast"
//     Use .innerHTML to insert your HTML string into the "weather-forecast" element.
//     If you don't already have one, create a CSS stylesheet in your directory.
//     Use flexbox to arrange your .forecast-day elements side by side on the page. They should be spaced evenly and wrap when the screen is resized.
//     Each .forecast-day element should have a padding of 1rem;
//     If all the high temperatures in the three day forecast are above 85, the background color of the page should be light red.
//     If all of the high temperatures in the three day forecast are below 40, the background color of the page should be light blue.
//     If any of the low temperatures are below 20, the background of each individual ".forecast-day" element should be dark blue.
//     If any of the high temperatures are above 95, the background of each individual ".forecast-day" element should be dark red.

var weatherData = {
  "query": {
   "count": 1,
   "created": "2018-12-06T20:52:22Z",
   "lang": "en-US",
   "results": {
    "channel": {
     "units": {
      "distance": "mi",
      "pressure": "in",
      "speed": "mph",
      "temperature": "F"
     },
     "title": "Yahoo! Weather - Nome, AK, US",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
     "description": "Yahoo! Weather for Nome, AK, US",
     "language": "en-us",
     "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
     "ttl": "60",
     "location": {
      "city": "Nome",
      "country": "United States",
      "region": " AK"
     },
     "wind": {
      "chill": "14",
      "direction": "68",
      "speed": "36"
     },
     "atmosphere": {
      "humidity": "90",
      "pressure": "989.0",
      "rising": "0",
      "visibility": "11.0"
     },
     "astronomy": {
      "sunrise": "11:38 am",
      "sunset": "4:7 pm"
     },
     "image": {
      "title": "Yahoo! Weather",
      "width": "142",
      "height": "18",
      "link": "http://weather.yahoo.com",
      "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
     },
     "item": {
      "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
      "lat": "64.499474",
      "long": "-165.405792",
      "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
      "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
      "condition": {
       "code": "15",
       "date": "Thu, 06 Dec 2018 11:00 AM AKST",
       "temp": "28",
       "text": "Blowing Snow"
      },
      "forecast": [
       {
        "code": "16",
        "date": "06 Dec 2018",
        "day": "Thu",
        "high": "29",
        "low": "25",
        "text": "Snow"
       },
       {
        "code": "26",
        "date": "07 Dec 2018",
        "day": "Fri",
        "high": "27",
        "low": "22",
        "text": "Cloudy"
       },
       {
        "code": "28",
        "date": "08 Dec 2018",
        "day": "Sat",
        "high": "22",
        "low": "8",
        "text": "Mostly Cloudy"
       },
       {
        "code": "34",
        "date": "09 Dec 2018",
        "day": "Sun",
        "high": "7",
        "low": "-11",
        "text": "Mostly Sunny"
       },
       {
        "code": "28",
        "date": "10 Dec 2018",
        "day": "Mon",
        "high": "3",
        "low": "-11",
        "text": "Mostly Cloudy"
       },
       {
        "code": "28",
        "date": "11 Dec 2018",
        "day": "Tue",
        "high": "10",
        "low": "2",
        "text": "Mostly Cloudy"
       },
       {
        "code": "26",
        "date": "12 Dec 2018",
        "day": "Wed",
        "high": "9",
        "low": "5",
        "text": "Cloudy"
       },
       {
        "code": "28",
        "date": "13 Dec 2018",
        "day": "Thu",
        "high": "14",
        "low": "8",
        "text": "Mostly Cloudy"
       },
       {
        "code": "30",
        "date": "14 Dec 2018",
        "day": "Fri",
        "high": "13",
        "low": "-3",
        "text": "Partly Cloudy"
       },
       {
        "code": "30",
        "date": "15 Dec 2018",
        "day": "Sat",
        "high": "7",
        "low": "-3",
        "text": "Partly Cloudy"
       }
      ],
      "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
      "guid": {
       "isPermaLink": "false"
      }
     }
    }
   }
  }
 }

var weatherString = `<div class="forecast-day"><h1>${weatherData.query.results.channel.location.city}, ${weatherData.query.results.channel.location.country},${weatherData.query.results.channel.location.region}</h1><h2>${weatherData.query.results.channel.item.condition.temp} Degrees Fahrenheit and ${weatherData.query.results.channel.item.condition.text}</h2></div>`

document.querySelector("#current-weather").innerHTML = weatherString


var threeDayForecastString = "";

//For loop to build the three day forecast string
for(i = 0; i < 3; i++){
  threeDayForecastString += `<div class="forecast-day"><h3>${weatherData.query.results.channel.item.forecast[i].day} ${weatherData.query.results.channel.item.forecast[i].date}</h3> <p>${weatherData.query.results.channel.item.forecast[i].high}</p><p>${weatherData.query.results.channel.item.forecast[i].low}</p><p>${weatherData.query.results.channel.item.forecast[i].text}</p></div>`
}

document.querySelector("#weather-forecast").innerHTML += threeDayForecastString



