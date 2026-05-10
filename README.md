# Getting Started with Create React App

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

## GitHub CI/CD

This repo includes a GitHub Actions workflow at [.github/workflows/ci-cd.yml](/D:/Work/Repos/DeepCleanz%20-%20ui/ui/.github/workflows/ci-cd.yml) that:

- runs on pull requests to `main`
- installs dependencies with `npm ci`
- runs the test suite
- builds the production app
- deploys the generated `build/` folder to a remote server on pushes to `main`

### Required GitHub secrets

Add these repository secrets before enabling deployment:

- `DEPLOY_HOST`: remote server hostname or IP
- `DEPLOY_USER`: SSH username
- `DEPLOY_SSH_PRIVATE_KEY`: private SSH key used by GitHub Actions
- `DEPLOY_PATH`: target directory on the remote server where static files should be published

### Optional GitHub secrets and variables

- `DEPLOY_PORT`: custom SSH port, defaults to `22`
- `DEPLOY_POST_COMMAND`: command to run on the server after upload, for example `sudo systemctl reload nginx`
- repository variable `REACT_APP_API_BASE_URL`: production API base URL injected at build time

This workflow is currently configured to skip SSH host key verification during deploy. That removes the need for `DEPLOY_KNOWN_HOSTS`, but it is less secure than verifying the server fingerprint.

### Typical server setup

Point your web server document root to the same directory as `DEPLOY_PATH`, or have your server serve files from that directory. For an Nginx-based static site, deployment often looks like:

- `DEPLOY_PATH=/var/www/deepcleanz`
- `DEPLOY_POST_COMMAND=sudo systemctl reload nginx`

If you want zero-downtime releases with a symlink-based deploy layout, we can tighten this workflow further once you share the target server setup.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
