# Get The Weather 🌦

This is a weather app project in which the user can interact with the app,  
save weather locations to favorites, and see the upcoming weather for the next 5 days.  
The app UI is **responsive** for all screen sizes

##### Technology used:
- React.js
- Redux
- UI library: material UI

The `GlobalStateInitialSetters.js` is used to initialize all the global states  
with the correct data, and to manipulate the data while the events change  
using `useEffect` hooks.  
The `changeFavoriteCards` global state checks if the location exists in the state,  
if the location exists the function removes it, if the location doesn't exist  
the function adds it to the state.  

Deployed page: https://michael-ivlev.github.io/Michael-Ivlev-21-3-2022  
*Please note that if you get fetch error it is because the AccuWeather API gives only 50 calls per day
