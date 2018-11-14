## Feed Reader Testing

With this project an attempt to test an web-page which loads feeds using the Google Feed Reader API. The API needs the url from which to load the feeds from. The tests verify the default state of the page, menus, feed content refresh etc.


## Instructions to run the project
Clone this repository into a folder say 'x' and cd into 'x'. The tests will be under 'x/jasmine/spec/feedreader.js' Immediately within the folder 'x' open index.html using a browser application such as Google Chrome. The results of the test will be loaded on this html file (to the very bottom,below the feeds).

## About the solution
1. Test checking that feeds and subsequently (url, name) are defined: Used the toBeDefined property of Jasmine and used forEach to loop   through each feed.
2. Test checking the hamburger menu: Used the toBeFalsy, toBeTruthy properties of jasmine and used $().hasClass property in jquery.
3. Test checking the initial asynchronous loadfeed: Used the done() function in jasmine in beforeEach to signal that loadFeed function has completed execution. Similarly used done in the call-back of 'it' to signal the framework that the test relies on the completion of beforeEach.
4. Test checking feed content is refreshed: Used the done() function in jasmine in beforeEach twice (one after of each loadFeed call), to signal that loadFeed function has completed execution 2 times (each with a different url to load feeds from). Similarly used done in the call-back of 'it' to signal the framework that the test relies on the completion of the 2 loadFeed calls in beforeEach.
