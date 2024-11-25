# Book of Beasts
Book of Beasts is a tool used for creating monsters for the game Dungeons & Dragons by querying the ChatGPT-4o model using the OpenAI API. The goal of the site is to minimize the preparation for D&D campaigns by allowing you to make enemies live while hosting the campaign. The other goal was simply to gain experience in creating my own website from scratch and to learn how to use the OpenAI API and ChatGPT programmatically, as this is something that piqued my interest.

Book of Beasts is still being developed and the site is not yet live, but the current code is all accessible here with the new, finalized UI coming soon once it is finished and ready to be hooked up to the backend. The current version of the site has the ChatGPT query functionality working as intended, and I am currently working on the web design for the site's UI. Here are some images of the UI in development:

![alt text](https://github.com/djkraft16/book_of_beasts/blob/resources/Desktop.png?raw=true) ![alt text](https://github.com/djkraft16/book_of_beasts/blob/resources/Phone.png?raw=true)

The backend was made using the ReactJS framework in tandem with the OpenAI API. The OpenAI API allows the site to submit queries to the ChatGPT-4o model and take a JSON output used to display information on UI cards once it's parsed. The input from the user is a description (or image - coming soon) of the monster which is then fed to the ChatGPT model which outputs the monster's stats, description, and image (also coming soon) in JSON format so that it can be easily parsed and put in the proper locations on the UI cards displayed to the user.

The finished site will also have image functionality. This will likely use one of OpenAI's DALL-E image models to interpret images entered by the user and to generate its own images based on the user's text description of their monster.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
