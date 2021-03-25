# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Jungah Ahn**

Time spent: **7** hours spent in total (over 3 days)

Link to project: (https://glitch.com/edit/#!/chisel-adventurous-crustacean?path=README.md%3A10%3A0)

## Required Functionality

The following **required** functionality is complete:

- [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [X] "Start" button toggles between "Start" and "Stop" when clicked.
- [X] Game buttons each light up and play a sound when clicked.
- [X] Computer plays back sequence of clues including sound and visual cue for each button
- [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [X] User wins the game after guessing a complete pattern
- [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [X] Buttons use a pitch (frequency) other than the ones in the tutorial
- [X] More than 4 functional game buttons
- [X] Playback speeds up on each turn
- [X] Computer picks a different pattern each time the game is played
- [X] Player only loses after 3 mistakes (instead of on the first mistake)
- [X] Game button appearance change goes beyond color (e.g. add an image)
- [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Player can choose different levels of difficulty
- [X] Player can play the game again after winning or losing

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

In addition to reading some of the resources recommended in the pre-work such as:
-  CSS Reference - A free visual guide to CSS
- CSS Web Safe Fonts (w3schools.com)
- CSS Selectors Reference (w3schools.com)
- JavaScript Variable Types - Techotopia
- JavaScript Events (w3schools.com)
- Creating Sounds with AudioContext < JavaScript | The Art of Web (the-art-of-web.com)
- https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
- https://programminghead.com/how-to-play-audio-in-html-using-javascript/

I also read from these sites and sources to help me complete many of the optional features:
- W3schools Pop-Ups: https://www.w3schools.com/js/js_popup.asp
- W3schools Arrays: https://www.w3schools.com/jsref/jsref_obj_array.asp
- CSS Colors: https://www.quackit.com/css/css_color_codes.cfm
- StackOverflow Images in Buttons: https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
- StackOverflow Sounds in Buttons: https://stackoverflow.com/questions/32913026/click-a-button-to-play-sound-on-javascript/39367711

Lastly, while doing this project I wanted to learn more about web development and found this person's podcast: 
- Start Here: Web Development by Dain Miller

While this resource didn't help me complete the project, it's an interesting place to learn about how to become a web developer, what books/media to consume to learn more about web development, and programming/careers in general. 😊

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

The further along I went building out optional/additional features, the less instruction and guidance I had from the pre-work README. For example, I really wanted to have the option of different modes of difficulty with easy, medium, hard, (and the secret message mode!) but by adding this feature I ran into many challenges such as figuring out how to hide the extra buttons when a player wants to choose a less difficult mode after winning or losing. I overcame this challenge by talking through my code out loud in an attempt to understand the logic of the code and figure out where I would need to hide the extra buttons. By reading the startGame, loseGame, and winGame function logic out loud, I realized that I should hide all the buttons after winning/losing instead of every time startGame is called (script.js 192 and 204). I learned this method of saying my code out loud to find and fix problems in my English course which required me to write a lot of essays. When I was editing my essays, I would use this method to find grammatical errors and see if the flow of the essay was working. I realized this same method could be applied to my coding assignments.

I had an additional challenge while hiding the buttons, because I was having trouble implementing a for loop instead of manually hiding all 28 of them. At first I was trying to put document.getElementById("button"+i.toString()).classList.add("hidden"); in a for loop, but I kept getting an error that I couldn't add strings inside of getElementId. I played around with parentheses placement and even tried using .concat instead of the +, but those things didn't work. After googling "how to hide multiple buttons" (yes, very creative I know. I tried googling some variations of that too but they didn't come up with very helpful results either) and going down StackOverflow rabbit holes, I decided to take a quick snack break and step away from my computer. I did this so I could come back to my project with a refreshed mind and hopefully see the problem with a new perspective that I didn't have before. And it worked! I realized that if I couldn't add the strings within the getElementId statement, I could just create the new button id outside of the function and set that to a variable which I would then put in getElementId, which is exactly what I did in script.js 28-37.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

Going through all the steps of this pre-work project has given me an entirely different view of projects and web development than I had before. I always wanted to build a project, but I never knew where to start. This pre-work project has shown me the different stages of building a project including the vision/idea phase (which wasn't open to creativity since every applicant does the same project), choosing the tech stack for your project (also not open to creativity because the IDE and languages were already set), starting with the simple features such as the title and "button shells" without their functionality, adding functionality, and progressively making the game more complex by adding additional features. Some thoughts and questions I had while I was completing my submission were:
  - How do developers choose which tools, languages, and technology to use for their product/projects, and why?
  - What other projects can I build in Glitch, and how complex can a project get? 
  - I got a small taste of using the inspect element to look at the console, what other powerful tools and tricks are out there to help me during development? 
  - I have this working game in Glitch, what happens to it now? How do people access it? Can I display it in other places besides Github?
 - What are some great resources to learn more about web development?
 - I feel so powerful after building this game, what CAN’T I build? What’s stopping me from making a bunch of cool apps right now?! 👀

4) If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had extra time, I would spend it enhancing the appearance of the game to look aesthetically pleasing or even have themed versions. This would involve me going deeper into resources on CSS to learn the different capabilities and cool features there are and testing out a bunch of different things until I create something I like. 
 
Additionally, I noticed that a player can click on the buttons before the full pattern has played. I would spend time fixing this because a player can essentially “cheat” by clicking the button right after it plays so there isn’t any memorizing involved. 

My code currently has a set number of buttons for each mode. Easy has 4 buttons, medium has 9, and hard has 16. If I had more time, I would like to create another mode that allows the user to customize how many buttons they want on the screen and how many turns they want in the pattern. This would most likely involve writing a generateButton function that would create another button element, assign random colors, and adjust the speed variable depending on how many turns the player wanted so it didn’t speed up too fast or too slow. 

Lastly, if I had more time I would fully and correctly implement my secret message mode so that you could play the game regularly with the new buttons. Right now the game doesn’t play the audio as a pattern like it does with the other modes, because the audio is different from the color button tones. However, if you click on the buttons it does successfully “light up” and play the correct audio! Because I don’t have enough time to fully implement this mode, I have temporary code that sets the amount of strikes to 12 if you click secret message mode to allow you to click all the buttons and hear the secret message. 



## License

    Copyright Jungah Ahn

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
