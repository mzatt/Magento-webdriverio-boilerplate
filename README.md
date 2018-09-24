# Magento-Webdriver-Boilerplate
Simple boilerplate to start frontend testing using WebdriverIo and mocha.

## Prerequisites
* Download latest selenium standalone server<br/>
```$ curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar```
* Download the latest version geckodriver for your environment and unpack it in your project directory<br/>
  ```$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz```
* Start selenium standalone server<br/>
  ```$ java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar```

Full documentation provided [here](http://webdriver.io/guide.html) 

Usage:
* Clone repo
* cd repo/ && npm i
* tests are placed under ```./test/specs/``` with a sample test included. Assumes default Magento 1.9 with sample data.
* package includes simple/sane webdriver default config, you can create a new one by running ```npm run init```
* run tests with ```npm run runner```, this will run all tests in the specified directory. 
