# Pokémon Drum Machine

A fun, Pokémon-themed drum machine built with React and TypeScript. This project was created to fulfill the FreeCodeCamp Front End Libraries certification requirements.

## Features

- Interactive drum pads that can be triggered with mouse clicks or keyboard keys
- Pokémon-themed visual design
- Sound playback when pads are activated
- Display showing the currently played sound
- Fully responsive design that works on mobile and desktop

## Technologies Used

- React
- TypeScript
- CSS
- HTML5 Audio

## User Stories Fulfilled

1. An outer container with id="drum-machine" that contains all other elements
2. An element with id="display" within the drum machine
3. Nine clickable drum pad elements, each with:
   - class name "drum-pad"
   - unique id
   - inner text corresponding to one of the keys (Q, W, E, A, S, D, Z, X, C)
4. Each drum pad has an HTML5 audio element with:
   - class name "clip"
   - id corresponding to the inner text of its parent
   - src attribute pointing to an audio clip
5. Audio clips play when drum pads are clicked
6. Audio clips play when the corresponding key is pressed
7. Display shows a string describing the associated audio clip when a drum pad is triggered

## How to Run

1. Clone this repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
5. Open http://localhost:3000 in your browser

## Development Notes

This project was bootstrapped with Create React App and uses TypeScript for type safety.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
