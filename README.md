# TeamProfileGenerator
Node.js command-line application that takes in info about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.


## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation
What's needed to run:
```
node.js
npm init
npm i inquirer
npm i jest
```

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
This project is covered under the MIT license.

## Contributing
Harrison Kidd

## Example of Output
![Example Image](./images/TeamGenEx.png)

## Demo Video
https://drive.google.com/file/d/1S-_xLYTUoIT5cF_461Ki3leCLEM24MCO/view?usp=sharing

## Questions
Contact me with any questions here: [harrisonakidd@gmail.com](mailto:harrisonakidd@gmail.com)
