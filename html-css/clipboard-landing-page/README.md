# Frontend Mentor - Clipboard Landing Page Solution

This is a solution to the [Clipboard Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-gjw_ycHt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for interactive elements
- Download the app for iOS and Mac OS

### Screenshot

![](design/desktop-design.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/clipboard-landing-page-qn4ROjUz99](https://www.frontendmentor.io/solutions/clipboard-landing-page-qn4ROjUz99)
- Live Site URL: [https://oliviorui.github.io/practice-projects/html-css/clipboard-landing-page/index.html](https://oliviorui.github.io/practice-projects/html-css/clipboard-landing-page/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox & Grid
- Mobile-first workflow
- Custom fonts with `@font-face`

### What I learned

This project helped me improve my skills in **responsive design** and working with **background images** for different screen sizes. I also applied **CSS Flexbox and Grid** to organize content efficiently.

One challenge I faced was ensuring the background images changed properly based on screen size:

```css
header {
    background-image: url('images/bg-header-mobile.png');
    background-repeat: no-repeat;
    background-size: 100vw;
}

@media (min-width: 1440px) {
    header {
        background-image: url('images/bg-header-desktop.png');
    }
}
```

Additionally, I practiced creating a flexible button layout:

```css
.buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0 150px;
}

@media (min-width: 1440px) {
    .buttons {
        flex-direction: row;
        justify-content: center;
    }
}
```

### Continued development

Moving forward, I want to:

- Explore more advanced **CSS animations** to enhance user interaction
- Improve **accessibility** by ensuring good contrast and keyboard navigation
- Experiment with **CSS variables** for easier theme customization

### Useful resources

- [CSS Tricks - Background Images](https://css-tricks.com/perfect-full-page-background-image/) - Helped me manage different background images for mobile and desktop.
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - A great reference for CSS Grid layout.

## Author

- Frontend Mentor - [@oliviorui](https://www.frontendmentor.io/profile/oliviorui)

## Acknowledgments

A big thanks to the Frontend Mentor community for their feedback and support!