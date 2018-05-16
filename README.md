Full Stack Development > Lab: jQuery Drills part 1

Still Working  All Finished
Simple jQuery Drills
Objective
Practice using the fundamentals of jQuery that were explored in lecture.

Setup
Create a new project folder and connect it to a GitHub repository. Initialize your project with a README with a brief description of the purpose of this assignment, along with the title "jQuery Drills".
Create an index.html file and an app.js file and link the two together.
Create a script tag in the index.html and link to the jQuery CDN.
Tasks
In app.js, make sure all the HTML has loaded before using jQuery.
Create an input with an id in the index.html called "Submit".
In app.js select the element by the id and add a click event that will alert a message in the browser when the button is clicked.
In the index.html, create a form element with an input field and the button you created. Add a type attribute to the button and assign it to "submit".
In app.js when the form is submitted, alert the value of the text input field.
If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled.
Create a div element and append it to the body.
When the user types in the input field and clicks submit, append the text in an h2 element to the div
When the user mouses over the h2 element, assign it a new background color and border radius.
Great job! Now, delete the code for creating the h2 and we are going to work on creating a list
Create an unordered list and append it to the body
When the user submits the form, append the text as list item to the unordered list
When the user clicks on the li element, assign it a random color.
When the user double clicks on the list, remove the item that was clicked on.
Hints
jQuery on method: http://api.jquery.com/on/

jQuery click method: https://api.jquery.com/click/

Math.random() can be used to generate a random number

Submission
Commit your changes and push to your GitHub profile.

part 2

Full Stack Development > Lab: Manipulating HTML

Still Working  All Finished
Manipulating HTML using DOM & jQuery
Covalence

Info
This lab asks you to perform various tasks, first using only the DOM, and then using only JQuery.
Your project folder should consist of 2 folders, DOM and JQuery, each containing an index.html, JS file, and any CSS files.
You should complete the tasks first in the DOM folder using only the DOM, and then complete the same tasks again in the JQuery folder using only JQuery.
Number each example in your html page to correspond with the objective numbers below.

Objectives
Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.
Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
Resources (click to download):
Lab Assignment: jQuery- Manipulating HTML.zip


part 3

Full Stack Development > Lab: Just My Type

Still Working  All Finished
Just My Type
Covalence

Info
You are going to build a typing game
This lab uses an older version of the Bootstrap UI Framework. It is already imported for you.
You will be using JQuery to complete this lab
Make sure you import JQuery into your html file
You will also need to import your own JavaScript file that you create
Objectives
(ALREADY COMPLETE) Create two keyboards (include space bar):
First keyboard, lowercase keys, numbers and special characters accessed without shift
Second, keys accessed while holding down the shift key
Exclude keys like tab, delete, shift, command, ctl, caps, option/alt & enter
The lowercase keyboard should be the only one displayed when the page loads. Write code to hide the uppercase keyboard when the page loads.
Write jQuery code to set up keyboard toggling:
While the shift key is held down, hide the lowercase keyboard and show the uppercase one
When the shift key is released, show the lowercase keyboard and hide the uppercase one
When keys are pressed, they should be highlighted in the browser.
*Hint: the letters should be matched with the corresponding ascii code. The id value of the key in the html corresponds to the ASCII character code that you can access in the keyboard listener. For example, ascii value 65 is A, and 97 is a. Search for ASCII character chart to see a complete list of codes. Ask yourself: How do I determine which key was pressed on the keyboard when using a jQuery event listener?
The sentences in the provided array should be displayed at the top of the page one sentence at a time. Once the sentence has been completed, the next in line should appear. There is already a div with id="sentence" in your html file. This is where you will display each sentence one at a time.
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
You should highlight the currently expected letter in the on-screen sentence that should be typed next
You can use the div with id="yellow-block" and nudge it along a fixed number of pixels if you'd like
Remember to reset it back to the beginning of the sentence when you move to the next sentence
If you can think of another way of doing this, then go for it!
Also display the currently expected letter in the center (div id="target-letter" provided for you)
For each sentence, show a visual "log" of right/wrong per character by inserting one of the following into the div with id="feedback":
If the correct key is pressed, indicate with a green check.
If the correct key is not pressed, indicate with a red X.
At the end of each sentence, clear out the feedback div
The user's words per minute should be calculated and displayed on the screen when you reach the end of the last sentence.
Can be calculated by: numberOfWords / minutes - 2 * numberOfMistakes
For number of words, you can just count how many words make up the sentences you were given and hard code that value.
There should be a delay so the user can see the score. Then ask the user whether they would like to play again.
If confirmed yes, reset the game back to the start.
If no, leave as is.
Hints
To succeed in this exercise, you need to keep track of:
Which sentence the user is on
Which letter of that sentence the user is on
You will examine each keystroke and compare it against the expected letter of the sentence. When you reach the end of a sentence, move on to the next one if available.
For the feedback green checks and red X, you may use Bootstrap glyphicons for 'ok' and 'remove'.
While this exercise definitely seems like it should use loops (and perhaps even a nested loop), you should not use a loop at all.
Loops are automatic and very fast
Think logically about how to move through the sentence array, and through each sentence character-by-character.
Let user input/action be the "driving force" of your program.
Resources (click to download):
Lab Assignment: jQuery- Just My Type.zip