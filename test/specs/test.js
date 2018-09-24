const assert = require('assert');

describe('Home Page', function() {
    it('should have the right title', function () {
        browser.url('/');
        let title = browser.getTitle();
        assert.equal(title, 'Madison Island');
        let screenshot = browser.saveScreenshot('./test.png');
    });
});