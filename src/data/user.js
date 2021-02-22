const username = "Liza";
const city = "New York";

const image = "https://i.imgur.com/mV8PQxj.gif";

// export all three variables as named exports

export {username, city, image}
// In the src/data/user.js file, there are three variables that have information about the owner of the portfolio site. Export all three variables using the named export syntax.

// After you've exported them, import them in the following files:

// Import the username and city variables in the src/components/Home.js file
// Import the image variable in the src/components/About.js file