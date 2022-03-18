# Habit client

I will form good habits and become their slave.
_Og Mandino_

The purpose of this app is twofold:

- To create an app that will allow me to add my existing (both positive and negative) and desired new habits, and to track my progress as I perform those habits on a daily basis.
- To provide a project that will allow me to further develop my programming skills to support my career change to software engineering.

This app aligns to the [Atomic Habits](https://jamesclear.com/atomic-habits) approach created by James Clear, and is intended for my personal consumption only.

# How to create a positive new habit (or stop an existing negative one)

## Existing feature set

Atomic habits provides an approach to creating good habits summarised [here](https://s3.amazonaws.com/jamesclear/Atomic+Habits/Habits+Cheat+Sheet.pdf). This habits app currently implements the following features of this approach.

- **Scorecard** The user can enter their current and desired new habits, and provide a positive, negative or neutral rating. Basic CRUD functionality will be implemented.

- **Application intention** The user can make a statement(s) about how they will implement that new habit (or stop a negative existing habit) in the form of “I will [BEHAVIOR] at [TIME] in [LOCATION].”

## Future feature set

- **Tracker** The establishment of a new habit involves performing that behaviour enough times for it to become muscle memory. The [tracker](https://s3.amazonaws.com/jamesclear/Atomic+Habits/Habit+Tracker.pdf) will allow the user to track when the habit was performed.

# Habits server

The client relies on a set of API endpoints exposed by the [habits server](https://github.com/davidcoutts23/habits-server), a rails app (API only) backed by a postgresql server that exists for the purpose of persisting user data and make that data available to the client. Most endpoints are authenticated using JWT.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

**Note: As of 18 March no tests exist which is bad. To be added**

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
