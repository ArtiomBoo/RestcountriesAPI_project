# Project
This project was generated with Angular CLI, to create a simple web page that uses https://restcountries.eu API to get information about countries as well as Google Maps JavaScript API (https://developers.google.com/maps/documentation/javascript/tutorial) to show country coordinates (restcontries) on the google maps.

To navigate on the web page:
* Logo can be used as a button to go to the front page (as it used to be on the most of the web pages).
* On the country information page you can press on border countries to open information about them.

## Restcountries API
* https://restcountries.eu/rest/v2/all was used for the search function.
* https://restcountries.eu/rest/v2/region/{region} <Africa, Americas, Asia, Europe, Oceania> to get information about each region 
* https://restcountries.eu/rest/v2/alpha/{code} to get information about country, it wasn't necessary since all information about country could be gotten from https://restcountries.eu/rest/v2/region/, but since I wanted to make it possible to navigate to the border countries from the country information page. It was designed in such way to avoid the problem if the border country is located in another region.

## Google Maps JavaScript API
Unfortunately due to security reason I cannot post my API key publicly, if you have your key you can post it in `/src/app/app.module.ts` file
otherwise there will be error on the google maps: "Oops! Something went wrong."

## To run the project localy:
### You will need to install:
* NodeJS: https://nodejs.org/en/download/
* TypeScript: https://www.npmjs.com/package/typescript
* Angular CLI: https://cli.angular.io/

### How to run:
1. 	Download all files
2. 	Open directory in terminal
3. 	Run command `npm install`
4. 	Run command `ng serve -o`
5. 	The website should open in your browser automatically, but you can always open it by navigating to `http://localhost:4200/`. 


## Demo:
https://dry-tor-28046.herokuapp.com/

### Website is design to work both on desktop version and on mobile:
* Desktop version:

![desktop version](http://artiom.no/images/oslomet/screenshot/desktop.gif)
* Mobile version:

<img src="http://artiom.no/images/oslomet/screenshot/mobile.gif" height="500">
