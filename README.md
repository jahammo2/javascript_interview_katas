# JavaScript Interview Katas

## How To Use

###### 1 - Git clone this repository
###### 2 - cd into the Kata of your choice
```
$ cd coin_changer
```
###### 3 - Run Gulp
```
$ gulp
```
###### 4 - Go to your browser and open jas-test.html
```
/coin_changer/jas-test.html
```
You'll see the failing tests. The first failing test should have this error:
```
TypeError: app.createChange is not a function
```
###### 5 - Have interviewee make JavaScript code changes in src/js/app.js
```
/coin_changer/src/js/app.js
```
This code will change that get the first test to pass:
```
app.createChange = function (num) {
 return [];
}
```
###### 6 - Refresh the browser to see if the new code got the tests to pass
