
Choice
-------

<div align="center">

  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

</div>

### Powered by 

 * [React Native](https://facebook.github.io/react-native/docs/getting-started.html) - For cross platform, native application creation
 * [React Navigation](https://reactnavigation.org/) - For easy, stylish navigation
 * [Native Base](https://docs.nativebase.io/) - Reusable components
 * [Redux](https://github.com/reactjs/redux) - For consistent state management
 * [(Native) eCharts](https://github.com/somonus/react-native-echarts) - For advanced data visualisation
 * [Create React Native App](https://github.com/react-community/create-react-native-app) - For easy bootstrap and testing
 * And others - see package.json :)

Get started
-------

### 1. System requirements

 * Globally installed [node](https://nodejs.org/en/)
 * Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)
 * OPTIONAL - YARN installed globally
 * OPTIONAL - xCode installed (iOS only - needed if you want to run iOS emulator locally)
 * OPTIONAL - Android Studio (Needed if you want to run Android emulator locally - other software may be needed depending on OS such as virtual box et al.)

### 2. Mobile requirements

 * For testing - install the Expo app from the Play or App store.

### 3. Installation

On the command prompt run the following commands

```
npm install
OR
yarn install
```

### Run on iOS

 * Opt #1:
 	* Run `npm start` in your terminal
	* use the s key in the console to send a code to your Expo app on your phone
 * Opt #2:
	* Run `npm run ios` in your terminal to start an emulator

### Run on Android

  * Opt #1:
	* Run `npm start` in your terminal
	* Scan the QR code in your Expo app
  * Opt #2:
	* Run `npm run android` in your terminal to start and emulator

Other Commands
-------

```
yarn eject - eject from CRNA 
yarn test - run tests & lint the src folder
yarn lint - lint the src folder
```

Structure
-------

### File structure

```
./src
|____boot - startup boilerplate et al.
|____containers - anything connected to redux
|____components - anything not connected to redux
|____theme - style items including native-base custom styles
|____scripts - custom scripts / fragments
|____redux - global redux stuff
```

### Project boot sequence / entry point

Instead of leaving it for people to work out - the entry point is as follows:

```
./App.js - This is what NPM / Yarn will run and is the [CRNA](https://github.com/react-community/create-react-native-app) entry point
./src/boot/index.js - Intermediate file
./src/boot/setup.js - Performs global app setup and async load of resources to prevent massive bundle size / slow initial load + hydrate the redux store as needed
./src/boot/navigation.js - Defines the various navigation structures
```

Coding style
-------

### Container structure

It is assumed that a container is connected to the redux store, otherwise it should be a component. It is possible for a container to not define any reducers or actions but instead of the global reducers or actions that are located in ./src/redux

 * It should define a **screen** or **screens** that are located in a sub folder called **screens** which perform data display through props
 * It may define a **reducer** and **action** set, if it does, they should be located along side the containers's index.js file
 * It may define a specific **style file**, if it does, the index.js file should be in the same place as the container's index.js file in a folder called styles

### Component structure

* the same as a container but with no reducers and actions


High level navigation structure
-------

* Navigation
  * Splash ***leads to***
  * QuestionController  ***leads to***
  * DataController


High level container structure with redux hooks
-------

***Note: This project uses two 'global' reducer and action sets to store, update and read flat information in Redux, the defenitions of these are in the redux directory***

* **Splash** - Loading screen
* **QuestionController** - Handles all swipeable cards - ``updates dataStoreMulti 'swipedAnswers'``
* **DataExplorer** - Hooks into answers - ``reads dataStoreMulti 'swipedAnswers'``
* **UniversityTab** - Hooks into filters - ``reads dataStoreSingle 'TBC'``
* **CourseTab** - Hooks into filters - ``reads dataStoreSingle 'TBC'``

Contact
-------

If you have a specific feature request or find a bug, [please open a GitHub issue](https://github.com/iamacup/choice/issues/new). We encourage you to fork these docs for local reference and happily accept pull requests with improvements.

Conduct
-------

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/iamacup/choice/blob/master/CONDUCT.md). By participating in discussions about this project, you agree to abide by these terms.

