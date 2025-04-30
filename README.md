# React + Vite

![Screenshot of App](./src/assets/Screenshot%202025-04-30%20at%209.29.50 AM.png)

## Project Title

* Koala Tea Control Final Project *
This project takes a database of tea subscriptions and allows an admin to have easy access and view to them all. It includes a search feature allowing them to look for a variety of traits, including all subscriptions by a single customer, popular teas, subscription status, and more.

## Systems

The FE of this is handled in React, the normal version that we are supposed to use in class (I know, I should put the actual version, I will for job projects I promise). It uses many .jsx files, as well as some JavaScript and .css. 
It runs on Vite. 

## Getting Started

- Clone the repo
- npm install
- to start the server, use npm run dev
- Localhost URL (http://localhost:5173)

## Project Structure

- App in the parent and hold the main Route responsibilities. The children components were separated from here with TeaSubscriptionContainer and TeaSubscriptionDetails. 
- TeaSubscriptionDetails holds the details for a single subscription through a BE fetch call made within, using the Params in the Route.
- TeaSubscriptionContainer hold the child component TeaSubscriptionCard, which is able to go through all existing subscriptions and display a quick reference card on the main page. 
- A services file was used to house all the fetch requests for cleaner code.