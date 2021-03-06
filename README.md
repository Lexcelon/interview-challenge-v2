# Lexcelon Programing Assignment

The goal of this assignment is to test your problem-solving skills. We want to throw you into an unfamiliar situation and see how you are able to work independently, solving problems you may not always be familiar with.

You will be evaluated on the following:
- Ability to problem solve and use any resources available to you.
- Frequent and descriptive Git commits.
- Clean, consistent, functional, and commented code.

We do not want to take a ton of your time, so the tasks should be fairly straightforward. Try not to overly complicate them. Let us know if you're completely stumped-- sometimes computers can be annoying.

## Overview

Within this repository, there are two main folders for you: [client/](client) and [server/](server). The client/ folder contains a React website. The server/ project contains a NodeJS server. The projects are already set up with most everything you will need in order to run them. When completed, the React client will make a request to the NodeJS server and will receive a list of US states (along with some accompanying information). The React client will then display that data on a table. See the below image for an example!

![UI Example](UI%20Example.png)

## Tasks

### Task 1: Try to run both projects.
Fork this repository (top right of page) into your own GitHub repo. Using a terminal, putty, or something similar, clone the repo to your computer and run the React client project and the NodeJS server project separately. Check out the READMEs in each project for more information on how to run them. The client project should not have any errors when you first run it. Your server project should say that you don't have your env file for the current environment and you have a database connection issue, but we'll fix that in the next step!

### Task 2: Create a MySQL server on your local machine.
Follow the installation guide [here](https://dev.mysql.com/downloads/mysql/) to install MySQL. You'll need MySQL server as well as MySQL Workbench so you can view your data. Once you've installed and set up your local database, create a new schema called lexcelon_interview_challenge. Once set up, use the credentials you used during setup of your local database to populate an environment variables configuration file. There is an example configuration file provided in server/config/.env.example. Duplicate this file in the same folder, update your database password, and name it .env.

### Task 3: Create a Sequelize Model to hold state statistical information.
Sequelize is a tool we use to create and manage our database schema. In the server/models folder, create a Sequelize model called State (Sequelize model = database table). There is an example model provided in the folder to help you familiarize yourself with Sequelize. Make sure to export the model inside server/models/index.js just as we exported the other model. To see the list of fields (table columns) you need, look at the seed data for the class, seeders/000-demo-states.js.

Note: Behind the scene, Sequelize will convert your fields (column names) to snake_case. Use camalCase when creating your model. You may notice in the seeder file that they are in snake_case-- that is just how the seeder files work.

### Task 4: Create a server route that returns a list of US states and supporting information.
In the server/routes/index.js file, you will find a TODO comment where you should create a GET route with the path '/states'. Make the route return all data from the model you created (`State`).

### Task 5: Customize the header with some Lexcelon flair.
The UI is looking a little plain to me. Can you make the blue header Lexcelon green (`const LEXCELON_GREEN`) instead? Could you also add the Lexcelon logo (found in client/src/images/LexcelonLogo.png) to the header? See target image above for example.

### Task 6: Show the state 'Percentage' column as a percentage instead of a decimal.
Currently, the values in the 'Percentage' column of the table are shown as 0.####. Make the values show up as a percentage instead (max 2 decimal places). See target image above for example.

## Helpful Links
Check out each README ([client](client) and [server](server)) for helpful links to more documentation!
