# Random Message Generator

This project is a simple and fun JavaScript program that generates a unique random message every time you run it. The message is composed by randomly selecting elements from at least three different categories, such as subjects, actions, and places.

You can easily customize the lists and the format for various purposes, including astrology predictions, inspirational quotes, or silly jokes.

## Features

- Truly random message generation
- Easily customizable categories
- Minimal and clean JavaScript code

## How it works

1. Define arrays with different types of words or phrases.
2. Randomly select one element from each array.
3. Combine them to form a unique message.
4. Print the message to the console.

## Example

```js
const subjects = ['The cat', 'A wise man', 'Your future self'];
const actions = ['will eat', 'will discover', 'will avoid'];
const places = ['on Mars', 'in the kitchen', 'under the bed'];

function generateMessage() {
  const message = [
    subjects[Math.floor(Math.random() * subjects.length)],
    actions[Math.floor(Math.random() * actions.length)],
    places[Math.floor(Math.random() * places.length)],
  ].join(' ');
  return message;
}

console.log(generateMessage());
```

## Customization

Feel free to edit the arrays and message structure to suit your style or theme!
