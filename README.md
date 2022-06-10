# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/base-apparel-comming-soon-screenshot.png)

### Links

- Solution URL: [github.com/andresgrdn/base-apparel-coming-soon](https://github.com/andresgrdn/base-apparel-coming-soon)
- Live Site URL: [andresgrdn.github.io/base-apparel-coming-soon/](https://andresgrdn.github.io/base-apparel-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

**Form validation process**

I have used [form invalid event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) to make a change from normal form style to warning form styles to visualy inform the user that the input is invalid. And I learned about the [validity process](https://html.spec.whatwg.org/multipage/forms.html#writing-a-form's-user-interface:~:text=When%20a%20form%20is%20submitted%2C%20invalid%20events%20are%20fired%20at%20each%20form%20control%20that%20is%20invalid.%20This%20can%20be%20useful%20for%20displaying%20a%20summary%20of%20the%20problems%20with%20the%20form%2C%20since%20typically%20the%20browser%20itself%20will%20only%20report%20one%20problem%20at%20a%20time.) that occurs when a form is submitted.

Form pseudo classes :valid :invalid and its use

**Toggle custom style clases from js file**

With the [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) toggle method I've toggle a class to hidden an element from the DOM. With some help from the DOM and JS.

```css
.hidden {
  display: none;
}
```

**get & post methods from the http protocol:**

- The [post method](https://html.spec.whatwg.org/multipage/forms.html#configuring-a-form-to-communicate-with-a-server) works when I have a server listening to the data. It appends the data to the request body and then it's sended to the server. **It's recommended to create or update data from a resource.**
- The [get method](https://www.w3schools.com/tags/ref_httpmethods.asp#:~:text=The%20GET%20Method,a%20specified%20resource.) works adding the data submited with the URI address as unicode characters & then it's send this new URI to the action address specified into the form action attribute. It's useful to **get data from a specified resource.**

**Button aria label for accesability**


I had an accessibility issue when I wanted to use an icon image instead of a text label inside the submit button and searching for a solution, I found the [aria-label](https://web.dev/button-name/?utm_source=lighthouse&utm_medium=devtools) attribute, this attribute fixed the issue and it opens a new way to think on web development.

```html
<button type="submit" aria-label="Submit email"></button>
```


### Continued development

**Toggle custom style clases from js file**

This would allow me to make more complex ui without merging styles with functionality.

### Useful resources

- [height property | MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/height#:~:text=Percentages,initial%20containing%20block.) - This help me when I have troubles with sizing an image whit respect to the parent element.
- [form docs | MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) - This is an amazing article which helped me understand how to use the form element.
- [letter spacing docs | MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing#:~:text=to%20justify%20text.-,%3Clength%3E,-Specifies%20extra%20inter) - From this article I learn to spacing letters from the styling file.
- [background image drawing order | CSSWG drafts](https://drafts.csswg.org/css-backgrounds/#background-image:~:text=This%20property%20sets%20the%20background%20image(s)%20of%20an%20element.%20Images%20are%20drawn%20with%20the%20first%20specified%20one%20on%20top%20(closest%20to%20the%20user)%20and%20each%20subsequent%20image%20behind%20the%20previous%20one.) - I could fixed an issue with the hover pseudo class on the submit button. When hover the button wasn't changing the background gradient.
- [picture element | MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - On this page I learned about responsive image loading, The picture  element allows to load different images for different viewport sizes, using the meta attribute.
- [Writting a form's user interface | Whatwg](https://html.spec.whatwg.org/multipage/forms.html#writing-a-form's-user-interface) - A useful resource to write forms ui.

## Author

- Website - [Andres Gordon](https://andresgrdn.github.io)
- Frontend Mentor - [@andresgrdn](https://www.frontendmentor.io/profile/andresgrdn)
- Twitter - [@andresgrdn](https://www.twitter.com/andresgrdn)
