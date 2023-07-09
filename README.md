# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person
- See error messages or error states in the UI when inputing ```0``` in the "Number of People" input or only ```.``` in the "Custom tip" and "Bill" inputs
- Navigate through the app with just a keyboard for accessibility

### Screenshot

![Desktop design preview for the Tip calculator app coding challenge](./screenshots/large-viewport.png)

### Links

- Live Site URL: [https://erickson-tip-calculator-app.netlify.app/](https://erickson-tip-calculator-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- CSS Grid
- [Open Graph](https://ogp.me/) - Internet protocol
- [React](https://react.dev/) - JS library
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

- Implementing my first React hook: useState
- The technique of lifting state up for the purpose of sharing state across components
- Using Open Graph to provide rich previews when the website URL is shared on social networks
- The ```inputMode``` attribute that allows a browser to display an appropriate virtual keyboard.
- Deeper understand and importance of accessibility
    • Some key accessibility features in this project are:
    1. Being able to navigate the app with just a keyboard
    2. Using ```visuallyhidden``` for decorative icons to so screen readers can skip them
    3. Sufficient color contrast 


Before starting this project, I didn't expect to go as deep as I actually did. Through exploring essential React concepts, implementing Open Graph for captivating social network previews, and enhancing the app's accessibility, this project opened the door for me to explore many new ideas.


### Continued development

This project really highlighted the importance of user experience and accessibility that I look to carry to future projects. In prior projects, I did not put as much emphasis as I could have on accessibility, like being able to navigate the site with only a keyboard. Focusing more on the mobile user experience is something I always strive to improve on. Adding ```inputMode``` into your site is something that I would argue it creates a noticablly seamless mobile user experience. For instance, if a user is clicking into an input box where they're expecting to just type integers, but the app opens to the default ABC keyboard instead of the numeric keyboard, it creates a very cumbersome experience for the user.

### Useful resources

- [Deque University](https://dequeuniversity.com/rules/axe/4.6/color-contrast) - I found this resource as I was testing accessibility of the app with Google Lighthouse. This helped me tweak my colors to achieve sufficient contrast to meet the WCAG 2 AAA contrast ratio threshold. It's a great resource for anyone looking to make their websites more accessible.
- [freeCodeCamp/what-is-open-graph](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/#what-is-open-graph) - This is an amazing article from freeCodeCamp that helped me learn how to include Open Graph with my project. I'd recommend it to anyone looking to have rich previews when sharing their project URLs on social media.


## Author

- Website - [Zowie Erickson](https://github.com/zowieerickson)
- Frontend Mentor - [@zowieerickson](https://www.frontendmentor.io/profile/zowieerickson)
- Twitter - [@ZowieErickson](https://www.twitter.com/ZowieErickson)