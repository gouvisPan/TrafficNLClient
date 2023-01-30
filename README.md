# TrafficNL

## Description 

A web application that displays information about the traffic situation in the Netherlands, including roadworks, speed radars and congestion. The app works in  conjunction with the coresponding server ( https://github.com/gouvisPan/TrafficNLServer ) which fetches all the data from the ANWB api and stores it in MongoDB.


## Features
- User can see information about varius event types, like roadworks, radars and congestion
- User can tweak visually the displaying data to match his/her needs  
- History data displaying option (for the past day)


## Technologies and Tools used
- Typescript,React and SCSS 
- Redux and Redux toolkit for data persistance throughout the various components of the App
- GoogleMaps API for the Map/Marker/Polyline integrations
- Axios for the API calls
- (NodeJS with Express and MongoDB -Mongoose- for the backend)

---

## Screenshots


## How to
### NodeJS is a prerequisite, install latest NodeJS here : https://nodejs.org/en/download/

### Instructions
1) Clone git repo: git clone https://github.com/gouvisPan/TrafficNLClient.git

2) Go to the project directory: cd TrafficNLClient

3) Install dependencies: npm install
 
4) Start the backend server ( https://github.com/gouvisPan/TrafficNLServer )

5) Start the app: npm start

note: The proxy is set to http://localhost:3000/.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
