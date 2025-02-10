// Step 1: Create a string array of favorite movies and display the second movie
let favoriteMovies = ["3 Idiots", "The Fight Club", "The Dark Knight", "Avengers", "Bahubali"];
console.log(favoriteMovies[1]);

// Step 2: Declare movies array using constructor, assign values, and display first movie
let movies = new Array(5);
movies[0] = "3 Idiots";
movies[1] = "The Fight Club";
movies[2] = "The Dark Knight";
movies[3] = "Avengers";
movies[4] = "Bahubali";
console.log(movies[0]);

// Step 3: Add a new movie in the 3rd position and display the length
movies.splice(2, 0, "Iron Man");
console.log(movies.length);

// Step 4: Declare array using literal notation, delete first movie, and display contents
let moviesList = ["3 Idiots", "The Fight Club", "The Dark Knight", "Avengers", "Bahubali"];
delete moviesList[0];
console.log(moviesList);

// Step 5: Declare an array of 7 movies and iterate using for/in loop
let moreMovies = ["3 Idiots", "The Fight Club", "The Dark Knight", "Avengers", "Bahubali", "Iron Man", "Spider-Man"];
for (let index in moreMovies) {
    console.log(moreMovies[index]);
}

// Step 6: Iterate using for/of loop
for (let movie of moreMovies) {
    console.log(movie);
}

// Step 7: Display movies in sorted order using for/of loop
moreMovies.sort();
for (let movie of moreMovies) {
    console.log(movie);
}

// Step 8: Create least favorite movies and display both lists
let leastFavMovies = ["Tiger Zinda hai", "Race 3", "Tiger 2"];
console.log("Movies I like:");
for (let movie of moreMovies) {
    console.log(movie);
}
console.log("\nMovies I regret watching:");
for (let movie of leastFavMovies) {
    console.log(movie);
}

// Step 9: Merge both arrays and display in reverse sorted order
let allMovies = moreMovies.concat(leastFavMovies);
console.log(allMovies.sort().reverse());

// Step 10: Return and display last item in the array
console.log(allMovies[allMovies.length - 1]);

// Step 11: Return and display first item in the array
console.log(allMovies[0]);

// Step 12: Replace disliked movies with new movies
let dislikedIndexes = allMovies.map((movie, index) => leastFavMovies.includes(movie) ? index : -1).filter(index => index !== -1);
dislikedIndexes.forEach((index, i) => allMovies[index] = `New Fav Movie ${i+1}`);
console.log(allMovies);

// Step 13: Multi-dimensional array for movies and rankings
let rankedMovies = [
    ["3 Idiots", 1], 
    ["The Fight Club", 2], 
    ["The Dark Knight", 3], 
    ["Avengers", 4], 
    ["Bahubali", 5]
];

// Filter only movie names using filter()
let movieNames = rankedMovies.filter(item => typeof item[0] === "string").map(item => item[0]);
console.log(movieNames);

// Step 14: Employee list and function to display employees
let employees = ["Parth", "Raju", "Goku", "Dheeraj", "Mitisha"];
let showEmployee = function(empArray) {
    console.log("Employees:\n");
    empArray.forEach(emp => console.log(emp.toUpperCase()));
};
showEmployee(employees);

// Step 15: Function to filter out false, null, 0, and blank values
function filterValues(arr) {
    return arr.filter(value => value);
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// Step 16: Function to get a random item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomItem([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

// Step 17: Function to get the largest number from an array
function getLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(getLargestNumber([10, 55, 87, 12, 99, 32, 67, 200, 500, 24, 40]));
