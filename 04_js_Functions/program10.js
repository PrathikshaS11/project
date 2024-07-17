var movie1;
var movie2;
var showMovieInfo;
var movie;

// Initial movie1 object
movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

// Define the showMovieInfo function
showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Assign movie1 to movie and show info
movie = movie1;
showMovieInfo();

// Further Adventures

// 1) Assign movie2 to movie (without initializing movie2)
// var movie2; // Uncomment if needed
// movie = movie2; // Uncomment if needed
// showMovieInfo(); // Uncomment to see the error

// 2) Assign an empty object to movie2
movie2 = {};
movie = movie2;
showMovieInfo(); // Displays undefined properties

// 3) Fill movie2 with properties
movie2 = {
    title: "The Incredibles",
    actors: "Craig T. Nelson, Holly Hunter",
    directors: "Brad Bird"
};
movie = movie2;
showMovieInfo(); // Displays The Incredibles information
