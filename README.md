# Project
This project is generated with Angular CLI and is writen mostly in TypeScript programming language.
I have created a simple web page that uses https://restcountries.eu API to get information about countries and Google Maps JavaScript API (https://developers.google.com/maps/documentation/javascript/tutorial) to show country's coordinates (restcontries) on the google maps.

Navigation on the web page:
* Logo can be used as a button to go to the front page (as it is on the most web pages).
* On the country information page you can click on border countries to open more information about them.
* Web page use dynamic search that filtrates all countries depending on values that are presented in restcountries API. If you search for instance for specific language you will get a list of the countries where this language is official.

## Restcountries API
* https://restcountries.eu/rest/v2/all was used for the search function.
* https://restcountries.eu/rest/v2/region/{region} <Africa, Americas, Asia, Europe, Oceania> to get information about each region 
* https://restcountries.eu/rest/v2/alpha/{code} to get information about country, it wasn't necessary because all information about country could be gotten from https://restcountries.eu/rest/v2/region/. I wanted to add a function to make it possible to navigate to the border countries from the country information page. I have designed it in a such way to avoid the problem in case the border country is located in another region.

## Google Maps JavaScript API
Unfortunately due to security reason I cannot post my API key publicly, if you have your key you can add it in `/src/app/app.module.ts` file
otherwise there will be error on the google maps: "Oops! Something went wrong."

## To run the project localy:
### You will need to install:
* NodeJS: https://nodejs.org/en/download/
* Angular CLI: https://cli.angular.io/

### How to run:
1. 	Download all files
2. 	Open directory in terminal
3. 	Run command `npm install`
4. 	Run command `ng serve -o`
5. 	The website should open in your browser automatically, but you can always open it by navigating to `http://localhost:4200/`. 


## Demo:
https://dry-tor-28046.herokuapp.com/ (first time it may load slow)

### Website is designed to work on both desktop version and mobile:
* Desktop version:

![desktop version](http://artiom.no/images/oslomet/screenshot/desktop.gif)
* Mobile version:

<img src="http://artiom.no/images/oslomet/screenshot/mobile.gif" height="500">
