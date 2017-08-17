
APPLICATION FUNCTIONALITY

Login - Access the website by logging in with a 'Google' account
Logout - Redirects to the home page

Pages:
Home Page - Landing page for the application
Top Listings -
	 Displays postings by all users(Fetches all data from the Firebase Database)
	 Filter results by category, condition or price
	 Search for listings using the search bar
	 Click on a listing redirects to a page with listing details
 
My Listings -
	 Displays postings made by the logged-in users(Fetches data from the Firebase Database and filters by user ID)
	 Click on a listing redirects to a page with listing details

Listing Deatils page-
	View listing details
	Edit and Delete button to modify user listings

Post and Ad-
	The form to add a new listing

	
	
STEPS TO RUN THE APPLICATION

1)Use Command Prompt:
	cd listings 
	npm install 
	ng serve  
	
2)Navigate to `http://localhost:4200/`


 
STEPS TO TEST THE FUNCTIONALITY OF THE APPLICATION:
 
	Application security is integrated with google account.
	Allows login with multiple accounts to create the listings.
	"All listings" will display the listings created by all the users.
	"My Listings" will display the listings created by the logged in user.
	User can add a new listing or edit/delete existing posts
	
	NOTE: Please use the test credentials if needed :
	email : testtestproject123@gmail.com  
	password: 123password 


BUGS:
 
Clearing the condition and price filters once checked(TEMPORARY FIX - Use reset button)
Authentication only with google
 
 
 ----------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------------------------------------------------------------------
 
 
# Listings

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
