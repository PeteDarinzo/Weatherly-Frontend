# Capstone-2 (Ad Interim: Weather.ly)

## Developer: Peter Darinzo

### View the app: 

[Navigation](#navigation)  
[Installation](#installation)  
[Testing](#testing)

## About 

**Goal**

Weatherly is an app intended to optimize your free time by generating a custom forecast based on your weather preferences, and keeping tracking of movies you intend to watch. 


**Data** 

- The Open Movie Database [(OMDB)](http://www.omdbapi.com/) API for movie/TV show data.
- The [OpenWeather](https://www.zipcodeapi.com/) API for weather data.

## Navigation
The logged out landing page gives an overview of the app's purpose. From there, users can signup, or login if they have an account. 

To sign up, a user creates a username and password, and provides their location via postal code, and country. The app converts this information into latitude and longitude, and the city name, and stores it for retreiving forecasts.

When a user logs in, they are presented with a homepage that provides a three day forecase, and a list of the four most recently added movies, if any. 

From there, user's can navigate to their profile page, where they can update their watch preferences. User's may specify their ideal watch temperatures, e.g. below temperature A, and above temperature B, as well as the weather conditions that they would like to watch in. User's may also update their postal code and country, in case they move.

Users may navigate to the search page, where they can search for movies or TV shows by title. A list of results is displayed on the right hand side, and users may choose to save results.

The movies page displays a list of all movies the user has saved. Clicking on a move will show a detail page including the year, rating, and a synopsis for each movie. 

The forecast page gives an eight day (including the current day) forecast. Each day has a colored scale, indicating how well the forecast matches the user's watch preferences.

## Installation

### Before beginning:

The node package manager is required to run this app. The app also requires a Postgresql for the database.

## Instructions

1. Get a free Open Movie Database key.

2. Get a free Open Weather key.

3. Clone the repo.

4. Install all packages

5. Create a .env file, and add the keys as follows

6. Run the app

7. Open a web browser on the server's port. 
