# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)
![](../assets/nw/nw1.png)
![](../assets/nw/nw2.png)
![](../assets/nw/nw3.png)
![](../assets/nw/nw4.png)
![](../assets/nw/nw5.png)
![](../assets/nw/nw6.png)
![](../assets/nw/nw7.png)
![](../assets/nw/nw8.png)


### Links

- Solution URL: [Add solution URL here](https://https://github.com/5Akan/newsletter-signup)
- Live Site URL: [Add live site URL here](https://nw1.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library

### What I learned
Authentication of the email
Used test() object for the first time to compare value of 'regx' with 'email' variables
Understood how to use params to transfer values accross routes 
Learnt importing of useRouter from Vue for the setup type 

```html
 <form @submit.prevent = "verify" >
          <label>
            Email Address
             <div v-if="error">
              <p class="error">{{error}}</p>
            </div>
          </label>
             <input class="input" type="text" v-model= "email" placeholder="email@company.com" :class= "inputError" @input= "nullForm" @blur= "outfocus">
            <div v-if= "verify"> 
              <button :disabled = "!email.length" class="btn" >Subscibe to monthly newsletter</button>
            </div> 
 </form>
```
```js
const email = ref("");
const regx = ref(/^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/);

 const verify = () => {
    if (regx.value.test(email.value)){
      // console.log("Email confirmed");
      router.push({name:'congrats', params:{value:email.value}});
      inputError.value = false;
     
    }else{     
      //  console.log("Email wrong");
       error.value = "Valid email required"
       console.log(error.value);
     inputError.value = true;
     
    }
```
### Continued development
Responsiveness of the website in different devices screen sizes
Further improvement in Vuejs
Want to learn SASS for better cascading

### Useful resources

- [Example resource 1](https://www.simplilearn.com) - Helped with email verification
- [Example resource 2](https://www.authjs.com) -This provided a concept on email authentification.
- [Example resource 3](https://www.stackoverflow.com) -Provided some insights into some most corrections

## Author

- GitHub - [@5Akan](https://www.github.com/@5Akan)
- Frontend Mentor - [@5Akan](https://www.frontendmentor.io/profile/@5Akan)
- Twitter - [@AkanimohO](https://www.twitter.com/AkanimohO)
- Stackoverflow - [Akanimoh Samuel Obot](https://www.stackoverflow.com/users/13851788/akanimoh-samuel-obot?tab=profile)

