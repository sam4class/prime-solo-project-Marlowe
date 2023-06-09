
# Lakeside App: View As a Mobile Site 

As our summer heats up, our lakes do too, and you must watch the water data throughout the summer to know which lakes are still available for swimming without getting you sick. This app was created to be a quick and easy way to inform you about the top Minneapolis swimming beaches and let you know which ones are healthy enough to swim in. 

## Lakeside Features
<ul>
  <li>A list of the top Minneapolis Beaches, labeled with both color and icons to show their status</li>
  <li>Clicking on the name of a lake gives you the water data for that lake</li>
  <li>An about page that tells about the app and gives you the link to Minneapolis Park and Recreation Board to get more information on how they collect the water data</li>
  <li>Sign-In and ability to customize your lake list to the lakes of your choosing</li>
  <li>While Signed-In, you can also make notes on the lakes throughout the season</li>
  <li>You can add more lakes to your list of lakes at any time</li>
</ul>

## Screen Shots of Lakeside
<br/>
<img width="400" src="public/images/lakeside1.png"><br/>
<img width="400" src="public/images/lakeside5.png"><br/>
<img width="400" src="public/images/lakeside2.png"><br/>
<img width="400" src="public/images/lakeside3.png"><br/>
<img width="400" src="public/images/lakeside4.png"><br/>
<br/>


## Built With
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>Express</li>
  <li>Passport</li>
  <li>PostgreSQL</li>
  <li>Material UI</li>
</ul>
  
## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [PostgresApp](https://postgresapp.com/)
- [Nodemon](https://nodemon.io/)

## Installation
<ol>
    <li>Use Postgres App to create a local Postgres instance</li>
    <li>Then use Postico to connect to your local Postgres</li>
    <li>Create a database named in Postico: "lakes_app_data"</li>
    <li>The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries</li>
    <li>Open up your editor of choice and run npm install</li>
    <li>Run npm run server in your terminal</li>
    <li>In another terminal: Run npm run client</li>
    <li>The npm run client command will open up a new browser tab for you!</li>
</ol>
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Development Setup Instructions

- `git clone git@github.com:sam4class/prime-solo-project-Marlowe.git`
- `cd prime-solo-project-Marlowe`
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, or if you create a secret with less than eight characters, or if you leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Acknowledgments
<ul>
  <li>Aquamarine Cohort at Prime Digital Academy</li>
  <li>Prime Instructors: Emma, Key & Kris</li>
</ul>


