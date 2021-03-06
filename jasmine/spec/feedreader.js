/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has a defined and non-empty url', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
        expect(feed.url).not.toBe('');
      });
    });
    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a defined and non-empty name', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
        expect(feed.name).not.toBe('');
      });
    });
  });

  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function() {
    /* A test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('has elements hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });

    /* A test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('toggles display when menu icon is clicked', function() {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBeFalsy();
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });
  });


  /* Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    beforeEach(function(done) {
      //loadFeed function makes an API call to the url with the index in the argument to load feeds from
      loadFeed(0, function() {
        //used done in the function body to signal that it is an asynchronous function
        done();
      });
    });
    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    it('atleast one entry on calling loadFeed function', function() {
      //expecting that atleast 1 entry is returned as a result of the API call
      let firstFeed = $('.feed').find('.entry-link')[0];
      let firstEntry = $(firstFeed).find('.entry');
      let entryTitle = $(firstEntry).find('h2');
      expect(firstEntry).toBeDefined();
      //expecting the entry to have some text content
      expect(entryTitle).toBeDefined();
      expect(entryTitle.textContent).not.toBe('');
    });
  });


  /* Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    var lastFeed1, lastFeed2;
    beforeEach(function(done) {
      loadFeed(0, function() {
        //assigning the first feed from the result set of the API call to the url with index 0
        lastFeed1 = $('.feed').find('.entry-link')[0];
        loadFeed(1, function() {
          //assigning the first feed from the result set of the API call to the url with index 1
          lastFeed2 = $('.feed').find('.entry-link')[0];
          done();
        });
      });
    });

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    it('content changes on calling loadFeed function', function() {
      expect(lastFeed1).toBeDefined();
      expect(lastFeed2).toBeDefined();
      //expecting the result-sets from the 2 API calls to different urls to differ, which means content is refreshed
      expect(lastFeed1.href).not.toBe(lastFeed2.href);

    });
  });

}());
