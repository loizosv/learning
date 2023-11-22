1. Why do we need to `import React from "react"` in our files?
In order to use react we need to import the necessary dependancies. otherwise it the .js file will be considered as vanilla JavaScript!
Importing React meaning we enable usage of JSX

2. If I were to console.log(page) in index.js, what would show up?
If the React is imported a JavaScript object will be displayed!

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
The above code is not sarrounded by any parent element which is required by JSX!

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means that a peace of code is already declared while imperative means the code is on the go!

Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.


5. What does it mean for something to be "composable"?
React is using components which basically allows the developer to re-use the same piece of code without having to rewrite that code. This code is stored in components therefore React is composable!