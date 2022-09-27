# Work Day Scheduler

## Links
- Live Site URL: [live site](https://jon-ledo.github.io/work-day-scheduler-API/)
- Repo: [repo](https://github.com/Jon-Ledo/work-day-scheduler-API)
- [link to moment.js](https://momentjs.com/)

## Tech Used
- Bootstrap
- jQuery
- API [link to moment.js](https://momentjs.com/)

## Description
A simple daily calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery. Events are saved to localStorage, and retreived when the page is reloaded. Events are only loaded if they match the current date. 

Time blocks are colour coded:
- Grey, event is in the past
- Red, event corresponds to the current hour and should be focused on now
- Green, event is coming up in the near future

The HTML is made up of components from Bootstrap and uses the relevant CSS classes and stylings as well. This is my first project using bootstrap, and it was a great experience that really helps speed up development, especially in regards to making components and layouts easily responsive. 

The moment.js library is used to work with date and time, easily formatting date variables compared to the native JavaScript Date object. 

## Usage
Simply go to the time block you wish to enter a task into, click into the textarea, type and click the save icon inside the corresponding blue box. A small modal will appear telling you the activity was added and saved, and shortly disappear (or you can exit it faster by clicking the 'X' icon).

Continue to do this until satisfied, and the next time upon arriving on the page, all tasks are still visible on the page. When a new day begins, the date at the top of the page will change, and all text fields will be blank. 

## Preview
The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Credits
- [Moment.js](https://momentjs.com/) library to format date variables 

