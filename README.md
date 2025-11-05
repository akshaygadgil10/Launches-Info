
> ### Launcher Info React JS Application


### [Demo]([https://launches-records.herokuapp.com](https://akshaygadgil10.github.io/Launches-Info/)/)&nbsp;&nbsp;&nbsp;&nbsp;

## Getting started

You can view a live demo over at https://launches-records.herokuapp.com/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

## Functionality overview

The example application is a used to view rocke launches that uses API from : https://api.spacexdata.com/v3/launches

**General functionality:**

- Cards containing info about Rockets in main screen.
- Each card contain 3 options
    - Link to wikipedia
    - Youtube Link
    - View Icon : To see details information
- Navbar 
    - Contains search functionality to search rocket name
    - Date Range with options : Last Week, Last Month, Last Year
    - Launch status with options :  Failure and Success
    - Checkbox for upcoming
- To use filter or search you must click on ok button.   

## Libraries used

- axios for API data 
- redux toolkit as Redux store managment
- material UI v4 as UI library
