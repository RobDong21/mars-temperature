# Temperature on planet Mars

Deployed URL: https://robertdong-mars-temperature.netlify.app/

Web app scaffolded from [create-react-app ](https://breakdance.github.io/breakdance/)

Commands:
- `yarn start` to run the web app locally
- `yarn build` to build production bundle
- `yarn test` to run unit tests

---

##  Code walkthrough:

Written with 
- scalable folder structure
- responsiveness web design
- unit test

#### Package added:
- `styled-components` for handling css in js
- `prop-types` for typechecking against proptypes
- `enzyme` as React testing utilities

##### robots.txt
Edited to ensure this temporary web app to not be crawled by search engine bot

#### CSS 
- Made use of reset css to remove unconsistency across browser ( https://meyerweb.com/eric/tools/css/reset/ )
- Added media query for a responsive web app with mobile first approach. Font size is scaling as the viewport change.

#### JS
- Favor name export to enforce es6 import/export to keep the same naming.
- Define constant file for font size, spacing and breakpoint for consistency across the app

#### Folder structure
- Grouped files by feature for easy file traversal
- Component folder contains all react component
- Design folder contains the design system use for this web app: font, spacing, typography


---

## Take home exercise instructions:
### Background:

A new rover is heading to Mars and is expected to land around Feb next year. As a travel focused company, we want to prepare travelers for their arrival to their destination.


### Task:

Create a React.JS based website that shows, in big bold numbers, the latest known temperature on Mars. Note: I was told that the robot only understands the metric system.


